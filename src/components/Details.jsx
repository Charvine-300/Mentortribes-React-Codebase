import { useParams } from 'react-router-dom';

const Details = ({ item }) => {
  const headerStyle = {
    color: "brown",
    fontSize: "30px",
  };


  const { itemID } = useParams(); 

  const itemDetails = item.filter(item => item.id === Number(itemID));
  console.log(itemDetails);

  return ( 
    <>
      <h1 style={headerStyle}> Item Details - {itemID} </h1>
      <ul>
        <li> Author - {itemDetails[0].author} </li>
        <li> Status - {itemDetails[0].status} </li>
        <li> No. of Comments - {itemDetails[0].num_comments} </li>
        <li> Type - {itemDetails[0].type} </li>

      </ul>
    </>
  );
}
 
export default Details;