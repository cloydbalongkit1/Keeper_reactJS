import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(createdNote) {
    setNotes(previous => {
      return [...previous, createdNote]
    });
  }

  function deleteItem(id) {
    setNotes(previousNotes => {
      return previousNotes.filter((note, index) => {
        return index !==id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {notes.map((value, index) => {
        return (
          <Note 
            key={index} 
            id={index} 
            title={value.title} 
            content={value.content} 
            deleteItem={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
