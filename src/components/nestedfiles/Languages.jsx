import Item from '../Item';
import { LanguageBox, Heading } from '../../assets/styles/styles';




const Languages = ({ languagesList, deleteData }) => {
  return ( 
    <LanguageBox>
      <Heading color='green' transform='capitalize' size='80px'> Languages: </Heading>
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