import Page_header from '@/components/header'
import Page_footer from '@/components/footer'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default function Home() {
  return (
    <>
      <header>
        <Page_header></Page_header>
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
