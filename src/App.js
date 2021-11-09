import react from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.scss';
import ImageCarousel from './components/Carousel/ImageCarousel';
import ImageText from './components/ImageText/ImageText';
import Links from './components/Links/Links';
import CalendarPicker from './components/DatePicker/CalendarPicker';
import Accommodation from './components/Accommodation/Accommodation';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';



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
    </div>
  );
}

export default App;
