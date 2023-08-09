import styles from "./style.module.scss"

export const ListCard = ({ note, removeNoteList }) => {
    const number = Number(note.number);

    return (
        <li className={note.select === "despesa" ? styles.active : styles.liContainer}>
            <div className={styles.descriptionContainer}>
                <h3>{note.description}</h3>
                <p>{note.select}</p>
            </div>

            <div className={styles.valueContainer}>
                <p>{number.toLocaleString('PT-BR', { style: "currency", currency: "BRL" })}</p>
                <button onClick={() => removeNoteList(note.id)}>Excluir</button>
            </div>
        </li>
    )
}
