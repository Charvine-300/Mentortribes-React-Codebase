import { useEffect } from 'react';
import { Fragment, useState } from 'react';
import './App.css';
import List from './components/List';
import Search from './components/Search';
import InputForm from './components/InputForm';
import useLocalStorage from './customHooks/useLocalStorage';


function App() {
  //Getting search keyword from localStorage
  const [callBack, setCallBack] = useLocalStorage('keyword');
  const [stories, setStories] = useState([]);

  //Creating stateful variables for controlled inputs
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [numComments, setNumComments] = useState(0);
  const [points, setPoints] = useState(0);
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('');
  const [type, SetType] = useState('');
  const [change, setChange] = useState(100);


  function getData() {
    fetch('http://localhost:8000/list')
    .then(data => data.json())
    .then(response => {
      console.log(response);
      setStories(response);
    })
    .catch(err => {
      console.log(err);
    })
  }
 
  useEffect(() => {
    getData()
  }, [change]);


  //Adding items to the database
  const addData = () => {
    fetch('http://localhost:8000/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        "title": title,
        "author": author,
        "num_comments": numComments,
        "points": points,
        "status": status,
        "type": type,
        "url": url
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setChange(change + 1)
    })
    .catch(err => console.log(err))
  }

  //Deleting items from the database
  const deleteData = (item) => {
    fetch(`http://localhost:8000/list/${item.id}`, {
      method: 'DELETE'
    })
    .then(
      console.log("Object deleted")
    )
  }
  

  //Creating CallBack handlers
  const onSearch = (event) => {
    setCallBack(event.target.value);
  }


  return (
    <Fragment>
      <InputForm
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        numComments={numComments}
        setNumComments={setNumComments}
        points={points}
        setPoints={setPoints}
        url={url}
        setUrl={setUrl}
        status={status}
        setStatus={setStatus}
        type={type}
        setType={SetType}
        addData={addData}
      />
      <h1> Lists in React </h1>
      {/* Components - Opening and Closing Tag */}
      <Search search={callBack} onSearch={onSearch}></Search>

      {/*Components - Self-closing tag*/}
      <List 
        deleteData={deleteData}
        title={`Search keyword: ${callBack}`} 
        list={stories.filter(search => search.title.toLowerCase().includes(callBack.toLowerCase()))} />

  
    </Fragment>
  );
}

export default App;
