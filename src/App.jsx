import './App.css';
import { useEffect } from 'react';
import Error404 from './images/404.png';
import { Fragment, useState } from 'react';
import InputForm from './components/InputForm';
import useLocalStorage from './customHooks/useLocalStorage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './components/Homepage';
import Details from './components/Details';


function App() {

  const [cartisEmpty] = useState(false);
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
  

  //Deleting items from the database
  const deleteData = (item) => {
    fetch(`http://localhost:8000/list/${item.id}`, {
      method: 'DELETE'
    })
    .then(() => {
      console.log("Object deleted")
      setChange(change -1);
    })
  }
  

  //Creating CallBack handlers
  const onSearch = (event) => {
    setCallBack(event.target.value);
  }

  /*list={stories.filter(search => search.title.toLowerCase().includes(callBack.toLowerCase()))}*/

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/*' element={
            <Homepage
              search={callBack} 
              onSearch={onSearch}
              deleteData={deleteData}
              list={stories}
            />} 
          />
          <Route path='/input' element={  
            <InputForm
              change={change}
              setChange={setChange}
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
            />}
          />
          <Route path='/items/:id' element={<Details />}/>
          <Route path='/happy' element={(
            <div>
             <p> Happy Birthday Thomas! </p>
            </div>
          )}/>
          {/* Conditional rendering */}
          <Route path='/redirect' element={cartisEmpty ? <Navigate to='/' /> : <p> Cart is Full </p>} />

          {/* 404 Error Route. Should always remain at last part */}
          <Route path='*' element={(
            <div className='error-page'>
              <img src={Error404} alt="Page Not Found" />
            </div>
          )}/>
        </Routes>
      </Router> 
    </Fragment>
  );
}

export default App;
