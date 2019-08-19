import React, { useState, useEffect  } from 'react';
import HeaderComponent from './components/HeaderComponent';
import FormComponent from './components/FromComponent';
import ErrorComponent from './components/ErrorComponent';
import WeatherComponent from './components/WeatherComponent';

function App() {
  //State Principal
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState(false);
  const [result, setresult] = useState({})

  useEffect(() => {
    //prevenir la ejecucción primera vez
    if (city === '') return;

    const getDataApi = async () => {
      const apiID = 'a228acae029982bb23acb45641b407c0';

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiID}`;
  
      const dataApi = await fetch(url);
      const result = await dataApi.json();
      
      setresult(result);
    }

    getDataApi();
  }, [city, country]);

  const getData = data => {
    //Validar que ambos campos estén
    if (data.city === '' || data.country === '') {
      setError(true);
      return;
    }

    setCity(data.city);
    setCountry(data.country);
    setError(false);
  }

  //Cargar un component condicionalmente
  let component;
  if (error) {
    component = <ErrorComponent message='Ambos campos son obligatorios'/>
  } else if (result.cod === '404'){
    component = <ErrorComponent message="La ciudad no existe en nuestro registro"/>
  } else {
    component = <WeatherComponent result= {result}/>;
  }

  return (
    <div className="App">
        <HeaderComponent title="Clima React App Hooks"/>
        <div className="contenedor-form blue-grey lighten-3">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <FormComponent getData={getData}/>
              </div>
              <div className="col s12 m6">
                {component}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
