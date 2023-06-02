import './App.scss'
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Carousel from './components/Carousel/Carousel';
import Services from './components/Services/Services';
import TruckCard from './components/TruckCard/TruckCard';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import Consultancy from './components/Consultancy/Consultancy';
import Sponser from './components/Sponser/Sponser';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto Slab:300,500'], // Specify the desired font and its weights
      },
    });
  }, []);
  return (

    <>
      <Header />
      <main>
        <Carousel />
        <Services />
        <Blog />
        <TruckCard />
        <Contact />
        <Consultancy />
        <Sponser />
      </main>
      <Footer />
    </>
  );
}

export default App;
