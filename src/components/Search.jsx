import { Fragment } from "react";
import { Link } from 'react-router-dom';


const Search = ( props ) => {
  const changeInput = (event) => {
    //Calling onSearch function
    props.onSearch(event);
  }

  return (
    <Fragment>
      <label htmlFor="search">Search: </label><br/>
      <input 
        id="search" 
        type="text" 
        autoFocus
        value={props.search}
        onChange={changeInput} 
      />

      <button value={'Click Me'}> Click Me </button>

      {/* Link to the Form page */}
      <Link to='/input'>
        <h4> Add New Item </h4>
      </Link>
    </Fragment>
  )
};
 
export default Search;