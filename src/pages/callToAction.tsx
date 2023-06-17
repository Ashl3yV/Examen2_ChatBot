import React from "react";
import Page_header from '@/components/header'
import Page_footer from '@/components/footer'

const CallToAction = () => {
  return (
    <>
    <header>
        <Page_header></Page_header>
      </header>
    <div className="call-to-action">
      <h2 className="font-bold">Para contrataciones</h2>
      <form>
        <a href="mailto:ashley.mendoza.vasquez@est.una.ac.cr"> Correo </a><br />
        <a href="https://www.linkedin.com/in/ashley-mendoza-317711274/"> Linked In </a>
      </form>
    </div>
    <footer>
        <Page_footer></Page_footer>
      </footer>
    </>
  );
};

export default CallToAction;