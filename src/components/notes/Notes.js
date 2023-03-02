import React, {useState, useRef} from 'react'
import styles from "./styles.module.css";

const Notes = () => {

    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
    const [note , setNote] = useState({text : "",});
    const inputRef = useRef();

    const addNotes = () =>{
        if(note.text == "") return;
        const newNotes = [...notes, {...note, text: note.text}];
        setNotes(newNotes);
        localStorage.setItem("notes", JSON.stringify(newNotes));
        setNote({
            text: "",
            id: notes.length
        });
    }

    const handleClick = (id) =>{

        for(let i=0; i<notes.length; i++){
            if(notes[i].id == id){
                const note = notes[i];
                setNote(note);
                inputRef.current.focus();
                notes.splice(i, 1);
                break;
            }
        }
    }


  return (
    <div className={styles.container}>
      <h1>All Notes</h1>
        {notes.map((note) => {
            return <p onClick={() => handleClick(note.id)} key={note.id}>{note.text}</p>
        })}

      <input
        ref= {inputRef}
        type="text"
        value={note.text}
        onChange={(e) => setNote({
            ...note
            , text: e.target.value
        })}
        onBlur={() => addNotes()}
      />
      <div className={styles.icon} onClick={()=> inputRef.current.focus()}>
        <i class="fa-solid fa-pencil"></i>
      </div>
    </div>
  );
}

export default Notes