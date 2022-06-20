import Item from "./Item";


const List = ({ title, list }) => {
  /*const list = props.list;
  const title = props.title;
  
  /*const newList = list.filter(framework => {
    return framework.status === 'active';
  })*/

  return ( 
    <div>
      <h2> {title} </h2>
      {/*Rendering title of items in JSX*/}
      <ul>
        {list.map((item) => {
          return (
            <Item 
              key={item.objectID}
              {...item}
            />
          )
        })}
      </ul>
    </div>
  );
}
 
export default List;