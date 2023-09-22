import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.gray};
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  border: none;
  transition: 1s;
  cursor: pointer;

  &:hover {
    filter: persiangreen(110%);
    transform: scale(1.1);
  }

  &:active {
    filter: persiangreen(130%);
    transform: scale(1.3);
  }
`;
