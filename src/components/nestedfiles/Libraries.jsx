import Item from '../Item';

const Libraries = ({ librariesList, deleteData }) => {
  return ( 
    <>
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
    </>
  );
}
 
export default Libraries;