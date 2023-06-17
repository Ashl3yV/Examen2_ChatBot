import React from 'react';
import Page_header from '@/components/header'
import Page_footer from '@/components/footer'

const Presentatation = () => {
  return (
    <>
    <header>
        <Page_header></Page_header>
      </header>
    <div id='Acerca'>
      <h1 className="font-bold"> Bienvenido a mi aplicación</h1>
      <p>Soy Ashley Mendoza y soy estudiante de ingeneria en sistemas en la UNA, si me quieren conocer mas puede 
        ver mi informacion en la pagina Linked In</p>
      <ul>
        <li><a href="https://www.linkedin.com/in/ashley-mendoza-317711274/">Link De Linked in</a></li>
      </ul>
      
    </div>
    <footer>
        <Page_footer></Page_footer>
      </footer>
    </>
  );
};

export default Presentatation;