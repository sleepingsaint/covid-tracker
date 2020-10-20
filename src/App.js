import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import Tracker from './components/Tracker/Tracker';
import CountryTracker from './components/CountryTracker/CountryTracker';
import Loader from 'react-loader';
function App() {
  const [globalData, setGlobalData] = useState({});
  const [countries, setCountries] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoaded(false);
      const res = await fetch(`${process.env.REACT_APP_API}/summary`);
      const { Global, Countries } = await res.json();
      setGlobalData(Global);
      setCountries(Countries);
      setIsLoaded(true);
    }

    fetchData();
  }, []);


  return (
    <Container className="App">
      <Grid container justify="center">
        <img src={require("../src/covid.png")} alt="covid header" className="header-img" align="center" style={{ marginTop: "20px" }} />
      </Grid>
      <Box display={{ xs: "block", md: "none" }}>
        <br />
        <Typography color="textSecondary" align="center" >For smaller screens use landscape mode or enable Desktop site feature.</Typography>
      </Box>
      <Tracker confirmed={globalData.TotalConfirmed} recovered={globalData.TotalRecovered} deaths={globalData.TotalDeaths} title="Global Stats" />
      <Loader loaded={isLoaded}>
        <CountryTracker countries={countries} />
      </Loader>
    </Container>
  );
}

export default App;
