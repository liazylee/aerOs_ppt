import React from 'react';
import styled, { keyframes } from 'styled-components';
import { SlideContainer, SlideTitle, SlideSubtitle, GradientText, LogoContainer } from './SlideStyles';
import { AerosLogo } from './Icons';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const TitleSlideContainer = styled(SlideContainer)`
  background: linear-gradient(135deg, rgba(26, 60, 110, 0.9) 0%, rgba(0, 160, 176, 0.8) 100%), 
              url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80') center/cover no-repeat;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 70%);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${fadeIn} 1s ease-out;
`;

const MainTitle = styled(SlideTitle)`
  font-size: 56px;
  margin-bottom: 15px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const TagLine = styled.p`
  font-size: 20px;
  margin-top: 40px;
  font-weight: 500;
  font-style: italic;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.5s;
`;

const Presenter = styled.div`
  margin-top: 60px;
  font-size: 18px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.8s;
  
  p {
    margin: 5px 0;
  }
  
  .name {
    font-weight: 600;
  }
`;

const AnimatedLogo = styled(LogoContainer)`
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 1s;
`;

const Slide1 = () => {
  return (
    <TitleSlideContainer>
      <ContentWrapper>
        <MainTitle>
          Personalized Training with <GradientText>AI & aerOS</GradientText>
        </MainTitle>
        <SlideSubtitle>
          Empowering athletes with intelligent, private, real-time coaching
        </SlideSubtitle>
        
        <TagLine>
          The Future of Fitness is Edge-Intelligent
        </TagLine>
        
        <Presenter>
          <p className="name">Zhenyi Li</p>
          <p>{new Date().toLocaleDateString()}</p>
        </Presenter>
        
        <AnimatedLogo>
          <AerosLogo />
        </AnimatedLogo>
      </ContentWrapper>
    </TitleSlideContainer>
  );
};

export default Slide1; 