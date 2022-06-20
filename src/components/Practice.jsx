import { useEffect, useState } from "react";


const Practice = () => {
  const [practice, setPractice] = useState(0);

  //useEffect Hook running depending on the practice useState hook
  useEffect(() => {
    console.log("Practice Component: The useEffect Hook!");
  }, [practice]);

  return ( 
    <>
    <h5> Practice Component </h5>
     <p> {practice} </p>
      <button onClick={() => setPractice(practice - 1)}> Subtract </button>
      <button onClick={() => setPractice(practice + 1)}> Add </button>
    </>
  );
}
 
export default Practice;