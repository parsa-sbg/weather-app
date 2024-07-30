import './App.css';
import Header from './components/Header/Header';
import Container from '@mui/material/Container';
import Routes from './routes';

function App() {
  return (
    <div className="App">

      <Container>
        
        <Header />
        <Routes/>

      </Container>



    </div>
  );
}

export default App;
