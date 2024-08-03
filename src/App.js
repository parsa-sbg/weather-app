import './App.css';
import Header from './components/Header/Header';
import Container from '@mui/material/Container';
import Routes from './routes';
import { useWeather } from './hooks/useWeather';
import { useEffect } from 'react';

function App() {
  const { fetchWeather } = useWeather()

  useEffect(() => {
    fetchWeather('tehran')
  }, [])

  return (
    <div className="App">
      <Container>
        <Header />
        <Routes />
      </Container>
    </div>
  );
}

export default App;
