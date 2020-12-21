import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from '../src/Utils/OvermindHelper'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {NextSeo} from "next-seo";

const Index = (props) => {
    const {state, actions} = useOvermind()

    return (
        <Grid style={{margin: 32}} container direction='column' alignContent='center' alignItems='center'
              justify='center'>
            <NextSeo
                title={"Our Index"}
            />

            <Typography variant='h3'>Overmind states</Typography>
            <Typography variant='h6'>Counter: {state.counter}</Typography>
            <Button style={{
                marginTop: 8,
                width: 150
            }} variant='contained' color='primary' onClick={() => {
                actions.increase(1)
            }}>+</Button>
            <Button style={{
                marginTop: 8,
                width: 150
            }} variant='contained' color='primary' onClick={() => {
                actions.increase(-1)
            }}>-</Button>
        </Grid>
    );
}

export default Index;
