
import styled from 'styled-components';

type ButtonPropsType = {
    width?: string;
    height?: string
    border?: string;
    background?:  string;
    borderRadius?: string;
    color?: string;
    fontSize?: string;

};

export const StyledButton = styled.button<ButtonPropsType>`
  width: ${(props) => props.width || '280px'};
  height: ${(props) => props.height || '80px'};
  border: ${(props) => props.border || 'none'};
  background: ${(props) => props.background || 'linear-gradient(to right, rgba(19, 173, 199, 1),rgba(105, 120, 209, 1),rgba(148, 93, 214, 1))'}; 
  border-radius: ${(props) => props.borderRadius || '50px'};
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) => props.fontSize || '1em'}; 

  :hover {
    background: ${(props) => props.background || 'radial-gradient( rgba(19, 173, 199, 1),rgba(105, 120, 209, 1),rgba(148, 93, 214, 1))'}; 
    transform: scale(1.05);
  }
  :focus-visible {
    background: ${(props) => props.background || 'radial-gradient( rgba(19, 173, 199, 1),rgba(105, 120, 209, 1),rgba(148, 93, 214, 1))'}; 
    transform: scale(1.05);
  }
`;


