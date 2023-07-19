import React, { useState,useEffect } from 'react';
import Header  from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes'
import CreateArea from './CreateArea';

const getLocalItems = () =>{
  let items = localStorage.getItem('notes');
  if(items){
    return JSON.parse(localStorage.getItem('notes'));
  }
  else{
    return [];
  }
}

function App() {
  const [notes,setNotes] = useState(getLocalItems());

  function addNote(note){
    setNotes(prevValue =>{
      return [...prevValue,note];
    })
  }
  function deleteNote(id){
    setNotes(prevValue =>{
      return prevValue.filter((noteItem,index)=>{
        return index !== id;
      })
    })
  }
  useEffect(()=>{
    localStorage.setItem('notes',JSON.stringify(notes))},[notes])
  
  return (
    <div >
      <Header/>
      <CreateArea onAdd = {addNote} />
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      {notes.map((noteItem,idx) =>{
        return (<Note
          key = {idx}
          id = {idx}
          title = {noteItem.title}
          content  = {noteItem.content}
          onDelete = {deleteNote}
        />)

        
      })}
      <Footer/>
    </div>
  );
}

export default App;
