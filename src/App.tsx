import React from 'react';


import { ThemeProvider} from 'styled-components';
import Header from "./components/Header";
import Music from "./views/Music";
import Works from "./views/Works";
import {useSelector} from "react-redux";



function App() {
    let animate = useSelector((state: any) => state.headerAnimation);
    const theme = {
        colors:{
            main: 'yellow'
        },
        props:{
            headerFont: animate
        }
    }
  return (
          <ThemeProvider theme={theme}>
            <Header/>
            <Music/>
            <Works/>
          </ThemeProvider>
  );
}

export default App;
