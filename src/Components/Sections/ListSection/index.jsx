import { useState } from "react";
import { ListFunction } from "./ListFunction";
import { Form } from "../FormSection/Form";
import { v4 as uuidv4 } from 'uuid';
import { NumberSection } from "../NumberSection";
import styles from "./style.module.scss";

export const ListSection = () => {
    const [notes, setNotes] = useState([]);

    const addNoteToList = (formData) => {
        const newNote = { ...formData, id: uuidv4() }
        setNotes([...notes, newNote])
    };

    const removeNoteList = (removeId) => {
        const newNotes = notes.filter((note) => note.id !== removeId);
        setNotes(newNotes);
    }

    return (
        <div className={styles.main}>
            <div className={styles.mainContainer}>
                <Form addNoteToList={addNoteToList} />
                <ListFunction notes={notes} removeNoteList={removeNoteList} />
            </div>

            <NumberSection notes={notes} />
        </div>
    )
}