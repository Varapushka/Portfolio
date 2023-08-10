import styled from 'styled-components';

type FlexWrapperPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  height?: string;
  width?: string;
  minHeight?: string;
  gap?: string;
};
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'stretch'};
  flex-wrap: ${(props) => props.wrap || 'no-wrap'};
  height: ${(props) => props.height || '100%'};
  width: ${(props) => props.width || '100%'};
  min-height: ${(props) => props.minHeight || '100%'};
   gap: ${(props) => props.gap || '0px'};
`;
