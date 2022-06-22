import { useState, useEffect } from "react";

const useLocalStorage = (key, initialState) => {
  //useState hook which contains the input value
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem(key) || initialState);

  
  //The value of the key is changed to searchTerm to update it in the localStorage
  //It is not initialState because that would just assign the 'React' value to the key instead of the current value in the search bar
  useEffect(() => {
    //Assigning value in search bar to key in localStorage
    localStorage.setItem(key, searchTerm);
  }, [searchTerm, key]);

  return [searchTerm, setSearchTerm];
}
 
export default useLocalStorage;