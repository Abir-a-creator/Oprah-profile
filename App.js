
import './App.css';
import component from './Profile/Component';


function App() {
  return (
    <div className="App">
      <h1 style={{color:'pink'}}>Oprah Winfery Profile</h1>
      
      <component name="Oprah Winfery" bio="was born in January 29, 1954" profession="a talk show host, media executive, actress and billionaire philanthropist."/>
    </div>
  );
}

export default App;
