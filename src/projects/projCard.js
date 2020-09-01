import React from 'react';
import { Paper, Grid, Avatar, Typography, Button } from '@material-ui/core';

function ProjCard(props) {
    return(
        <Paper>
            <Grid container >
                <Grid container item direction="column">
                    <Grid item>
                        <Typography 
                            align="center"
                            variant="subtitle2"
                            classNam="title" >
                                {props.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                            alt={props.title}
                            variant="rounded"
                            src={props.picture}
                            className="projPic" />
                    </Grid>
                </Grid>
                <Grid container item direction="column">
                    <Grid item>
                    <Typography 
                        variant="body1" 
                        className="desc"
                        align="center" >
                            {props.desc}
                    </Typography>
                    </Grid>
                    <Grid item container className="links">
                        <Grid item>
                            <Button 
                                href={props.srcLink}
                                variant="text">
                                    view source
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button 
                                href={props.liveLink}
                                variant="text">
                                    view live
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ProjCard;




/* <Card className="projCard" raised={true}>
            <CardActionArea>
                <CardMedia
                    className="projPic"
                    image={props.picture}
                    title={props.title} />
                <CardContent>
                    <Typography variant="h3" className="title">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" className="desc" >
                        {props.desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className="links">
                <Button href={props.srcLink}>
                    Source
                </Button>
                <Button href={props.liveLink}>
                    Live
                </Button>
            </CardActions>
        </Card> */