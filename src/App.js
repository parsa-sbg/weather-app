import './App.css';
import Header from './components/Header/Header';
import Container from '@mui/material/Container';
import Routes from './routes';
import { useDynamicBackground } from './hooks/useDynamicBackground';

function App() {

  const backgrountURL = useDynamicBackground()

  return (
    <div style={{ backgroundImage: `url(${backgrountURL})` }} className='app-bg'>

      <div className="App">
        <Header />
        <Container>
          <Routes />
        </Container>
      </div>
    </div>
  );
}

export default App;
