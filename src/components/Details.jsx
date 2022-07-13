import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Details = ({ item }) => {
  const [changeSize, setChangeSize] = useState('');

  useEffect(() => {
    if (document.body.clientWidth < 1024) {
      setChangeSize('50px');
    }

    else {
      setChangeSize('80px');
    }
  }, [])


  const headerStyle = {
    color: "brown",
    fontSize: `${changeSize}`,
  };


  const { itemID } = useParams(); 

  const itemDetails = item.filter(item => item.id === Number(itemID));
  console.log(itemDetails);

  return ( 
    <div className="wrapper borders">
      <h1 style={headerStyle}> Item Details - {itemID} </h1>
      <ul>
        <li style={{"fontFamily": "cursive"}}> Author - {itemDetails[0].author} </li>
        <li> Status - {itemDetails[0].status} </li>
        <li> No. of Comments - {itemDetails[0].num_comments} </li>
        <li> Type - {itemDetails[0].type} </li>

      </ul>
    </div>
  );
}
 
export default Details;