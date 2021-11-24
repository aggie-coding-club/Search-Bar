import './App.css';
import { useRef, useState } from 'react';
import axios from "axios";

function App() {

  var t = [{"model": "gradesApp.gradesdata", "pk": "", "fields": {"dept": "", "num": "", "prof": "", "sect": "", "sem": "", "yr": "", "gpa": "", "a": "", "b": "", "c": "", "d": "", "f": "", "q": ""}}]
  const newTitle = useRef()
  var url = "http://127.0.0.1:8000/"
  var dict = {}
  const [name, setName] = useState("")
  const [str,setStr] = useState("")
  const [value, setValue] = useState("");

  function search(){
    url = ("http://127.0.0.1:8000/?q=" + newTitle.current.value)
    axios.get(url)
    
    .then(res => {
         t = res.data
         console.log(t)
         next()
      }).catch(err => {});
  }
  
  function next(){
    var o = parseFloat(t[0].fields.gpa)
    var str1 = t[0].fields.prof
    var j = 1
    for(let i = 1; i < t.length; i++){
      if(t[i].fields.prof !== str1){
        dict[str1] = (o/j).toFixed(3)
        j = 0
        str1 = t[i].fields.prof
        o = 0
      }
      o += parseFloat(t[i].fields.gpa)
      j++
    }
    console.log(dict)
    var s = ""
    var max = 0
    var key
    for(var key1 in dict){
      for(var key2 in dict){
        if(dict[key2] > max){
          max = dict[key2]
          key = key2
        }
      }
      s = s + " " + key + ": " + dict[key] + '\n'
      delete dict[key]
      max = 0
    }
    setName(newTitle.current.value.toUpperCase())
    newTitle.current.value = null
    console.log(name)
    setStr(s)
    console.log(str)
  }

  const handleChange = e => {
    setValue(e.target.value);
    console.log(e.target.value)
  };

  const handleKeypress = e => {
    if (e.key === "Enter") {
      console.log("here")
      search()
    }
  };

  function NewLineText(props){
    const text = props.text
    return <div>{text}</div>
  }

  return (
    <>
    <center>
      <div><input placeholder = "Example: CSCE121"
      ref = {newTitle}
      onChange={handleChange}
      onKeyPress={handleKeypress}/></div>
      <button onClick = {search} type = "submit "> Search</button>
      <h1><b>{name}</b></h1>
      <NewLineText text = {str}/>
    </center>
    </>
  );
}

export default App;
