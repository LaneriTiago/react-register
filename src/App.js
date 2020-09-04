import React from 'react';
import Register from './components/register';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';


function App() {
  return (
    <Container component="article" maxWidth="sm">
        <Typography variant="h5" component="h1" align="center">Formulário de cadastro</Typography>
        <Register />
    </Container>
  );
}

export default App;
