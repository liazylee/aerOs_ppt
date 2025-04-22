import React from 'react';
import styled from 'styled-components';
import { SlideContainer, SlideTitle, ContentWrapper, LogoContainer, Divider } from './SlideStyles';
import { AerosLogo } from './Icons';

const CapabilitiesSlideContainer = styled(SlideContainer)`
  background-color: #f8f9fa;
`;

const CapabilitiesTitle = styled(SlideTitle)`
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const CapabilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  margin: 40px 0;
`;

const CapabilityCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
    
    .capability-details {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: ${props => props.iconBg || 'var(--gradient)'};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    color: white;
    
    img {
      width: 35px;
      height: 35px;
    }
  }
  
  h3 {
    font-size: 18px;
    text-align: center;
    margin-bottom: 12px;
    color: var(--primary-color);
  }
  
  p {
    font-size: 14px;
    text-align: center;
    color: var(--neutral-color);
    line-height: 1.4;
  }
`;

// New enhanced details that appear on hover
const CapabilityDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,1) 100%);
  padding: 15px;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s ease;
  border-top: 1px solid #eee;
  
  ul {
    padding-left: 20px;
    margin: 0;
    
    li {
      font-size: 12px;
      margin-bottom: 5px;
      color: var(--neutral-color);
      text-align: left;
    }
  }
`;

// New component for AI capability visualization
const AICapabilityDiagram = styled.div`
  width: 100%;
  margin-bottom: 30px;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const DiagramTitle = styled.h3`
  font-size: 20px;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 20px;
`;

const AIProcessFlow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ProcessNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  
  .node-icon {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    background: ${props => props.bgColor || 'var(--primary-color)'};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    color: white;
    
    svg {
      width: 30px;
      height: 30px;
    }
  }
  
  .node-label {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: var(--neutral-color);
  }
`;

const ProcessArrow = styled.div`
  flex-grow: 1;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, var(--secondary-color) 50%, transparent 100%);
  position: relative;
  margin: 0 10px;
  
  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 8px solid var(--secondary-color);
  }
  
  .arrow-label {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: var(--secondary-color);
    white-space: nowrap;
  }
`;

const Slide6 = () => {
  const capabilities = [
    {
      title: "Workout Personalization",
      description: "Adapts to your performance patterns and goals",
      icon: "https://img.icons8.com/ios/50/ffffff/property-script.png",
      bgColor: "linear-gradient(135deg, #1a3c6e 0%, #2a5298 100%)",
      details: [
        "User preference learning",
        "Performance trend analysis",
        "Adaptive difficulty scaling",
        "Goal-based optimization"
      ]
    },
    {
      title: "Injury Prevention",
      description: "Detects form issues before they cause problems",
      icon: "https://img.icons8.com/ios/50/ffffff/protection-mask.png",
      bgColor: "linear-gradient(135deg, #00a0b0 0%, #39c8bb 100%)",
      details: [
        "Real-time form analysis",
        "Joint stress monitoring",
        "Movement pattern recognition",
        "Preventive feedback alerts"
      ]
    },
    {
      title: "Fatigue Management",
      description: "Adjusts intensity based on biological markers",
      icon: "https://img.icons8.com/ios/50/ffffff/heart-with-pulse.png",
      bgColor: "linear-gradient(135deg, #7cb518 0%, #96d629 100%)",
      details: [
        "Heart rate variability analysis",
        "Sleep quality integration",
        "Recovery state assessment",
        "Adaptive intensity control"
      ]
    },
    {
      title: "Form Correction",
      description: "Real-time visual analysis of movement patterns",
      icon: "https://img.icons8.com/ios/50/ffffff/exercise.png",
      bgColor: "linear-gradient(135deg, #1a3c6e 0%, #2a5298 100%)",
      details: [
        "Computer vision movement tracking",
        "Pose estimation analysis",
        "Comparative benchmarking",
        "Progressive correction guidance"
      ]
    },
    {
      title: "Recovery Tracking",
      description: "Monitors wellness markers to optimize rest periods",
      icon: "https://img.icons8.com/ios/50/ffffff/sleeping.png",
      bgColor: "linear-gradient(135deg, #00a0b0 0%, #39c8bb 100%)",
      details: [
        "Muscle recovery prediction",
        "Rest interval optimization",
        "Active vs. passive recovery balance",
        "Physiological marker tracking"
      ]
    },
    {
      title: "Nutrition Integration",
      description: "Syncs with your diet to maximize results",
      icon: "https://img.icons8.com/ios/50/ffffff/natural-food.png",
      bgColor: "linear-gradient(135deg, #7cb518 0%, #96d629 100%)",
      details: [
        "Nutrient timing optimization",
        "Meal-workout synchronization",
        "Hydration-performance correlation",
        "Macronutrient balance suggestions"
      ]
    }
  ];

  return (
    <CapabilitiesSlideContainer>
      <ContentWrapper>
        <CapabilitiesTitle>Intelligent Coaching Capabilities</CapabilitiesTitle>
        <Divider />
        
        {/* New AI processing flow diagram */}
        <AICapabilityDiagram>
          <DiagramTitle>AI-Driven Coaching Process</DiagramTitle>
          <AIProcessFlow>
            <ProcessNode bgColor="#1a3c6e">
              <div className="node-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z"/>
                </svg>
              </div>
              <div className="node-label">Data Collection</div>
            </ProcessNode>
            
            <ProcessArrow>
              <div className="arrow-label">Secure Transfer</div>
            </ProcessArrow>
            
            <ProcessNode bgColor="#00a0b0">
              <div className="node-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H7v-8h3v8zm7 0h-5v-8h5v8z"/>
                </svg>
              </div>
              <div className="node-label">Analysis</div>
            </ProcessNode>
            
            <ProcessArrow>
              <div className="arrow-label">AI Processing</div>
            </ProcessArrow>
            
            <ProcessNode bgColor="#7cb518">
              <div className="node-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
              </div>
              <div className="node-label">Personalization</div>
            </ProcessNode>
            
            <ProcessArrow>
              <div className="arrow-label">Adaptation</div>
            </ProcessArrow>
            
            <ProcessNode bgColor="#1a3c6e">
              <div className="node-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>
                </svg>
              </div>
              <div className="node-label">Feedback</div>
            </ProcessNode>
          </AIProcessFlow>
        </AICapabilityDiagram>
        
        <CapabilitiesGrid>
          {capabilities.map((capability, index) => (
            <CapabilityCard key={index} iconBg={capability.bgColor}>
              <div className="icon">
                <img src={capability.icon} alt={capability.title} />
              </div>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              
              {/* New detailed information on hover */}
              <CapabilityDetails className="capability-details">
                <ul>
                  {capability.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </CapabilityDetails>
            </CapabilityCard>
          ))}
        </CapabilitiesGrid>
      </ContentWrapper>
      
      <LogoContainer>
        <AerosLogo />
      </LogoContainer>
    </CapabilitiesSlideContainer>
  );
};

export default Slide6; 