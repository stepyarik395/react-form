import React from 'react';
import styled, { keyframes, css } from 'styled-components'
import { useState } from 'react';



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
      }}>{props.signbutton ? 'Create Account' : 'Sign In'}
      </button>
    </WraperContainer>
  )
}

const rotate = keyframes`
  from {
    right:0%;
  }

  to {
    right:65%;
  }
`;
// const bobo = {
//   color: 'red'
// }

const WraperContainer = styled.div`
/* animation:${rotate} 1s; */
position:relative;
width:35%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:lightgreen;
`;



