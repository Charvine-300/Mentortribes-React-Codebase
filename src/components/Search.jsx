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

      <div className="nested-routes">
        <Link to='/'>
          <h4> All Items </h4>
        </Link>
        <Link to='/frameworks'>
          <h4> Frameworks </h4>
        </Link>
        <Link to='/libraries'>
          <h4> Libraries </h4>
        </Link>
        <Link to='/languages'>
          <h4> Languages </h4>
        </Link>
      </div>
    </Fragment>
  )
};
 
export default Search;