import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container><a href='https://ashwinsingh87.github.io/Portfolio/'>&copy; Ashwin Singh</a>
      </Container>
  )
}

export default Footer

const Container = styled.div`
background: orange;
padding: 30px 50px;
width: 100%
bottom:0;
color:white

// position: absolute;
`