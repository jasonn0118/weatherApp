import React, { useEffect } from 'react';
import './App.css';
import NavBar from './component/NavBar';

function App() {
  const exampleAPI = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.REACT_APP_API_KEY}`;
  // const exampleAPI = `api.openweathermap.org/data/2.5/weather?q=London&appid=694f607c6ee2b1b4a6ab45f7197d5362`;
  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    try{
      const fetch_data = await fetch(exampleAPI);
      console.log(fetch_data)
      const responseData = await fetch_data.json();
  
      console.log(responseData);
    } catch(error) {
      console.log(error)
    }
    
  };

  return (
    <div className='App'>
      <NavBar />
      <div className="main-content">
        This is Main display
      </div>
    </div>
  );
}

export default App;
