/* eslint-disable no-undef */
import './App.css';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: pink;
`;

const Title = styled.h1`
  font-size: 30px;
  font-family: Helvetica;
`;

const Button = styled.button`
  width: auto;
  margin: 20px;
  background-color: ${props => props.color || 'blue'};
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
  animation: ${rotate} 4s linear infinite;
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
`;

function App() {
  return (
    <Container className="App">
      <Title>Styled Components</Title>

      {/* Props  */}
      <div>
      <Button>Button 1</Button>
      <Button color={'green'}>Button 2</Button>
      </div>


      {/* Rotate */}
      <Rotate>rotate</Rotate>

      {/* Extended */}
      <BigRotate>ROTATE</BigRotate>

      {/*  as  */}
      <MultiElementContainer>
        <MultiElement as="button">Button</MultiElement>
        <MultiElement as="a" href="https://styled-components.com/">Link</MultiElement>
        <MultiElement as="p">Paragraph</MultiElement>
      </MultiElementContainer>

    </Container>
  );
}

export default App;
