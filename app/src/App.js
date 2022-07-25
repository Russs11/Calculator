
import './App.css';
import Container from './Componets/Container';
import Btns from './Componets/Btns'
import CalcScreen from './Componets/CalcScreen';

function App() {
  return (
    <div className="App">
      <Container>
        <CalcScreen>0</CalcScreen>
      <Btns />
      </Container>
    </div>
  );
}

export default App;
