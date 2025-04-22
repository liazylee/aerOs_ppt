import styled from 'styled-components';

export const SlideContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: ${props => props.background || 'white'};
  color: ${props => props.color || 'var(--neutral-color)'};
  position: relative;
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.background || 'transparent'};
  border-radius: 12px;
  padding: 30px;
  box-shadow: ${props => props.boxShadow || 'none'};
`;

export const SlideTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  text-align: center;
  color: ${props => props.color || 'inherit'};
`;

export const SlideSubtitle = styled.h2`
  font-size: 32px;
  margin-bottom: 30px;
  text-align: center;
  color: ${props => props.color || 'inherit'};
  font-weight: 600;
`;

export const BulletList = styled.ul`
  list-style-type: none;
  margin: 20px 0;
  padding: 0;
  
  li {
    margin-bottom: 15px;
    padding-left: 30px;
    position: relative;
    font-size: ${props => props.fontSize || '20px'};
    
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 10px;
      width: 10px;
      height: 10px;
      background: var(--accent-color);
      border-radius: 50%;
    }
  }
`;

export const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  width: 100%;
  margin: 20px 0;
`;

export const ThreeColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  width: 100%;
  margin: 20px 0;
`;

export const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  h3 {
    font-size: 22px;
    margin-bottom: 10px;
    color: var(--primary-color);
  }
  
  p {
    font-size: 16px;
    flex-grow: 1;
  }
`;

export const GradientBanner = styled.div`
  background: var(--gradient);
  color: white;
  padding: 15px 25px;
  border-radius: 8px;
  margin: 20px 0;
  font-weight: 600;
`;

export const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.background || 'var(--gradient)'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 15px;
  margin-right: ${props => props.marginRight || '0'};
  color: white;
  font-size: 24px;
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 20px 0;
  
  table {
    width: 100%;
    border-collapse: collapse;
    
    th, td {
      padding: 12px 15px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    
    th {
      background-color: var(--primary-color);
      color: white;
      font-weight: 600;
    }
    
    tr:nth-child(even) {
      background-color: #f8f9fa;
    }
  }
`;

export const CallToAction = styled.div`
  margin-top: 40px;
  text-align: center;
  
  button {
    background: var(--accent-color);
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 18px;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 600;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const GradientText = styled.span`
  background: linear-gradient(to left, #ff6b6b 0%, #ffc107 25%, #00d084 50%, #0693e3 75%, #9b51e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  background-size: 200% auto;
  animation: shimmer 4s linear infinite;
  
  @keyframes shimmer {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }
`;

export const Divider = styled.div`
  width: 80px;
  height: 4px;
  background: var(--gradient);
  margin: 20px auto;
  border-radius: 2px;
`; 