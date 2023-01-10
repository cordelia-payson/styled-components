/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import './App.css';
import { useState } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import Child from './Child.jsx';
import { theme } from './theme.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: pink;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 30px;
  font-family: Helvetica;
`;

const Button = styled.button`
  width: auto;
  margin: 20px;
  background-color: ${props => props.color || 'DarkSeaGreen'};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} ${props => props.speed} linear infinite;
  margin: 20px;
  color: black;
  font-family: Arial;
`;

const BigRotate = styled(Rotate)`
  font-size: 30px;
  margin: 50px;
  color: white;
`;

const MultiElementContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px;
`;
const MultiElement = styled.div`
  font-family: Monaco;
  margin: 10px;
  padding: 5px;
  border: 2px solid black;
  background: transparent;
  &:hover {
    background: teal;
  }
`;

function App() {
  const [speed, setSpeed] = useState('2s');
  return (
    <ThemeProvider theme={theme}>

      <Container className="App">
        <Title>Styled Components</Title>

        {/* Props  */}
        <div>
          <Button>Button 1</Button>
          <Button color={'LightSkyBlue'}>Button 2</Button>
        </div>


        {/* Extended */}
        <Rotate speed={speed}>rotate</Rotate>
        <BigRotate speed={speed}>rotate</BigRotate>

        {/*  as  */}
        <MultiElementContainer>
          <MultiElement as="button" onClick={(evt) => setSpeed(speed === '4s' ? '2s' :'4s')}>Button</MultiElement>
          <MultiElement as="a" href="https://styled-components.com/">Link</MultiElement>
          <MultiElement as="p">Paragraph</MultiElement>
        </MultiElementContainer>

        <Child />

      </Container>
    </ThemeProvider>

  );
}

export default App;

