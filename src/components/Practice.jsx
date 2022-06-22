import { useEffect, useState } from "react";


const Practice = ({ children }) => {
  const [practice, setPractice] = useState(0);

  //useEffect Hook running depending on the practice useState hook
  useEffect(() => {
    console.log("Practice Component: The useEffect Hook!");
  }, [practice]);

  return ( 
    <>
      {/* A fragment can be written in shorthand as seen in this component */}
      {children}
      <p> {practice} </p>
      <button onClick={() => setPractice(practice - 1)}> Subtract </button>
      <button onClick={() => setPractice(practice + 1)}> Add </button>
    </>
  );
}
 
export default Practice;