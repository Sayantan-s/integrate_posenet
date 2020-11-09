import React from 'react'
import styled from 'styled-components'
import DanceTypes from '../commons/DanceTypes'
import { Grid } from '../layout/StyleWrappers'
import Image from '../ui/Image.component'

const MiddleSection = () => {
    return (
       <MiddleSecWrapper col2>
           {
                DanceTypes.map(dance => (
                    <Image
                    width="200" 
                    key={dance.alt}
                    {...dance}
                    />
                    )) 
           }
       </MiddleSecWrapper>
    )
}

export default MiddleSection

const MiddleSecWrapper = styled(Grid)`
grid-row: 2/3;
grid-column: 1/-1;
`