import styles from "./style.module.scss"

export const ListCard = ({ note, removeNoteList }) => {

    return (
        <li className={styles.liContainer}>
            <div className={styles.descriptionContainer}>
                <h3>{note.description}</h3>
                <p>{note.select}</p>
            </div>

            <div className={styles.valueContainer}>
                <p>{note.number}</p>
                <button onClick={() => removeNoteList(note.id)}>Excluir</button>
            </div>
        </li>
    )
}
