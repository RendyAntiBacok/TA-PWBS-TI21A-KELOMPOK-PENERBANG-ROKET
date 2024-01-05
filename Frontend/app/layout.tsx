"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 

//  import './styles/globals.css'
// panggil style module
 import style from "./styles/style.module.css"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const router=useRouter()

  const onClickurl=(url:string)=>{
    router.push(url)
  }
  return (
    <html lang="en">
      <head>
        {/* tambahan favicon */}
        <link rel="shortcut icon" href="./images/favicon.png" type="image/x-icon" />
      </head>

      <title>APOTEK KPR</title>

      <body className={style.layout}>
      <header className={style.header}>
      <img src="./images/logo.png" alt="logo" />
      </header>
      <ul>
        <li><Link href="/">home</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/settings ">settings</Link></li>
      </ul>
      


      <section className={style.content}>
      {children}
      </section>

      <footer className={style.layout}>&copy; 2023 | PWBL - TI20A</footer>
      </body>
    </html>
  )
  } 