import React from 'react';
import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Paper, Toolbar } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
    root: {
       backgroundColor: '#fff',
       
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    },
    
}))

export default function Header() {
    const classes = useStyles();
    return (
        <Paper elevation={0}>
            <AppBar position="static" className={classes.root} >
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item>
                        <InputBase 
                        placeholder="search topic"
                        className={classes.searchInput}
                        startAdornment={<SearchIcon fontSize="small" /> }
                        />
                    </Grid>
                    <Grid item sm={true}></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary" >
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary" >
                                <ChatBubbleOutlineIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewOutlinedIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        </Paper>
    )
};
