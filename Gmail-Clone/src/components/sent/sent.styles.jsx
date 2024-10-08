import styled from "styled-components";

export const SentContainer = styled.div`
  width: 100%;
  margin-top: 48px;

  @media screen and (max-width: 650px) {
    margin-top: 20px;
  }
`;

export const NoItem = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 1.5rem;
  color: rgb(116, 116, 116);
  font-family: "Roboto", sans-serif;
`;

export const Heading = styled.p`
  display: none;

  @media screen and (max-width: 650px) {
    display: block;
    font-family: "Roboto", sans-serif;
    padding: 5px 15px 0 20px;
    font-size: 0.9rem;
  }
`;
