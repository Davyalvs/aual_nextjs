import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Head from "next/head"
import styles from '@/styles/Details.module.css'
import Link from "next/link"

type Info = {
    name: string
    descricao: string
    ingredientes: []
    preco: number
}

export const getServerSideProps: GetServerSideProps<{
    categorias: Info[]
}> = (async (context) => {
    const {id} = context.query
    const res = await fetch(`https://raw.githubusercontent.com/EdPPF/dados-listaNext/main/produtos/${id}.json`)
    const categorias = await res.json()
    return { props: { categorias } }
})

export default function Details({categorias}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return(
        <section className={styles.section}>
            <table className={styles.table}>
                <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Ingrediente</th>
                    <th>Preço</th>
                </tr>
                {categorias.map((categoria, index) => {
                    return(
                        <tr className={index % 2 === 0 ? styles.evenRow : ''}>
                            <td>{categoria.name}</td>
                            <td>{categoria.descricao}</td>
                            <td>{categoria.ingredientes.join(', ')}</td>
                            <td>{categoria.preco}</td>
                        </tr>
                    )
                }
                )
                }
            </table>
            <Link href="/">voltar</Link>
        </section>
            
    )
}
