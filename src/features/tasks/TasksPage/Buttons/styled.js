import styled from "styled-components";

export const ButtonsAll = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ButtonsButton = styled.button`
  background: none;
  color: ${({ theme }) => theme.color.persiangreen};
  border: none;
  margin: 0 0 0 20px;
  transition: 1s;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    flex-basis: 100%;
    margin: 10px;
  }

  &:hover {
    filter: bondiblue(110%);
  }

  &:active {
    filter: bondiblue(130%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.silver};
  }

  &:hidden {
    display: none;
  }
`;
