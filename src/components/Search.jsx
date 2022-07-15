import { Fragment } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { ReactComponent as File } from '../assets/images/file-add.svg'


const InputLink = styled.button`
  border: none;
  background-color: transparent;
  
  svg {
    width: 30px;
    height: 30px;
    color: #61dafb;
  }

`;



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

      {/* Link to the Form page */}
      <Link to='/input'>
        <InputLink>
          <File /> 
        </InputLink>
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