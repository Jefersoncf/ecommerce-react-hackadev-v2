import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import About from '../components/About';


import { useDispatch, useSelector } from 'react-redux';

const AboutPage = () => {
  
  return (
    <>
      <NavBar></NavBar>

      <About></About>

      <Footer></Footer>
    </>
  );
};

export default AboutPage;