import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import Tracker from '../Tracker/Tracker';
import { Line } from 'react-chartjs-2';

function CountryTracker(props) {
    const [country, setCountry] = useState({});

    const [covidData, setCovidData] = useState({});

    const handleSelect = async (e) => {
        setCountry(props.countries[e.target.value]);

        // confirmed cases
        const confirmedRes = await fetch(`${process.env.REACT_APP_API}/dayone/country/${props.countries[e.target.value].Slug}/status/confirmed`);
        const confirmedData = await confirmedRes.json();

        // recovered cases
        const recoveredRes = await fetch(`${process.env.REACT_APP_API}/dayone/country/${props.countries[e.target.value].Slug}/status/recovered`);
        const recoveredData = await recoveredRes.json();

        // death cases
        const deathRes = await fetch(`${process.env.REACT_APP_API}/dayone/country/${props.countries[e.target.value].Slug}/status/deaths`);
        const deathData = await deathRes.json();

        let labels = confirmedData.map(d => {
            return new Date(d.Date).toDateString();
        });

        setCovidData({
            labels: labels,
            datasets: [
                {
                    label: "Deaths",
                    data: deathData.map(d => d.Cases),
                    backgroundColor: 'rgba(230, 57, 70, 1)'
                },
                {
                    label: "Recovered",
                    data: recoveredData.map(d => d.Cases),
                    backgroundColor: 'rgba(69, 123, 157, 1)'
                },

                {
                    label: "Confirmed",
                    data: confirmedData.map(d => d.Cases),
                    backgroundColor: 'rgba(168, 218, 220, 1)'

                }
            ]
        });

        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    useEffect(() => {

        async function loadInitialCountry() {

            let slug = "india";
            let _country = (props.countries.filter(c => c.Slug === slug))[0];

            setCountry(_country);
            // confirmed cases
            const confirmedRes = await fetch(`${process.env.REACT_APP_API}/dayone/country/${slug}/status/confirmed`);
            const confirmedData = await confirmedRes.json();

            // recovered cases
            const recoveredRes = await fetch(`${process.env.REACT_APP_API}/dayone/country/${slug}/status/recovered`);
            const recoveredData = await recoveredRes.json();

            // death cases
            const deathRes = await fetch(`${process.env.REACT_APP_API}/dayone/country/${slug}/status/deaths`);
            const deathData = await deathRes.json();

            let labels = confirmedData.map(d => {
                return new Date(d.Date).toDateString();
            });

            setCovidData({
                labels: labels,
                datasets: [
                    {
                        label: "Deaths",
                        data: deathData.map(d => d.Cases),
                        backgroundColor: 'rgba(230, 57, 70, 1)'
                    },
                    {
                        label: "Recovered",
                        data: recoveredData.map(d => d.Cases),
                        backgroundColor: 'rgba(69, 123, 157, 1)'
                    },

                    {
                        label: "Confirmed",
                        data: confirmedData.map(d => d.Cases),
                        backgroundColor: 'rgba(168, 218, 220, 1)'

                    }
                ]
            });

        }

        loadInitialCountry();
    }, [props.countries])
    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="country-label">Select Country</InputLabel>
                <Select labelId="country-label" onChange={handleSelect} autoWidth>
                    {props.countries.map((c, ind) => <MenuItem key={ind} value={ind}>{c.Country}</MenuItem>)}
                </Select>
            </FormControl>

            {Object.keys(country).length ? <Tracker confirmed={country.TotalConfirmed} recovered={country.TotalRecovered} deaths={country.TotalDeaths} title={country.Country} /> : null}

            {Object.keys(covidData).length ? <Line data={covidData ?? []} className="covid-chart" /> : null}
        </div>
    );
}

export default CountryTracker;