import React from 'react';
import './App.css';
import styled from 'styled-components'
import { Form } from './Components/Form'
import { ContentBlock } from './Components/ContentBlock'



const App = () => {
  return (
    <Container>
      <MainWrapper>
        <Form />
        <ContentBlock />
      </MainWrapper>
    </Container>
  );
}

export default App;
const Container = styled.div`
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`;

const MainWrapper = styled.div`
display:flex;
width:1250px;
height:60vh;
background-image: url(./geometric.jpg);
background-size:cover;
`;