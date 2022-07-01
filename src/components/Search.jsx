import { Fragment } from "react";

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
    </Fragment>
  )
};
 
export default Search;