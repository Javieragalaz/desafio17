import Header from './components/Header';
import Image from './components/Card';
import Footer from './components/Footer'
import Mandril from './assets/mandril.jpeg'
import Spider from './assets/spider.jpeg'
import Titi from './assets/titi.jpeg'
import './App.css';

function App() {
  return (
    <div className='container'>
      <Header title='Galería de imágenes con React' />
      <div className='cards'>
        <Image title='Mandril' description='Los mandriles son fácilmente reconocibles por el color pardo oliváceo de su pelaje y sobre todo por la coloración azulada y rojiza de su cara y parte trasera. La cara de los machos muestra en sus hocicos vivos rojos y azules, éstos también tienen profundas estrías que recorren ambos lados del hocico, que destaca más dentro del pelaje blanco que enmarca la cara.' img={Mandril} />
        <Image title='Mono araña' description='Según la especie, su cuerpo mide de 65 a 90 cm de longitud, y la cola prensil de 60 a 92 cm. Son de apariencia más esbelta que los otros monos de la familia Atelidae y pesan entre 7 y 10 kg. Tienen cuatro dedos y carecen de pulgar. El cuerpo es alargado y los miembros largos; el color de las diferentes especies varía de castaño claro a negro.' img={Spider} />
        <Image title='Tití' description='Aproximadamente del tamaño de una ardilla, los monos tití también tienen pechos y vientres blancos, mientras que sus espaldas y colas están cubiertas de un largo pelaje negro y marrón. Tienen uñas en forma de garra, que son fundamentales para saltar de un árbol a otro en su hábitat forestal.' img={Titi} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
