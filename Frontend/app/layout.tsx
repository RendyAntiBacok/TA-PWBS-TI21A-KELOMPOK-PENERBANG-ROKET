"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 

 import './styles/globals.css'
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
        <div>

        
      <img src="./images/logo.png" alt="logo" />
      </div>
      <div className="flex flex-1 " >
        <ul className=" flex space-x-4 ">
          <li><Link href="/">home</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/settings ">settings</Link></li>
          <li><Link href="/cari">cari orang</Link></li>
        </ul>
      </div>
      </header>
      
      


      <section className={style.content}>
      {children}
      </section>

      <footer className={style.layout}>&copy; 2023 | PWBS - TI21A</footer>
      </body>
    </html>
  )
  } 