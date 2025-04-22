import React from 'react';
import styled from 'styled-components';
import { SlideContainer, SlideTitle, ContentWrapper, TwoColumnLayout, LogoContainer, GradientBanner } from './SlideStyles';
import { CloudIcon, CostIcon, StaticIcon, AerosLogo } from './Icons';

const ProblemSlideContainer = styled(SlideContainer)`
  background-color: #f8f9fa;
`;

const ProblemTitle = styled(SlideTitle)`
  color: var(--primary-color);
  margin-bottom: 30px;
`;

const ProblemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

const ProblemItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  
  .icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    background: linear-gradient(135deg, #ff6b6b 0%, #f39c12 100%);
    color: white;
    flex-shrink: 0;
  }
  
  .content {
    h3 {
      font-size: 22px;
      margin-bottom: 5px;
      color: var(--neutral-color);
    }
    
    p {
      color: #666;
      font-size: 16px;
    }
  }
`;

const ImageColumn = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Slide2 = () => {
  return (
    <ProblemSlideContainer>
      <ContentWrapper>
        <ProblemTitle>Today's Training Challenges</ProblemTitle>
        
        <TwoColumnLayout>
          <ImageColumn>
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1" 
              alt="Athlete facing training challenges" 
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover'
              }}
            />
          </ImageColumn>
          
          <ProblemList>
            <ProblemItem>
              <div className="icon">
                <CloudIcon />
              </div>
              <div className="content">
                <h3>Cloud Dependency</h3>
                <p>Latency issues and privacy concerns with cloud-based systems</p>
              </div>
            </ProblemItem>
            
            <ProblemItem>
              <div className="icon">
                <CostIcon />
              </div>
              <div className="content">
                <h3>Infrastructure Costs</h3>
                <p>Expensive equipment creating high barriers to entry</p>
              </div>
            </ProblemItem>
            
            <ProblemItem>
              <div className="icon">
                <StaticIcon />
              </div>
              <div className="content">
                <h3>Static Programming</h3>
                <p>Training plans that don't adapt to real-time performance</p>
              </div>
            </ProblemItem>
          </ProblemList>
        </TwoColumnLayout>
        
        <GradientBanner>
          The Gap: No unified platform that's fast, private, and adaptive
        </GradientBanner>
      </ContentWrapper>
      
      <LogoContainer>
        <AerosLogo />
      </LogoContainer>
    </ProblemSlideContainer>
  );
};

export default Slide2; 