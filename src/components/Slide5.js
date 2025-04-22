import React from 'react';
import styled from 'styled-components';
import { SlideContainer, SlideTitle, ContentWrapper, LogoContainer, Divider } from './SlideStyles';
import { AerosLogo } from './Icons';

const ArchitectureSlideContainer = styled(SlideContainer)`
  background-color: white;
`;

const ArchitectureTitle = styled(SlideTitle)`
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const ArchitectureDiagram = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ArchitectureLayer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${props => props.bgColor || '#f8f9fa'};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    width: 6px;
    height: 100%;
    background-color: ${props => props.accentColor || 'var(--primary-color)'};
    border-radius: 3px;
  }
  
  h3 {
    font-size: 20px;
    margin-bottom: 15px;
    padding-left: 20px;
    color: ${props => props.accentColor || 'var(--primary-color)'};
  }
`;

const DeviceIcons = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  
  .device {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
    
    .icon {
      width: 60px;
      height: 60px;
      background-color: #f0f0f0;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 5px;
      
      img {
        width: 32px;
        height: 32px;
      }
    }
    
    p {
      font-size: 14px;
      text-align: center;
      color: var(--neutral-color);
    }
  }
`;

const DataFlow = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #666;
  
  svg {
    width: 20px;
    height: 20px;
    margin: 0 10px;
    color: var(--secondary-color);
  }
`;

const TechnicalNote = styled.div`
  background-color: #f0f8ff;
  border: 1px dashed var(--primary-color);
  padding: 15px;
  margin-top: 20px;
  border-radius: 4px;
  font-size: 14px;
  color: var(--primary-color);
  text-align: center;
  font-style: italic;
`;

// New enhanced data flow diagram
const DataFlowVisualizer = styled.div`
  width: 100%;
  margin: 30px 0;
  position: relative;
  height: 150px;
  display: flex;
  justify-content: center;
`;

const DataFlowArrow = styled.div`
  position: absolute;
  width: ${props => props.width || "200px"};
  height: 30px;
  top: ${props => props.top || "50%"};
  left: ${props => props.left || "auto"};
  right: ${props => props.right || "auto"};
  transform: ${props => props.transform || "none"};
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${props => props.color || 'var(--primary-color)'};
  }
  
  &:after {
    content: '';
    position: absolute;
    right: ${props => props.direction === 'right' ? '0' : 'auto'};
    left: ${props => props.direction === 'left' ? '0' : 'auto'};
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: ${props => props.direction === 'left' ? `10px solid ${props.color || 'var(--primary-color)'}` : 'none'};
    border-left: ${props => props.direction === 'right' ? `10px solid ${props.color || 'var(--primary-color)'}` : 'none'};
  }
  
  .label {
    position: absolute;
    top: -20px;
    background: white;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
    color: ${props => props.color || 'var(--primary-color)'};
    white-space: nowrap;
  }
  
  .data-type {
    position: absolute;
    bottom: -20px;
    font-size: 10px;
    color: #666;
  }
`;

const DataNode = styled.div`
  position: absolute;
  top: ${props => props.top || "50%"};
  left: ${props => props.left || "auto"};
  right: ${props => props.right || "auto"};
  transform: ${props => props.transform || "translateY(-50%)"};
  width: 50px;
  height: 50px;
  background: ${props => props.bg || "white"};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 2;
  
  img {
    width: 30px;
    height: 30px;
  }
  
  .node-label {
    position: absolute;
    bottom: -25px;
    font-size: 12px;
    font-weight: 600;
    color: var(--primary-color);
    text-align: center;
    width: 100px;
  }
`;

