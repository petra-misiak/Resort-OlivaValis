import react from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.scss';
import ImageCarousel from './components/Carousel/ImageCarousel';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ImageCarousel slides={ImageData} />
    </div>
  );
}

export default App;
