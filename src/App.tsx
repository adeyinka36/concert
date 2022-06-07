import React from 'react';


import { ThemeProvider} from 'styled-components';
import Header from "./components/Header";
import Footer from "./views/Footer";
import Music from "./views/Music";
import Works from "./views/Works";
import Clients from "./views/Clients";
import About from "./views/About";
import Services from "./views/Services";
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
            <Services/>
            <About/>
            <Clients/>
            <Footer/>
          </ThemeProvider>
  );
}

export default App;
