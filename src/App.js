
import NavBar from './components/NavBar/NavBar';
import './App.scss';
import ImageCarousel from './components/Carousel/ImageCarousel';
import ImageText from './components/ImageText/ImageText';
import Links from './components/Links/Links';
import CalendarPicker from './components/DatePicker/CalendarPicker';
import Accommodation from './components/Accommodation/Accommodation';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <div className="App">
      <NavBar />
      <ImageCarousel slides={ImageData} />
      <CalendarPicker />
      <ImageText />
      <Links />
      <Accommodation />
      <PhotoGallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
