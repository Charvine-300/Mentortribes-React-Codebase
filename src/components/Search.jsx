import { Fragment, useState } from "react";

const Search = ( props ) => {
  const [inputValue, setInputValue] = useState(props.callBack);

  const changeInput = (event) => {
    console.log(event);
    setInputValue(event.target.value);

    //Calling onSearch function
    props.onSearch(event);
  }

  return (
    <Fragment>
      <label htmlFor="search">Search: </label><br/>
      <input id="search" type="text" value={props.search} onChange={changeInput} />

      <button value={'Click Me'} onClick={(event) => console.log(event)}> Click Me </button>
      <p> {inputValue} </p>
    </Fragment>
  )
};
 
export default Search;