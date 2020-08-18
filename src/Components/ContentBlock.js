import React from 'react';
import styled from 'styled-components'


export const ContentBlock = (props) => {
  return (
    <WraperContainer>
      <h1>{props.sgintitle ? 'Wellcom Back' : 'Hellow New Friend'}</h1>
      <button onClick={() => {
        props.handlebutton(!props.signbutton);
        props.handletitle(!props.sgintitle);
        props.handletitleform(!props.titleform);
        props.handlebuttonform(!props.buttonform);
        props.handleinpform(!props.showinp);
      }}>{props.signbutton ? 'Create Account' : 'Sign In'}</button>
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


