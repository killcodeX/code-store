import styled from "styled-components";

export const HomeSectionWrapper = styled.section`
  position: relative;
  top: 0;
  left: 78px;
  width: calc(100% - 78px);
  min-height:100vh;
  transition: all 0.5s ease;
  padding: 50px 20px;
  background: ${(props) => props.theme.body};
`;

export const HomeBannerWrapper = styled.div``