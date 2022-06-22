

const dynamicList = ({name, list, children}) => {
  return ( 
    <>
      <h2> {children} </h2>
      <ul>
        {list.map((item) => {
          return (
          <li> {item[name]} </li>
          )
        })}
      </ul>
    </>
  );
}
 
export default dynamicList;