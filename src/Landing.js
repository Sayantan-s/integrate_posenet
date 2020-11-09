import React from 'react'
import styled from 'styled-components'
import LandingTop from './components/Landing/LandingTop.component'
import MiddleSection from './components/Landing/MiddleSection.component'
import { Grid } from './components/layout/StyleWrappers'
const Landing = () => {
    return (
        <Grid>
            <LandingTop />
            <MiddleSection />
        </Grid>
    )
}

export default Landing

