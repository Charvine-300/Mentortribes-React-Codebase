import Item from '../Item';
import styled from 'styled-components';

const LanguageBox = styled.div`
  border: 10px solid orange;
  color: purple;
  backgorund-color: lightblue;
  font-family: 'Arial';

  @media screen and (min-width: 1024px) {
    color: black;
    background-color: pink;
  }
`;

const Heading = styled.h2`
  color: green;
  text-align: center;
  font-size: 50px;
`;

const NewHeading = styled(Heading)`
  color: red;
  text-transform: uppercase;
`;


const Languages = ({ languagesList, deleteData }) => {
  return ( 
    <LanguageBox>
      <NewHeading> Languages: </NewHeading>
      <ul>
        {languagesList.map((item) => {
          return (
            <Item 
              key={item.id}
              item={item}
              deleteData={deleteData}
            />
          )
        })}
      </ul>
    </LanguageBox>
  );
}
 
export default Languages;