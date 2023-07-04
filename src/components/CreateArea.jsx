import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
// import Fab from '@materail-ui/core/Fab';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    // prevents default behaviour of refreshing the form when u use button inside a form
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }
  return (
    <div>
      <form className="create-note">
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        {/* textarea is used for multi-line input */}
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <Zoom in = {true}>
        <button  onClick={submitNote}><AddIcon/></button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
