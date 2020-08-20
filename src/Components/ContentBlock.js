import React from 'react';
import styled, { keyframes, css } from 'styled-components'
import { useState, useEffect } from 'react';

export const ContentBlock = (props) => {
  return (
    <WraperContainer className={props.welcome ? null : 'active'}>
      <h1>{props.welcome ? 'Wellcom Back' : 'Hellow New Friend'}</h1>
      <button onClick={() => { props.handlewelcom(!props.welcome) }}>{props.welcome ? 'Create Account' : 'Sign In'}
      </button>
    </WraperContainer >
  )
}
const WraperContainer = styled.div`
transition: 2s;
right:65%;
width:35%;
height:100%;
display:flex;
position:absolute;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:lightgreen;
`;




