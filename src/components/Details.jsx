import { useParams } from "react-router-dom"; 

const Details = () => {
  const { id } = useParams();

  //Fetches data for indivudual item
  const itemData = () => {
    fetch(`http://localhost:8000/list/${id}`)
    .then(response => response.json())
    .then(data => console.log(data))
  }

  
    itemData();

  return ( 
    <>
      <h2> Item Details - {id} </h2>
    </>
  );
}
 
export default Details;