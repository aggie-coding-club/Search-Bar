import './App.css';
import axios from "axios";
import { useState, useEffect, useRef } from 'react';

function App() {


  const[title, setTitle] = useState([])
  const newTitle = useRef()
  var name = useRef("Ready to search?")
  const[pos, setPos] = useState(-1)


  useEffect((title) => {
    axios.get("http://127.0.0.1:8000/searchBar/search/", title)
    
    .then(res => {
         setTitle(res.data);
         console.log(res.data)
         //setHeader(res.headers)
      }).catch(err => {});
  }, [])

  
  function search(){


    if(title.search(newTitle.current.value) !== -1 && newTitle.current.value.length >= 5)
    name.current = title.substring(title.search(newTitle.current.value), title.search(newTitle.current.value) + newTitle.current.value.length)
    else
    name.current = "No such game."
    newTitle.current.value = null;
    //console.log(name.current)
    setPos(name.current)
  }


  return (
    <div>
      <input ref = {newTitle}/>
      <button onClick = {search}> Search</button> 
      {name.current}
      {console.log(title)}
    </div>
  );
}

export default App;
