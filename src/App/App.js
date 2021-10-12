import React from 'react';
import './App.css';
import SideMenu from "../components/SideMenu";
import { makeStyles, CssBaseline, createTheme, ThemeProvider,  } from '@material-ui/core';
import Header from '../components/Header';
import Employees from '../pages/employees/Employees';


const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126"
    },
    secondry: {
      main: "#f83245",
      light: "#f8324526"
    },
    backgroundColor: {
      default: '#f4f5fd'
    },
  }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})


function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
