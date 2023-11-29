import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

type Cate = {
  id: number
  name: string
}

export const getServerSideProps = (async (context) => {
  const res = await fetch('https://raw.githubusercontent.com/EdPPF/dados-listaNext/main/categorias.json')
  const categorias = await res.json()
  return {props: { categorias }}
}) satisfies GetServerSideProps<{ categorias: Cate }>

export default function Home({categorias}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return ( 
    <div> 
      <Head>
        <title>Cardapio</title>
      </Head>
      <h1 className={styles.h1}>Comidas gostosas</h1>
      <main className={styles.home}>
        {categorias.map((categorias:Cate) =>(
          <Link href={`/categorias/${categorias.id}`}>
            <h3>{categorias.name} (id.{categorias.id})</h3>
          </Link>
        ))}
      </main> 
    </div> 
  )
}
