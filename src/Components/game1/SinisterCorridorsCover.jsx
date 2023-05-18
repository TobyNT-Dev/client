import React from 'react'
import CoverImg from "./Images/sinister_corridors_cover.png"
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SinisterCorridorsCover = () => {
  return (
    <StyledGamecover className="game-cover">
        <img src={CoverImg} alt="Sinister Corridors game cover art" />
        <div className="info-container">
          <p>Sinister Corridors is a creepy game, taking place in a mysterious hospital, in an unknown town.</p>
          <p>Figure out what is going on, in the hospital where your father is located.</p>
          <p>But beware... Things might be more complicated, and more <span>sinister</span> than you think.</p>
          <Link to="/sinister-corridors">Play Sinister Corridors</Link>
        </div>
    </StyledGamecover>
  )
}

const StyledGamecover = styled.div`
width: 60vw;
margin-left: 20vw;
display: grid;
grid-template-columns: 50% 50%;
img {
  height: 30vw;
}
.info-container {
  p {
    color: white;
    font-family: Consolas;
    span {
      color: red;
    }
  }
  a {
    color: #000000;
    text-decoration: none;
    background-color: #ffffff;
    font-family: Consolas;
    font-size: 1.2vw;
    padding: 0.5vw;
  }
}
`