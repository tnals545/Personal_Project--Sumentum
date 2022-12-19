import styled from "styled-components";

interface StyledPropsType {
  url: string;
}

export const BackgroundImg = styled.div<StyledPropsType>`
  background-image: url(${(p) => p.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;
