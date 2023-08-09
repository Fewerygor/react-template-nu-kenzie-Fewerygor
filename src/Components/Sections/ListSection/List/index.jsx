import { ListCard } from "../ListCard.jsx/index.jsx";
import styles from "./style.module.scss"

export const List = ({ notes, removeNoteList }) => {

    return (
        <section className={styles.listContainer}>
            {notes.length > 0 ? (
                <ul>
                    <h3>Resumo financeiro</h3>
                    {notes.map((note) =>
                    (<ListCard
                        removeNoteList={removeNoteList}
                        key={note.id}
                        note={note}
                    />
                    ))}
                </ul>
            ) : (
                <div>
                    <ul>
                        <h3>Resumo financeiro</h3>
                        <p>você ainda não possui nenhum lançamento</p>
                    </ul>
                </div>
            )}
        </section>
    )
}