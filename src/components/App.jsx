import React, { useState } from 'react';
import Header  from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes'
import CreateArea from './CreateArea';

function App() {
  const [notes,setNotes] = useState([]);

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
