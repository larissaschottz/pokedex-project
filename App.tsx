import {StatusBar} from 'expo-status-bar';

import {ThemeProvider} from 'styled-components';

import {Routes} from './src/routes';
import {Welcome} from './src/pages/welcome';

import theme from './src/global/styles/theme';
 
export default function App() {
  return (
    //theme provider irá prover os temas da nossa app, tudo que está dentro dele tem acesso aos temas
    <ThemeProvider theme={theme}>
      <Welcome />
    </ThemeProvider>
  );
}