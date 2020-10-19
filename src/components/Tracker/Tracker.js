import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import TrackerCard from './TrackerCard';

function Tracker(props) {
    return (
        <div style={{ margin: "20px 0" }}>
            <Typography variant="h5" component="h4" align="center">{props.title}</Typography>
            <br />
            <Grid container spacing={3} justify="center">
                <Grid item xs={10} md={4}>
                    <TrackerCard title="Confirmed" value={props.confirmed} />
                </Grid>
                <Grid item xs={10} md={4}>
                    <TrackerCard title="Recovered" value={props.recovered} />
                </Grid>
                <Grid item xs={10} md={4}>
                    <TrackerCard title="Deaths" value={props.deaths} />
                </Grid>
            </Grid>
        </div>
    );
}

export default Tracker;