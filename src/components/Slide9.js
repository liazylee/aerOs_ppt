import React from 'react';
import styled from 'styled-components';
import { SlideContainer, SlideTitle, ContentWrapper, LogoContainer, Divider } from './SlideStyles';
import { AerosLogo, EducationIcon, RehabIcon, SeniorIcon, PublicHealthIcon } from './Icons';

const FutureSlideContainer = styled(SlideContainer)`
  background: linear-gradient(135deg, #f8f9fb 0%, #e6f3f5 100%);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(0, 160, 176, 0.1) 0%, rgba(26, 60, 110, 0) 70%);
    border-radius: 50%;
    top: -200px;
    right: -200px;
    z-index: 0;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(124, 181, 24, 0.1) 0%, rgba(26, 60, 110, 0) 70%);
    border-radius: 50%;
    bottom: -100px;
    left: -100px;
    z-index: 0;
  }
`;

const FutureTitle = styled(SlideTitle)`
  color: var(--primary-color);
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
`;

const QuadrantContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px;
  width: 100%;
  margin: 40px 0;
  position: relative;
  z-index: 1;
`;

const QuadrantItem = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
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
  }
  
  h3 {
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
    color: var(--primary-color);
  }
  
  p {
    font-size: 15px;
    text-align: center;
    color: var(--neutral-color);
    line-height: 1.4;
  }
`;

const APINote = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 15px 25px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: var(--gradient);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  
  p {
    font-size: 16px;
    color: var(--primary-color);
    font-weight: 500;
  }
`;

const HorizonLine = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, var(--secondary-color) 50%, transparent 100%);
  bottom: 35%;
  left: 0;
  z-index: 0;
`;

// New components for enhanced visualization
const ExpansionVisualizer = styled.div`
  width: 100%;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
`;

const RoadmapWrapper = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  position: relative;
`;

const RoadmapTitle = styled.h3`
  font-size: 22px;
  text-align: center;
  margin-bottom: 25px;
  color: var(--primary-color);
`;

const Timeline = styled.div`
  position: relative;
  width: 100%;
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 3px;
  margin: 60px 0;
  
  &:before {
    content: 'CURRENT';
    position: absolute;
    top: -30px;
    left: 0;
    font-size: 12px;
    font-weight: 700;
    color: var(--primary-color);
  }
  
  &:after {
    content: 'FUTURE';
    position: absolute;
    top: -30px;
    right: 0;
    font-size: 12px;
    font-weight: 700;
    color: var(--accent-color);
  }
`;

const TimelineMarker = styled.div`
  position: absolute;
  top: 50%;
  left: ${props => props.position || '0%'};
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color || 'var(--primary-color)'};
  z-index: 2;
  
  .marker-label {
    position: absolute;
    white-space: nowrap;
    top: ${props => props.labelPosition === 'top' ? '-40px' : '30px'};
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.color || 'var(--primary-color)'};
  }
  
  .marker-detail {
    position: absolute;
    white-space: nowrap;
    width: 150px;
    text-align: center;
    top: ${props => props.labelPosition === 'top' ? '-65px' : '55px'};
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: var(--neutral-color);
  }
`;

const ExpansionStats = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .stat-value {
    font-size: 32px;
    font-weight: 700;
    color: ${props => props.color || 'var(--primary-color)'};
    margin-bottom: 5px;
  }
  
  .stat-label {
    font-size: 14px;
    color: var(--neutral-color);
    text-align: center;
  }
`;

const Slide9 = () => {
  const expansionAreas = [
    {
      title: "Education",
      description: "Personalized physical education in schools",
      icon: <EducationIcon />,
      bgColor: "linear-gradient(135deg, #1a3c6e 0%, #2a5298 100%)"
    },
    {
      title: "Rehabilitation",
      description: "AI-guided recovery for injury and surgery patients",
      icon: <RehabIcon />,
      bgColor: "linear-gradient(135deg, #00a0b0 0%, #39c8bb 100%)"
    },
    {
      title: "Senior Fitness",
      description: "Adapted programs for mobility and independence",
      icon: <SeniorIcon />,
      bgColor: "linear-gradient(135deg, #7cb518 0%, #96d629 100%)"
    },
    {
      title: "Public Health",
      description: "Scalable national fitness initiatives",
      icon: <PublicHealthIcon />,
      bgColor: "linear-gradient(135deg, #1a3c6e 0%, #00a0b0 100%)"
    }
  ];

  return (
    <FutureSlideContainer>
      <HorizonLine />
      
      <ContentWrapper>
        <FutureTitle>Expanding the Intelligent Training Ecosystem</FutureTitle>
        <Divider />
        
        {/* New expansion roadmap visualization */}
        
        <QuadrantContainer>
          {expansionAreas.map((area, index) => (
            <QuadrantItem key={index} iconBg={area.bgColor}>
              <div className="icon">
                {area.icon}
              </div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </QuadrantItem>
          ))}
        </QuadrantContainer>
        
        <APINote>
          <p>Open API ecosystem for third-party health and wellness integration</p>
        </APINote>
      </ContentWrapper>
      
      <LogoContainer>
        <AerosLogo />
      </LogoContainer>
    </FutureSlideContainer>
  );
};

export default Slide9; 