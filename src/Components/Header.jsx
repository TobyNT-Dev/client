import React from 'react';
import styled from 'styled-components';

const AsciiLogo = `
  __________  ____  ___       _____ __            ___           
 /_  __/ __ \\/ __ \\/   |     / ___// /___  ______/ (_)___  _____
  / / / / / / / / / /| |     \\__ \\/ __/ / / / __  / / __ \\/ ___/
 / / / /_/ / /_/ / ___ |    ___/ / /_/ /_/ / /_/ / / /_/ /\\__ \\ 
 /_/  \\____/_____/_/  |_|   /____/\\__/\\__,_/\\__,_/_/\\____//____/  
`;


export const Header = () => {
  return (
    <StyledPre>
      {AsciiLogo}
      <p>とだ スタジオ</p>
    </StyledPre>
  );
};

const StyledPre = styled.pre`
  font-family: monospace;
  white-space: pre;
  color: #ff0000;
  text-shadow: 1px 1px 3px red, 0 0 1em blue, 0 0 0.2em blue;
  width: 100%;
  text-align: center;
  p {
    font-size: 1.5vw;
    margin: 0;
  }
`;