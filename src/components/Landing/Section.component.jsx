import React from 'react'
import styled from 'styled-components'
import DanceTypes from '../commons/DanceTypes'
import { Grid } from '../layout/StyleWrappers'
import Image from '../ui/Image.component'
import Sectionheader from '../ui/Sectionheader.component'

const Section = ({children,headerProps,...props}) => {
    return (
       <SecWrapper 
       {...props}
       row="max-content"
       col2>
           <Sectionheader
           colCount="6/10"
           rowCount="1/2"
           {...headerProps}
           />
           {children}
       </SecWrapper>
    )
}

export default Section

const SecWrapper = styled(Grid)`
grid-row: ${props => props.rows ? props.rows : 3/4};
grid-column: 1/-1;
`


/* {
                    DanceTypes.map(dance => (
                        <Image
                        width="400" 
                        key={dance.alt}
                        {...dance}
                        />
                        )) 
                        header="Experience now" 
                        shorthead="Get your body moving and be ready to unleash the dancer within you by taking this challenge and climbing to the top of the leaderboard"
            }*/