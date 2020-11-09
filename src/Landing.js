import React from 'react'
import styled from 'styled-components'
import LandingTop from './components/Landing/LandingTop.component'
import Section from './components/Landing/Section.component'
import { Grid } from './components/layout/StyleWrappers'
const Landing = () => {
    const Mains = {
        header:"Experience now" ,
        shorthead:"Get your body moving and be ready to unleash the dancer within you by taking this challenge and climbing to the top of the leaderboard"
    }
    const Endings = {
        header : 'Enjoy fitness',
        shorthead : 'Pick a spacious location and start the challenge,when it goes live through your phone or laptop.'
    }
    return (
        <Grid>
            <LandingTop />
            <Section 
            rows="2/3" 
            headerProps={Mains}/>
            <Section 
            rows="3/4"
            headerProps={Endings}
            />
        </Grid>
    )
}

export default Landing

