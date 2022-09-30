import '../styles/about.css';

const AboutPage = () => {
  return (
    <div className="container-m">
      <div className="container-about">
        <div className="wrap-about">
            <span className="about-box">
                <img src="../images/logo.jpeg" alt="DevModas" />

            </span>

            <span className="about-text">DevModas é um e-commerce que traz o melhor da moda vestuária para o público que se identifica com a área de desenvolvimento e programação.  </span>
            <br></br> 
            <span className="about-text">Criado em 2022 por um grupo muito empenhado de estudantes de programação que, inicialmente, se reuniu durante o programa de capacitação GODEV oferecido e gerido pela Ímã Learning Place nesse mesmo ano, o projeto tem a meta de trazer aos nossos queridos clientes um ambiente confortável, em que se sintam à vontade e representados com todo o carinho que nossas peças exclusivas podem proporcionar.  </span>
            <br></br>
            <span className="about-text">As estampas em nossos produtos buscam remeter sempre à temas cotidianos do dia a dia de quem atua, ou convive com pessoas da área, trazendo de forma sutil e descontraída mais atenção para questões tão importantes desse meio.  </span>
            <br></br>
            <span className="about-text">Navegue pela nossa plataforma, confira as coleções e promoções, e seja mais um Dev feliz e realizado que foi tocado pela da DevModas!! </span>
            
        </div>
      </div>
    </div>
  );
};

export default AboutPage;