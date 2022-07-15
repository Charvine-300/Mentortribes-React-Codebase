import styled from 'styled-components';

export const LanguageBox = styled.div`
  border: 10px solid orange;
  color: ${props => props.theme === 'dark' ? 'black' : 'white'};
  background-color: blue;
  font-family: 'Arial';

  ul {
    list-style-type: disc;

    li {
        font-family: monospace;
    }
  }
`;

export const Heading = styled.h2`
  color: ${props => props.color || 'red'};
  text-align: center;
  text-transform: ${props => props.transform || 'uppercase'};
  font-size: ${(props) => props.size || '20px'};
`;
