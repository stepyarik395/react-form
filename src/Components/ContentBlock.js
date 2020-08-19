import React from 'react';
import styled, { keyframes, css } from 'styled-components'
import { useState } from 'react';





export const ContentBlock = (props) => {
  return (
    <WraperContainer className={props.active ? 'active' : 'disabler'}>
      <h1>{props.sgintitle ? 'Wellcom Back' : 'Hellow New Friend'}</h1>
      <button onClick={() => {
        props.handlebutton(!props.signbutton);
        props.handletitle(!props.sgintitle);
        props.handletitleform(!props.titleform);
        props.handlebuttonform(!props.buttonform);
        props.handleinpform(!props.showinp);
        props.handleactive(!props.active)
        props.handleactivef(!props.activef)
      }}>{props.signbutton ? 'Create Account' : 'Sign In'}
      </button>
    </WraperContainer >
  )
}


const WraperContainer = styled.div`
position:relative;
width:35%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:lightgreen;
`;



