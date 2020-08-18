import React from 'react';
import './App.css';
import styled from 'styled-components'
import { Form } from './Components/Form'
import { ContentBlock } from './Components/ContentBlock'
import { useState } from 'react';

const App = () => {
  const [sgintitle, handletitle] = useState(true);
  const [signbutton, handlebutton] = useState(true);
  const [titleform, handletitleform] = useState(true);
  const [buttonform, handlebuttonform] = useState(true);
  const [showinp, handleinpform] = useState(false);
  return (
    <Container>
      <MainWrapper>
        <Form
          titleform={titleform}
          buttonform={buttonform}
          showinp={showinp}
        />
        <ContentBlock
          showinp={showinp}
          titleform={titleform}
          buttonform={buttonform}
          sgintitle={sgintitle}
          handlebutton={handlebutton}
          handletitle={handletitle}
          signbutton={signbutton}
          handletitleform={handletitleform}
          handlebuttonform={handlebuttonform}
          handleinpform={handleinpform} />
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