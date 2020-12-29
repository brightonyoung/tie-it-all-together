import './App.css';

import ListUsers from './components/ListUsers'
import ListMushrooms from './components/ListMushrooms'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ListUsers />
      <ListMushrooms /> 
      </header>
    </div>
  );
}

export default App;
