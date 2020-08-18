import React from 'react';
import styled from 'styled-components'
import { useState } from 'react';

export const ContentBlock = () => {
  const [sgintitle, handletitle] = useState('Welcome back');
  const [signbutton, handlebutton] = useState('Create account');
  return (
    <WraperContainer>
      <h1>{sgintitle}</h1>
      <button onClick={() => { handletitle('Hellow, New Friend') }}>{signbutton}</button>
    </WraperContainer>
  )
}

const WraperContainer = styled.div`
width:35%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:lightgreen;
`;
