import './App.css';
import styled from 'styled-components';

const Themed = styled.div`
  background: ${props => props.theme.background};
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.text};
  font-weight: bold;
`;

function Child() {
  return (
    <Themed>Child</Themed>
  );
};

export default Child;