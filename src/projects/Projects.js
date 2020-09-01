import React from 'react';
import ProjCard from './projCard'
import './projects.css'
import projArr from './ProjArr'
import { Grid } from '@material-ui/core';


function Projects(){
  const projGrid = projArr.map((p, i)=>{ return(
    <Grid item md sm={6} xs={12}>
      <ProjCard
        key={i} 
        title={p.title} 
        picture={p.picture} 
        desc={p.desc} 
        srcLink={p.srcLink} 
        liveLink={p.liveLink} />
    </Grid>
  );})
    return(
        <Grid
        container 
        id="projCards"
        spacing={2}
        justify="space-around"
        alignContent="space-around">
          {projGrid}
        </Grid>
      );
}

export default Projects;