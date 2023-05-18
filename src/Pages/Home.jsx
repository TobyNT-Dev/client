import React from 'react'
import { SinisterCorridorsCover } from '../Components/game1/SinisterCorridorsCover'
import { NavBar } from '../Components/NavBar'
import { Footer } from '../Components/Footer'
import styled from 'styled-components'
import { Header } from '../Components/Header'

export const Home = () => {
  return (
    <>
    <NavBar />
      <StyledHome>
        <div>
          <Header />
          <SinisterCorridorsCover />
        </div>
      </StyledHome>
    <Footer />
    </>
  )
}

const StyledHome = styled.div`
background-color: #101010;
`