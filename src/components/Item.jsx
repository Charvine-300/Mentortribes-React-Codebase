

const Item = ({ item, deleteData }) => {
  

  return ( 
    <>
      <li> {item.title} 
        <span>
          <a href={item.url} target="_blank" rel="noreferrer"> {item.title} </a>
        </span>
        <span>
          <h3> {item.author} </h3>
        </span>
        <span>
          <p> No. of comments: {item.num_comments} </p>
        </span>
      </li>
      {/*Creating a button to trigger the removal of the attached item */}
      <button onClick={() => deleteData(item)}> Remove Item </button>
    </>
  );
}
 
export default Item;