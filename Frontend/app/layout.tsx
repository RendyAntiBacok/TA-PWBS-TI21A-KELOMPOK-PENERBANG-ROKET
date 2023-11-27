import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
//  import './styles/globals.css'
// panggil style module
 import style from "./styles/style.module.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'APOTEK KPR',
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* tambahan favicon */}
        <link rel="shortcut icon" href="./images/favicon.png" type="image/x-icon" />
      </head>

      <body className={style.layout}>
      <header className={style.header}>
      <img src="./images/logo.png" alt="logo" />
      </header>

      <section className={style.content}>
      {children}
      </section>

      <footer className={style.layout}>&copy; 2023 | PWBL - TI20A</footer>
      </body>
    </html>
  )
  } 