const Slide5 = () => {
  return (
    <ArchitectureSlideContainer>
      <ContentWrapper>
        <ArchitectureTitle>Intelligent Edge Architecture</ArchitectureTitle>
        <Divider />
        
        <ArchitectureDiagram>
          <ArchitectureLayer bgColor="#e7f5f6" accentColor="#00a0b0">
            <h3>Device Layer</h3>
            <DeviceIcons>
              <div className="device">
                <div className="icon">
                  <img src="https://img.icons8.com/ios/50/000000/apple-watch.png" alt="Smartwatch" />
                </div>
                <p>Smartwatch</p>
              </div>
              
              <div className="device">
                <div className="icon">
                  <img src="https://img.icons8.com/ios/50/000000/iphone.png" alt="Smartphone" />
                </div>
                <p>Smartphone</p>
              </div>
              
              <div className="device">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="12" rx="2" />
                    <circle cx="12" cy="8" r="3" />
                    <line x1="3" y1="15" x2="7" y2="20" />
                    <line x1="21" y1="15" x2="17" y2="20" />
                    <line x1="7" y1="20" x2="17" y2="20" />
                  </svg>
                </div>
                <p>Gym Camera</p>
              </div>
              
              <div className="device">
                <div className="icon">
                  <img src="https://img.icons8.com/ios/50/000000/treadmill.png" alt="Treadmill" />
                </div>
                <p>Treadmill</p>
              </div>
            </DeviceIcons>
          </ArchitectureLayer>
       
          <DataFlow>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            Secure Local Data Flow
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </DataFlow>
          
          <ArchitectureLayer bgColor="#e0f0ff" accentColor="#1a3c6e">
            <h3>Edge Layer</h3>
            <DeviceIcons>
              <div className="device">
                <div className="icon">
                  <img src="https://img.icons8.com/ios/50/000000/artificial-intelligence.png" alt="AI Engine" />
                </div>
                <p>Local AI Inference Engine</p>
              </div>
              
              <div className="device">
                <div className="icon">
                  <img src="https://img.icons8.com/ios/50/000000/mesh.png" alt="aerOS" />
                </div>
                <p>aerOS Coordination Node</p>
              </div>
            </DeviceIcons>
          </ArchitectureLayer>
          
          <DataFlow>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            Optional Encrypted Sync
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </DataFlow>
          
          <ArchitectureLayer bgColor="#f0f0f0" accentColor="#7cb518">
            <h3>Cloud Layer</h3>
            <DeviceIcons>
              <div className="device">
                <div className="icon">
                  <img src="https://img.icons8.com/ios/50/000000/dashboard.png" alt="Dashboard" />
                </div>
                <p>Analytics Dashboard</p>
              </div>
              
              <div className="device">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                    <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                    <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <p>Federated Model Updates</p>
              </div>
            </DeviceIcons>
          </ArchitectureLayer>
             
          {/* Enhanced data flow visualization */}
          <DataFlowVisualizer>
            <DataNode left="10%" bg="#e7f5f6">
              <img src="https://img.icons8.com/ios/50/000000/iphone.png" alt="Device" />
              <div className="node-label">Device</div>
            </DataNode>
            
            <DataFlowArrow width="25%" left="18%" direction="right" color="#00a0b0">
              <div className="label">Secure Local Transfer</div>
              <div className="data-type">Sensor Data, Events</div>
            </DataFlowArrow>
            
            <DataNode left="45%" transform="translate(-50%, -50%)" bg="#e0f0ff">
              <img src="https://img.icons8.com/ios/50/000000/artificial-intelligence.png" alt="Edge AI" />
              <div className="node-label">Edge AI Engine</div>
            </DataNode>
            
            <DataFlowArrow width="25%" left="55%" direction="right" color="#1a3c6e">
              <div className="label">Conditional Sync</div>
              <div className="data-type">Aggregated Data</div>
            </DataFlowArrow>
            
            <DataNode right="10%" bg="#f0f0f0">
              <img src="https://img.icons8.com/ios/50/000000/cloud.png" alt="Cloud" />
              <div className="node-label">Cloud Services</div>
            </DataNode>
          </DataFlowVisualizer>
          
        </ArchitectureDiagram>
        
        <TechnicalNote>
          Edge-first design ensures operation even with limited connectivity
        </TechnicalNote>
      </ContentWrapper>
      
      <LogoContainer>
        <AerosLogo />
      </LogoContainer>
    </ArchitectureSlideContainer>
  );
};

export default Slide5; 