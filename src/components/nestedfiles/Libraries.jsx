import Item from '../Item';
import styled from 'styled-components';
import { LanguageBox } from '../../assets/styles/styles';


const NewLanguageBox = styled(LanguageBox)`
  background-color: brown;
`;


const Libraries = ({ librariesList, deleteData }) => {
  return ( 
    <NewLanguageBox theme='dark'>
      <h2> Libraries: </h2>
      <ul>
        {librariesList.map((item) => {
          return (
            <Item 
              key={item.id}
              item={item}
              deleteData={deleteData}
            />
          )
        })}
      </ul>
    </NewLanguageBox>
  );
}
 
export default Libraries;