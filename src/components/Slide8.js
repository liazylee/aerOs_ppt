import React from 'react';
import styled from 'styled-components';
import { SlideContainer, SlideTitle, ContentWrapper, LogoContainer, Divider, TableWrapper } from './SlideStyles';
import { AerosLogo } from './Icons';

const BenefitsSlideContainer = styled(SlideContainer)`
  background-color: white;
`;

const BenefitsTitle = styled(SlideTitle)`
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const BenefitsTable = styled(TableWrapper)`
  margin: 40px 0;
  
  table {
    th {
      font-size: 18px;
    }
    
    td {
      font-size: 16px;
      padding: 15px;
      
      &.impact {
        font-weight: 600;
        color: var(--primary-color);
        display: flex;
        align-items: center;
        
        .trend-icon {
          margin-right: 10px;
          color: var(--accent-color);
          
          svg {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
`;

const TrendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 14l5-5 5 5H7z"/>
  </svg>
);

const BackgroundGraphic = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 300px;
  opacity: 0.1;
  z-index: 0;
  
  svg {
    width: 100%;
    height: 100%;
    color: var(--primary-color);
  }
`;

const Slide8 = () => {
  const benefits = [
    { metric: "Real-time feedback", impact: "40% faster skill acquisition" },
    { metric: "Data privacy", impact: "85% increase in user trust and adoption" },
    { metric: "AI model updates", impact: "Continuously improving personalization" },
    { metric: "Infrastructure costs", impact: "70% reduction through edge computing" },
    { metric: "Cloud bandwidth", impact: "90% decrease with edge-first architecture" }
  ];

  return (
    <BenefitsSlideContainer>
      <ContentWrapper>
        <BenefitsTitle>Measurable Advantages</BenefitsTitle>
        <Divider />
        
        <BenefitsTable>
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Impact</th>
              </tr>
            </thead>
            <tbody>
              {benefits.map((benefit, index) => (
                <tr key={index}>
                  <td>{benefit.metric}</td>
                  <td className="impact">
                    <span className="trend-icon"><TrendIcon /></span>
                    {benefit.impact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </BenefitsTable>
      </ContentWrapper>
      
      <BackgroundGraphic>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
        </svg>
      </BackgroundGraphic>
      
      <LogoContainer>
        <AerosLogo />
      </LogoContainer>
    </BenefitsSlideContainer>
  );
};

export default Slide8; 