import { Fragment, useState } from 'react';
import './App.css';
import List from './components/List';
import Practice from './components/Practice';
import Search from './components/Search';
import useLocalStorage from './customHooks/useLocalStorage';


const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    status: 'active',
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    status: 'active',
    objectID: 1,
  },
  {
    title: 'Python',
    url: 'https://python.org/',
    author: 'Guido Van Rossum',
    num_comments: 2,
    points: 5,
    status: 'inactive',
    objectID: 2,
  },
  {
    title: 'Svelte',
    url: 'https://svelte.dev/',
    author: 'Rich Harris',
    num_comments: 4,
    points: 7,
    status: 'active',
    objectID: 3,
  },
  {
    title: 'Tailwind',
    url: 'https://tailwindcss.com/',
    author: 'Daniel Maloney',
    num_comments: 7,
    points: 9,
    status: 'inactive',
    objectID: 4,
  },
  {
    title: 'Vue',
    url: 'https://vuejs.org/',
    author: 'Evan You',
    num_comments: 6,
    points: 10,
    status: 'inactive',
    objectID: 5,
  },
];



function App() {
  const numbers = [1, 2, 3, 4, 5];
  
  //Creating useState Hooks
  const [counter, setCounter] = useState(0);
  //Getting search keyword from localStorage
  const [callBack, setCallBack] = useLocalStorage('search', 'React');

  //Rendering new numbers to new array
  const newNumbers = numbers.map((number) => {
    return number * 2;
  })

  //Creating CallBack handlers
  const onSearch = (event) => {
    setCallBack(event.target.value);

    //Saving search keyword to localStorage
    localStorage.setItem('search', event.target.value);
  }
  
  console.log(newNumbers);

  return (
    <Fragment>
      <Practice />
      <p> {counter} </p>
      <button onClick={() => setCounter(counter - 1)}> Subtract </button>
      <button onClick={() => setCounter(counter + 1)}> Add </button>
      
      {/* Callback Handler value displayed in browser */}
      <h1> {callBack} </h1>
      <h1> Lists in React </h1>
      {/*Components*/}
      <Search search={callBack} onSearch={onSearch}></Search>
      <List title={`Search keyword: ${callBack}`} list={list.filter(search => search.title.toLowerCase().includes(callBack.toLowerCase()))} />
      {/*<List list={list} title={'First List - All'} />
      <List title={'Third List - Active'} list={list.filter(framework => framework.status === 'inactive')} />*/}
    </Fragment>
  
  );
}

export default App;
