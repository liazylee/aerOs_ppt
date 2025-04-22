import React from 'react';
import styled from 'styled-components';
import { SlideContainer, SlideTitle, ContentWrapper, LogoContainer, Divider } from './SlideStyles';
import { AerosLogo, CheckIcon } from './Icons';

const AerosSlideContainer = styled(SlideContainer)`
  background-color: #f0f6ff;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a3c6e' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const AerosTitle = styled(SlideTitle)`
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const CentralSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  position: relative;
`;

const LogoSection = styled.div`
  margin-bottom: 50px;
  position: relative;
  
  .aeros-large-logo {
    width: 220px;
    height: 100px;
    background: var(--gradient);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    
    svg {
      width: 180px;
      height: 80px;
    }
  }
`;

const ConnectionLines = styled.div`
  position: relative;
  height: 80px;
  width: 100%;
  max-width: 800px;
  
  .line {
    position: absolute;
    background-color: var(--secondary-color);
    
    &.vertical {
      left: 50%;
      width: 2px;
      height: 100%;
      transform: translateX(-50%);
    }
    
    &.horizontal-left, &.horizontal-right {
      top: 50%;
      height: 2px;
      width: calc(33.33% - 20px);
      transform: translateY(-50%);
    }
    
    &.horizontal-left {
      left: 0;
    }
    
    &.horizontal-right {
      right: 0;
    }
  }
`;

const FunctionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
`;

const FunctionCard = styled.div`
  width: 30%;
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  
  h3 {
    font-size: 20px;
    margin-bottom: 15px;
    color: var(--primary-color);
    text-align: center;
    position: relative;
    padding-bottom: 15px;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 60px;
      height: 3px;
      background: var(--gradient);
      transform: translateX(-50%);
      border-radius: 3px;
    }
  }
  
  p {
    font-size: 15px;
    color: var(--neutral-color);
    margin-bottom: 15px;
    text-align: center;
  }
`;

const GuaranteeContainer = styled.div`
  margin-top: 15px;
  
  h4 {
    font-size: 16px;
    color: var(--primary-color);
    margin-bottom: 10px;
    text-align: center;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      font-size: 14px;
      
      .check {
        margin-right: 10px;
        color: var(--accent-color);
        flex-shrink: 0;
      }
    }
  }
`;

const Slide7 = () => {
  return (
    <AerosSlideContainer>
      <ContentWrapper>
        <AerosTitle>aerOS: The Intelligent Orchestration Layer</AerosTitle>
        <Divider />
        
        <CentralSection>
          <LogoSection>
            <div className="aeros-large-logo">
              <AerosLogo />
            </div>
          </LogoSection>
          
          <ConnectionLines>
            <div className="line vertical"></div>
            <div className="line horizontal-left"></div>
            <div className="line horizontal-right"></div>
          </ConnectionLines>
          
          <FunctionsContainer>
            <FunctionCard>
              <h3>Device Management</h3>
              <p>Seamless connection across all training equipment</p>
            </FunctionCard>
            
            <FunctionCard>
              <h3>Edge-Cloud Cooperation</h3>
              <p>Intelligent data routing based on privacy needs</p>
            </FunctionCard>
            
            <FunctionCard>
              <h3>System Guarantees</h3>
              <GuaranteeContainer>
                <ul>
                  <li>
                    <span className="check"><CheckIcon /></span>
                    <span>Performance: Under 10ms response for critical feedback</span>
                  </li>
                  <li>
                    <span className="check"><CheckIcon /></span>
                    <span>Privacy: GDPR-compliant data sovereignty by design</span>
                  </li>
                  <li>
                    <span className="check"><CheckIcon /></span>
                    <span>Resilience: Continues operating even when cloud is unavailable</span>
                  </li>
                </ul>
              </GuaranteeContainer>
            </FunctionCard>
          </FunctionsContainer>
        </CentralSection>
      </ContentWrapper>
      
      <LogoContainer>
        <AerosLogo />
      </LogoContainer>
    </AerosSlideContainer>
  );
};

export default Slide7; 