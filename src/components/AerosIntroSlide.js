import React from 'react';
import styled from 'styled-components';
import { SlideContainer, SlideTitle, ContentWrapper, LogoContainer, Divider, TwoColumnLayout } from './SlideStyles';
import { AerosLogo, OrchestrationIcon } from './Icons';


const AerosIntroContainer = styled(SlideContainer)`
  background: linear-gradient(135deg, #f0f6ff 0%, #e6f3f5 100%);
`;

const AerosTitle = styled(SlideTitle)`
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const AerosDefinition = styled.div`
  font-size: 18px;
  line-height: 1.6;
  margin: 20px 0;
  color: var(--neutral-color);
  text-align: justify;
`;

const AerosDiagram = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const DiagramInner = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 400px;
`;

const DiagramCore = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: var(--gradient);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 24px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 2;
  text-align: center;
`;

const DiagramNode = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;
  font-size: 14px;
  padding: 10px;
  text-align: center;
  font-weight: 600;
  color: var(--primary-color);
  
  &.node-1 {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  
  &.node-2 {
    top: 35%;
    right: 0;
  }
  
  &.node-3 {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  
  &.node-4 {
    top: 35%;
    left: 0;
  }
  
  .icon {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
    color: var(--secondary-color);
  }
`;

const ConnectingLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px dashed var(--secondary-color);
  z-index: 0;
`;

const KeyFeatures = styled.div`
  margin-top: 20px;
  
  h3 {
    font-size: 22px;
    color: var(--primary-color);
    margin-bottom: 15px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      font-size: 16px;
      line-height: 1.5;
      
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 8px;
        width: 10px;
        height: 10px;
        background: var(--accent-color);
        border-radius: 50%;
      }
    }
  }
`;

const AerosIntroSlide = () => {
  return (
    <AerosIntroContainer>
      <ContentWrapper>
        <AerosTitle>What is aerOS?</AerosTitle>
        <Divider />
        
        <TwoColumnLayout>
          <div>
            <AerosDefinition>
              aerOS (Autonomous, scalablE, tRustworthy, intelligent European meta Operating System) is a modular 
              meta operating system for the IoT edge-cloud continuum. It orchestrates services on heterogeneous hardware 
              nodes, enabling distributed computing and storage while maintaining data privacy and trust. 
              aerOS focuses on distributed data management to make applications more intelligent and 
              proactive, bringing services closer to data sources without sacrificing aggregated analysis.
            </AerosDefinition>
            
            <KeyFeatures>
              <h3>Key Features</h3>
              <ul>
                <li>Optimal orchestration across the IoT edge-cloud continuum</li>
                <li>Distributed AI with explainability and privacy preservation</li>
                <li>Decentralized security and trust framework</li>
                <li>Data autonomy with ownership control and governance</li>
                <li>Intelligent network functions with latency control</li>
              </ul>
            </KeyFeatures>
          </div>
          <AerosDiagram>
            <DiagramInner>
              <ConnectingLine />
              <img 
                src="https://aeros-project.eu/wp-content/uploads/2022/07/aeros-vision.png" 
                // srcSet="https://aeros-project.eu/wp-content/uploads/2022/07/aeros-vision-300x166.png 300w, https://aeros-project.eu/wp-content/uploads/2022/07/aeros-vision-705x391.png 705w, https://aeros-project.eu/wp-content/uploads/2022/07/aeros-vision-768x426.png 768w, https://aeros-project.eu/wp-content/uploads/2022/07/aeros-vision.png 770w"
                alt="aerOS Architecture" 
                style={{ 
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '120%', // Increased from 100% to make the image larger
                  maxWidth: '600px', // Added max-width to ensure it doesn't get too large
                  height: 'auto',
                  zIndex: 1,
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)' // Added shadow for better visibility
                }} 
              />
            </DiagramInner>
          </AerosDiagram>
        </TwoColumnLayout>
      </ContentWrapper>
      
      <LogoContainer>
        <AerosLogo />
      </LogoContainer>
    </AerosIntroContainer>
  );
};

export default AerosIntroSlide; 