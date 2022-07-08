import { useEffect, useState } from "react";



const  useFetch = (url) => {
  const [data, setData] = useState(null);
    
  useEffect(() => {
    fetch(url)
    .then(data => data.json())
    .then(response => {
      console.log(response);
      setData(response);  
    })
    .catch(err => {
      console.log(err);
    })
  }, [url]);

  return data;
}


export default useFetch;
 
  

