import React, {useRef} from 'react';


import { ThemeProvider} from 'styled-components';
import Header from "./components/Header";
import Footer from "./views/Footer";
import Music from "./views/Music";
import Works from "./views/Works";
import Clients from "./views/Clients";
import About from "./views/About";
import Services from "./views/Services";
import {useSelector} from "react-redux";


interface RefObject<T> {
    readonly current: T | null
}

function App() {
    const work: RefObject<any> = useRef()
    const services: RefObject<any> = useRef()
    const clients: RefObject<any> = useRef()
    const home: RefObject<any> = useRef()
    const about: RefObject<any> = useRef()

    let animate = useSelector((state: any) => state.headerAnimation);
    const theme = {
        colors:{
            main: 'yellow'
        },
        props:{
            headerFont: animate
        }

    }

    const scroll = (location: string) => {
        switch (location){
            case 'work':
                work.current.scrollIntoView()
                break;
            case 'services':
                services.current.scrollIntoView()
                break;
            case 'clients':
                clients.current.scrollIntoView()
                break;
            case 'home':
                home.current.scrollIntoView()
                break;
            case 'about':
                about.current.scrollIntoView()
                break;
        }
    };
    return (
          <ThemeProvider theme={theme}>
            <Header scroll={scroll}/>
            <Music ref={home}/>
            <Works ref={work}/>
            <Services ref={services}/>
            <About ref={about}/>
            <Clients ref={clients}/>
            <Footer/>
          </ThemeProvider>
  );
}

export default App;
