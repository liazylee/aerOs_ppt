import React from 'react';
import styled from 'styled-components';
import { SlideContainer, SlideTitle, ContentWrapper, LogoContainer, Divider } from './SlideStyles';
import { AerosLogo } from './Icons';

const JourneySlideContainer = styled(SlideContainer)`
  background: linear-gradient(180deg, #f0f6ff 0%, #e0f2f7 100%);
`;

const JourneyTitle = styled(SlideTitle)`
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const TimelineContainer = styled.div`
  width: 100%;
  margin: 50px 0;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient);
    transform: translateY(-50%);
    z-index: 1;
    border-radius: 4px;
  }
`;

const TimelineNodesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;

const TimelineNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22%;
  
  .node {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${props => props.active ? 'var(--gradient)' : 'white'};
    border: 3px solid var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    
    .time {
      font-size: 16px;
      font-weight: 600;
      color: ${props => props.active ? 'white' : 'var(--primary-color)'};
    }
  }
  
  h3 {
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
    color: var(--primary-color);
  }
  
  p {
    font-size: 14px;
    text-align: center;
    color: var(--neutral-color);
    line-height: 1.4;
  }
`;

const PrivacyNote = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-left: 4px solid var(--accent-color);
  padding: 15px;
  margin-top: 30px;
  border-radius: 4px;
  font-size: 16px;
  color: var(--neutral-color);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

const Slide4 = () => {
  return (
    <JourneySlideContainer>
      <ContentWrapper>
        <JourneyTitle>A Day with Your Intelligent Training System</JourneyTitle>
        <Divider />
        
        <TimelineContainer>
          <TimelineNodesContainer>
            <TimelineNode active={true}>
              <div className="node">
                <span className="time">7AM</span>
              </div>
              <h3>Morning Check-in</h3>
              <p>System evaluates recovery and adapts today's plan</p>
            </TimelineNode>
            
            <TimelineNode active={true}>
              <div className="node">
                <span className="time">12PM</span>
              </div>
              <h3>During Workout</h3>
              <p>Real-time form correction and intensity management</p>
            </TimelineNode>
            
            <TimelineNode active={true}>
              <div className="node">
                <span className="time">6PM</span>
              </div>
              <h3>Post-Session</h3>
              <p>Immediate feedback and goal adjustments</p>
            </TimelineNode>
            
            <TimelineNode active={false}>
              <div className="node">
                <span className="time">11PM</span>
              </div>
              <h3>Overnight</h3>
              <p>System learns and updates while maintaining data privacy</p>
            </TimelineNode>
          </TimelineNodesContainer>
        </TimelineContainer>
        
        <PrivacyNote>
          All processing happens locally - your data stays yours
        </PrivacyNote>
      </ContentWrapper>
      
      <LogoContainer>
        <AerosLogo />
      </LogoContainer>
    </JourneySlideContainer>
  );
};

export default Slide4; 