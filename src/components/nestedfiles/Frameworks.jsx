import Item from '../Item';

const Frameworks = ({ frameworkList, deleteData }) => {
  return (  
    <>
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
    </>
  );
}
 
export default Frameworks;