import Item from '../Item';

const Languages = ({ languagesList, deleteData }) => {
  return ( 
    <>
      <h2> Languages: </h2>
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
    </>
  );
}
 
export default Languages;