import Page_header from '@/components/header'
import Page_footer from '@/components/footer'
import React from 'react';
import Chat from '@/components/chatBot';

export default function Home() {
  return (
    <>
      <header>
        <Page_header></Page_header>
      </header>
      <nav className="nav-home">
        <h1 className="company-name">Mi aplicacion </h1>
        <div>
          <Chat/>
        </div>
      </nav>
      <footer>
        <Page_footer></Page_footer>
      </footer>
    </>
  )
}
