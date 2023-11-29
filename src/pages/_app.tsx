import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  let [total, setTotal] = useState(0)

  return (
    <>
      <Navbar total={total}/>
      <Component setTotal={setTotal} {...pageProps} />
    </>
  )
}
