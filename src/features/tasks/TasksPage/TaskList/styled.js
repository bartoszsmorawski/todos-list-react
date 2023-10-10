import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: hsl(120, 100%, 25%);
  color: white;
  min-width: 30px;
  min-height: 30px;
  margin: 10px;
  transition: 1s;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background: hsl(120, 61%, 40%);

      &:hover {
        background: hsl(120, 61%, 50%);
      }

      &:active {
        background: hsl(120, 61%, 45%);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: hsl(348, 83%, 40%);

      &:hover {
        background-color: hsl(348, 83%, 50%);
      }

      &:active {
        background-color: hsl(348, 83%, 45%);
      }
    `}
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.teal};
`;
