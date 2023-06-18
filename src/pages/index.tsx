import Image from 'next/image'
import Link from "next/link"
import { Inter } from 'next/font/google'
import Page_header from '@/components/header'
import Page_footer from '@/components/footer'
import { Josefin_Sans } from 'next/font/google'
/*import Page_ejemplo from '@/components/ejemplo'*/
import React from 'react';
import ReactDOM from 'react-dom';
import ChatGPT from './chatBot';



export default function Home() {
  return (
    <>
      <header>
        <Page_header></Page_header>
      </header>
      <nav className="nav-home">
        <h1 className="company-name">Mi aplicacion </h1>
        <div>
          <ChatGPT />
        </div>
      </nav>
      <footer>
        <Page_footer></Page_footer>
      </footer>
    </>
  )
}
