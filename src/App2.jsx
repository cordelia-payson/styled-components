/* eslint-disable no-undef */
import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className="title">Title</h1>

      <div>
        <button className="button">Button 1</button>
        <button className="button">Button 2</button>
      </div>

      <div className="rotate">rotate</div>
      <div className="big-rotate">ROTATE</div>

      <div className="multi-container">
        <button className="multi">Button</button>
        <a href="https://styled-components.com/" className="multi">Link</a>
        <p className="multi">Paragraph</p>
      </div>
    </div>
  );
}

export default App;
