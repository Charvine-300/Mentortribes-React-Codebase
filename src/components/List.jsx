import '../App.css';
import Item from "./Item";


const List = ({ title, list }) => {

  return ( 
    <div className='wrapper'>
      {/* If you wish to style the wrapping element, make it a normal HTML element and not a fragment */}
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