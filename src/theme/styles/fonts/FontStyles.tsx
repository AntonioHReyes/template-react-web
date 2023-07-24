import styled from "styled-components";

export const MainTitle = styled.span`
  font-weight: 500;
  font-family: "Lora-Bold", serif;
  font-size: calc(16px + 4vmin);
  color: ${ props => props.theme.text };
  user-select: text;
  z-index: 2;
`;

export const SubTitle = styled.span`
  font-weight: 500;
  font-family: "Lora-Medium", serif;
  font-size: calc(14px + 2vmin);
  color: ${ props => props.theme.text };
  user-select: text;
  z-index: 2;
`;

export const RegularText = styled.span`
  font-weight: normal;
  font-family: "Lora-Regular", serif;
  font-size: calc(12px + 1vmin);
  color: ${ props => props.theme.text };
  user-select: text;
  z-index: 2;
`;

export const LightText = styled.span`
  font-weight: 300;
  font-family: "Lora-Regular", serif;
  font-size: calc(11px + 1vmin);
  color: ${ props => props.theme.text };
  user-select: text;
  z-index: 2;
`;