import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slide1 from './components/Slide1';
import AerosIntroSlide from './components/AerosIntroSlide';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Slide5 from './components/Slide5';
import Slide6 from './components/Slide6';
import Slide7 from './components/Slide7';
import Slide8 from './components/Slide8';
import Slide9 from './components/Slide9';


const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const SlideWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  opacity: ${props => (props.active ? 1 : 0)};
  z-index: ${props => (props.active ? 2 : 1)};
  pointer-events: ${props => (props.active ? 'all' : 'none')};
`;

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10;
  
  const slides = [
    <Slide1 />,
    <AerosIntroSlide />,
    <Slide2 />,
    <Slide3 />,
    <Slide4 />,
    <Slide5 />,
    <Slide6 />,
    <Slide7 />,
    <Slide8 />,
    <Slide9 />,
  ];

  const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentSlide]);

  return (
    <AppContainer>
      {slides.map((slide, index) => (
        <SlideWrapper 
          key={index} 
          active={index === currentSlide}
        >
          {slide}
        </SlideWrapper>
      ))}

      <div className="navigation-controls" style={{ display: 'none' }}>
        <button onClick={goToPrevSlide} disabled={currentSlide === 0}>Previous</button>
        <button onClick={goToNextSlide} disabled={currentSlide === totalSlides - 1}>Next</button>
      </div>
      
      <div className="slide-indicator" style={{ display: 'none' }}>
        {currentSlide + 1} / {totalSlides}
      </div>
    </AppContainer>
  );
}

export default App; 