import React from 'react';
import Page_header from '@/components/header'
import Page_footer from '@/components/footer'

const Presentatation = () => {
  return (
    <>
      <header>
        <Page_header></Page_header>
      </header>
      <div >
        <h1 className="company-about"> Bienvenido a mi aplicación</h1>
        
        <p className="contain">Soy Ashley Mendoza y soy estudiante de ingeneria en sistemas en la UNA,
          esta es una aplicacion que sirve consumiendo la api de ChatGPT y que te crea un ChatBot para poder tener un 
          generador de preguntas, 
          si me quieren conocer más puedever mi informacion en la pagina Linked In</p>
        <ul>
          <li className="company-end"><a href="https://www.linkedin.com/in/ashley-mendoza-317711274/">Link De Linked in</a></li>
        </ul>

      </div>
      <footer>
        <Page_footer></Page_footer>
      </footer>
    </>
  );
};

export default Presentatation;