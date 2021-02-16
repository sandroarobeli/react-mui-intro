import React from 'react'
import { useState } from 'react'
import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import { 
    Paper, 
    Typography, 
    FormControlLabel, 
    Switch, 
    Toolbar, 
    AppBar 
  } from '@material-ui/core'
  

const useStyles = makeStyles({
    appBarStyles: {
        backgroundColor: 'inherit',
        color: 'inherit',
      },
      title: {
        flexGrow: 1,
      },
})

const Header = (props) => {
    const classes = useStyles()
    // Color mode state
    const [darkMode, setDarkMode] = useState(false);
    // Theme setup
    const theme = createMuiTheme({
        palette : {
            type: darkMode ? 'dark' : 'light',
        }
    })

    const addModeHandler = () => {
        props.setMode()
    }

    return (
        <AppBar position="sticky" className={classes.appBarStyles}>
            <Toolbar>
            <Typography variant="h4" className={classes.title} color='primary'>
            Course Goals
            </Typography>
            <FormControlLabel
                control={
                    <Switch
                        checked={props.darkMode}
                        onChange={addModeHandler}
                        name=""
                        color="primary"
                    />
                }
                label="Light/Dark"
                
            />
            </Toolbar>
        </AppBar>
        )
    }

export default Header