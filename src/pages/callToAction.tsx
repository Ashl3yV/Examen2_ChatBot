import React from "react";
import Page_header from '@/components/header'
import Page_footer from '@/components/footer'

const CallToAction = () => {
  return (
    <>
      <header>
        <Page_header></Page_header>
      </header>
      <div >
        <img className="imagen" src="/img/Logo.jpg" alt="foto" />
        <h2 className="company-about">Para contrataciones</h2>
        <form>
          <a className="company-about" href="mailto:ashley.mendoza.vasquez@est.una.ac.cr"> Correo </a>
          <a className="company-about" href="https://www.linkedin.com/in/ashley-mendoza-317711274/"> Linked In </a>
        </form>
      </div>
      <footer>
        <Page_footer></Page_footer>
      </footer>
    </>
  );
};

export default CallToAction;