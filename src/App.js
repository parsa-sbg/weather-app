import './App.css';
import Header from './components/Header/Header';
import Container from '@mui/material/Container';
import Routes from './routes';
import { useWeather } from './hooks/useWeather';
import { useEffect } from 'react';
import { useDynamicBackground } from './hooks/useDynamicBackground';

function App() {
  const { fetchWeather } = useWeather()

  useEffect(() => {
    fetchWeather('tehran')
  }, [])


  const data = useDynamicBackground()
  // console.log(data);


  return (
    <div style={{ backgroundImage: `url(${data})` }} className='app-bg'>

      <div className="App">
        <Container>
          <Header />
          <Routes />
        </Container>
      </div>
    </div>
  );
}

export default App;
