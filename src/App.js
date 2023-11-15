import './index.css';
import Block from './components/Block';

function App() {

  let blocks = [];

  for (let index = 0; index < 70; index++) {
    blocks.push(<Block key={index}/>)
  }

  return (
    <div className="App">
      {
        blocks
      }

    </div>
  );
}

export default App;
