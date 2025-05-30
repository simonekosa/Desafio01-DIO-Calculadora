import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(243, 207, 178);
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  background-color: #030303;
  border-radius: 25px;
  width: 260px;
  padding: 7px;
  margin: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  margin-bottom: 2px;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: 200px;
  margin-bottom: 60px;
  font-family: "Cursive", sans-serif;
  font-style: italic;
`;
