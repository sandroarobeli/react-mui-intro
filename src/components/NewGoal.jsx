import React from 'react'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Input } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    newGoalStyles : {
        margin: '2rem',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    
}))

const NewGoal = (props) => {
    const classes = useStyles()
    // Introducing state
    const [enteredText, setEnteredText] = useState("");

    const addGoalHandler = (event) => {
        event.preventDefault();
    
        const newGoal = {
          id: Math.random().toString(),
          text: enteredText
        };
    
        setEnteredText("");
        // props.onAddGoal gets passed UP to the parent
        // App component in this case as a 'custom event
        // Handler', which in turn 'points' at function
        // that executes desire action. addNewGoalHandler
        // in this case
        props.onAddGoal(newGoal);
      };

      const textChangeHandler = (event) => {
        setEnteredText(event.target.value);
      };

    return (
        <form autocomplete='off' className={classes.newGoalStyles} onSubmit={addGoalHandler}>
        <TextField type='text' value={enteredText} onChange={textChangeHandler} required id="filled-required" label="required" variant="filled" />
        <Button variant="outlined" type='submit'>Add Goal</Button>
        </form>
    )
}

export default NewGoal

//value={enteredText} onChange={textChangeHandler}
//onSubmit={addGoalHandler}
// <Input required type='text' value='' onChange='' placeholder='enter new goal' />