import React from 'react';

import { ThemeProvider} from 'styled-components';
import Header from "./components/Header";


const theme = {
  colors:{
    main: 'yellow'
  }
}
function App() {
  return (
      <ThemeProvider theme={theme}>
        <Header/>
      </ThemeProvider>
  );
}

export default App;
