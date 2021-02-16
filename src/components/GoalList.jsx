import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    goalListStyles : {
        margin: '2rem',
        padding: 0
    },
    listItemStyles: {
        margin: '1rem 0',
        border: '1px solid #ccc',
        padding: '1rem',
        fontWeight: 600
    }    
}))

const GoalList = (props) => {
    const classes = useStyles()
    return (
        <List component='ul' className={classes.goalListStyles}>
            {
                props.courseGoals.map((goal) => (
                    <ListItem className={classes.listItemStyles} li key={goal.id}>{goal.text}</ListItem>
                ))
            }
        </List>
    )
}

export default GoalList

// <ul className="goal-list">
//       {props.courseGoals.map((element) => (
//         <li key={element.id}>{element.text}</li>
//       ))}
//     </ul>