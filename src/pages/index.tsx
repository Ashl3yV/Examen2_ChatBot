import Image from 'next/image'
import Link from "next/link"
import { Inter } from 'next/font/google'
import Page_header from '@/components/header'
import Page_footer from '@/components/footer'
import { Josefin_Sans } from 'next/font/google'
import Page_ejemplo from '@/components/ejemplo'

export default function Home() {
  return (
    <>
      <header>
        <Page_ejemplo></Page_ejemplo>
      </header>
      <nav className="nav-home">
        <h1 className="company-name">Mi aplicacion </h1>
      </nav>
      <footer>
        <Page_footer></Page_footer>
      </footer>
    </>
  )
}
