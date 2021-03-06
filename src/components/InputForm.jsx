import { useNavigate } from 'react-router-dom';


const Practice = ( props ) => {
  //Navigation Feature 
  const home  = useNavigate();
 

 //Adding items to the database
  const addData = (e) => {
    e.preventDefault();

    fetch('http://localhost:8000/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
      "title": props.title,
      "author": props.author,
      "num_comments": Number(props.numComments),
      "points": Number(props.points),
      "status": props.status,
      "type": props.type,
      "url": props.url
      })
    })
    .then(response => response.json())
    .then(data => {
    console.log(data)
    props.setChange(props.change + 1)
    })
    .catch(err => console.log(err))
  
    //Return to homepage
    home('/');
  }


  return ( 
    <>
      <form>
        <fieldset>
          <legend> <strong> Add New Object to Database </strong></legend>
          <label htmlFor="title">Title: </label> <br/>
          <input 
            type="text" 
            id="title" 
            value={props.title} 
            onChange={(e) => props.setTitle(e.target.value)}
          /> 
          <br />
          <br />
          <label htmlFor="author">Author: </label> <br/>
          <input 
            type="text" 
            id="author" 
            value={props.author}
            onChange={(e) => props.setAuthor(e.target.value)}
          /> 
          <br />
          <br />
          <label htmlFor="num_comments">Number of Comments: </label> <br/>
          <input 
            type="number" 
            min="0"
            max="100"
            id="num_comments" 
            value={props.numComments} 
            onChange={(e) => props.setNumComments(e.target.value)}
          /> 
          <br />
          <br />
          <label htmlFor="points">Points: </label> <br/>
          <input 
            type="number" 
            min="0"
            max="50"
            id="points" 
            value={props.points}
            onChange={(e) => props.setPoints(e.target.value)}
          /> 
          <br />
          <br />
          <label htmlFor="url">URL: </label> <br/> 
          <input 
            type="text" 
            id="url" 
            value={props.url} 
            onChange={(e) => props.setUrl(e.target.value)}
          /> 
          <br />
          <br />
          <label htmlFor="status">Status: </label> <br/>
          <select 
            id="status" 
            value={props.status}
            onChange={(e) => props.setStatus(e.target.value)}
          >
            <option value="active"> Active </option>
            <option value="inactive"> Inactive </option>
          </select> 
          <br />
          <br />
          <label htmlFor="type">Type: </label> <br/>
          <select 
            type="text" 
            id="type" 
            value={props.type}
            onChange={(e) => props.setType(e.target.value)}
          >
            <option value="framework"> Framework </option>
            <option value="library"> Library </option>
            <option value="language"> Language </option>
          </select>
          <br />
          <br />
          <button onClick={(e) => {addData(e)}}> Add New Data </button>
        </fieldset>
      </form>
    </>
  );
}
 
export default Practice;