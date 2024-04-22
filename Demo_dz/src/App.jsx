import './App.css';
import Employees from './components/Employees';
import Header from './components/Header';

function App() {
  function handleClickMain(type) {
    console.log("Clicked Main " + type);
  }
  return (
    <div className="app-container">
      <Header />
      <Employees />
    </div>
  );
}

export default App