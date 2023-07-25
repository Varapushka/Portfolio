
import styled from 'styled-components';

type ButtonPropsType = {
    width?: string;
    height?: string
    border?: string;
    backgroundColor?:  string;
    borderRadius?: string;
    color?: string;
    fontSize?: string;
};

export const StyledButton = styled.button<ButtonPropsType>`
  width: ${(props) => props.width || '280px'};
  height: ${(props) => props.height || '80px'};
  border: ${(props) => props.border || 'none'};
  background-color: ${(props) => props.backgroundColor || 'rgba(19, 173, 199, 1)'}; ;
  border-radius: ${(props) => props.borderRadius || '50px'};
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) => props.fontSize || '1.5rem'}; 
`;
