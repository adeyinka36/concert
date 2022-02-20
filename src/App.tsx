import React from 'react';
import {Provider} from "react-redux";

import { ThemeProvider} from 'styled-components';
import Header from "./components/Header";
import Music from "./views/Music";
import Dance from "./views/Dance";

const theme = {
  colors:{
    main: 'yellow'
  }
}
function App() {
  return (
          <ThemeProvider theme={theme}>
            <Header/>
            <Music/>
            <Dance/>
          </ThemeProvider>
  );
}

export default App;
