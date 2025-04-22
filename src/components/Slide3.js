import React from 'react';
import styled from 'styled-components';
import { SlideContainer, SlideTitle, ContentWrapper, LogoContainer, Divider } from './SlideStyles';
import { AiCoachingIcon, EdgeComputingIcon, OrchestrationIcon, AerosLogo } from './Icons';

const SolutionSlideContainer = styled(SlideContainer)`
  background-color: white;
`;

const SolutionTitle = styled(SlideTitle)`
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const HubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  position: relative;
`;

const CentralHub = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: var(--gradient);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  z-index: 2;
  position: relative;
`;

const ComponentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
  margin-top: 60px;
`;

const Component = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  .icon-container {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    border: 3px solid var(--secondary-color);
    
    svg {
      width: 60px;
      height: 60px;
      color: var(--primary-color);
    }
  }
  
  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: var(--primary-color);
  }
  
  p {
    font-size: 16px;
    color: var(--neutral-color);
    line-height: 1.4;
  }
`;

const ConnectingLine = styled.div`
  position: absolute;
  width: 800px;
  height: 800px;
  border: 2px dashed var(--secondary-color);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const PrivacyStatement = styled.div`
  margin-top: 50px;
  text-align: center;
  font-weight: 600;
  color: var(--secondary-color);
  font-size: 18px;
`;

const Slide3 = () => {
  return (
    <SolutionSlideContainer>
      <ContentWrapper>
        <SolutionTitle>Solution Overview</SolutionTitle>
        <Divider />
        
        <HubContainer>
          <ConnectingLine />
          <CentralHub>
            Smart Decentralized Training
          </CentralHub>
          
          <ComponentsWrapper>
            <Component>
              <div className="icon-container">
                <AiCoachingIcon />
              </div>
              <h3>AI Coaching</h3>
              <p>Adaptive guidance tailored to your progress</p>
            </Component>
            
            <Component>
              <div className="icon-container">
                <EdgeComputingIcon />
              </div>
              <h3>Edge Computing</h3>
              <p>Real-time feedback without delays</p>
            </Component>
            
            <Component>
              <div className="icon-container">
                <OrchestrationIcon />
              </div>
              <h3>aerOS</h3>
              <p>Seamless orchestration across your devices</p>
            </Component>
          </ComponentsWrapper>
        </HubContainer>
        
        <PrivacyStatement>
          Privacy-first design with intelligent edge computing
        </PrivacyStatement>
      </ContentWrapper>
      
      <LogoContainer>
        <AerosLogo />
      </LogoContainer>
    </SolutionSlideContainer>
  );
};

export default Slide3; 