import React from 'react';
import styled from 'styled-components'
import { Input, LabelText } from './Form'

export const FromHideContent = () => {
  return (
    <div>
      <LabelText>Name:</LabelText>
      <Input type="text"></Input>
    </div>
  )
}