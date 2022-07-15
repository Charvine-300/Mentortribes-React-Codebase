import Item from '../Item';
import { LanguageBox } from '../../assets/styles/styles';


const Frameworks = ({ frameworkList, deleteData }) => {
  return (  
    <LanguageBox>
      <h2> Frameworks: </h2>
      <ul>
        {frameworkList.map((item) => {
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
 
export default Frameworks;