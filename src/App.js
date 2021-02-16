import { useState } from 'react'
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import { 
  Paper, 
   
} from '@material-ui/core'

import Header from './components/Header' // test

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
      type: darkMode ? 'dark' : 'light'
    }
  })
  // Goals state
  const [courseGoals, setCourseGoals] = useState([
    {
      id: "cg1",
      text: "Finish the course"
    },
    {
      id: "cg2",
      text: "Learn all about building MERN"
    }
  ]);

  // Custom methods
  const addNewGoalHandler = (newGoal) => {
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };
  return (
    <ThemeProvider theme={theme} className={classes.root}>
     <Paper style={{height:'100vh'}}>
       <Header setMode={() => setDarkMode(!darkMode)} darkMode={darkMode}/>
     </Paper>
    </ThemeProvider> 
   )
}


export default App;


