import styled from "styled-components";

export const Box = styled.section`
  margin: 10px 0;
  background: white;
  box-shadow: 0 0 5px #ddd;
`;

export const Header = styled.header`
  border-bottom: 1px solid #ddd;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const Specification = styled.div`
  padding: 20px;
`;
