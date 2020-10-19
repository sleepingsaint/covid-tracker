import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';

function TrackerCard(props) {
    return (
        <Card style={{ padding: "20px" }}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant="h5" component="h2">
                    <CountUp end={props.value ?? 0} duration={1.2} separator="," />
                </Typography>
                <Typography color="textSecondary">
                    {new Date().toDateString()}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default TrackerCard;