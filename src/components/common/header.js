import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  font-size: 28px;
  padding: 0px;
  margin: 10px;
  border: 1px solid blue;

  h1 {
    text-align: center;
  }
`

const Header = () => (
  <StyledHeader>
    <h1>The News Times</h1>
  </StyledHeader>
)

export default Header
