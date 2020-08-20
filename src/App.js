import React from 'react';
import './App.css';
import styled from 'styled-components'
import { Form } from './Components/Form'
import { ContentBlock } from './Components/ContentBlock'
import { useState } from 'react';

const App = () => {
  const [welcome, handlewelcom] = useState(true)
  return (
    <Container>
      <MainWrapper>
        <Form welcome={welcome} />
        <ContentBlock handlewelcom={handlewelcom} welcome={welcome} />
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
position:relative;
display:flex;
width:1250px;
height:60vh;
background-image: url(./geometric.jpg);
background-size:cover;
`;