import { useState } from 'react'
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import { 
  Paper, 
   
} from '@material-ui/core'

// Import custom components
import Header from './components/Header'
import GoalList from './components/GoalList' 
import NewGoal from './components/NewGoal'

// Custom styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const App = (props) => {
  const classes = useStyles()
  // Color mode state
  const [darkMode, setDarkMode] = useState(false);
  // Theme setup
  const theme = createMuiTheme({
    palette : {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#64b5f6'
      }
    }
  })
  // Goals state
  const [courseGoals, setCourseGoals] = useState([]);

  // Custom methods
  const addNewGoalHandler = (newGoal) => {
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  return (
    <ThemeProvider theme={theme} className={classes.root}>
     <Paper style={{height:'100vh'}}>
       <Header setMode={() => setDarkMode(!darkMode)} darkMode={darkMode}/>
       <NewGoal onAddGoal={addNewGoalHandler}/>
       <GoalList courseGoals={courseGoals}/>    
     </Paper>
    </ThemeProvider> 
   )
}


export default App;


