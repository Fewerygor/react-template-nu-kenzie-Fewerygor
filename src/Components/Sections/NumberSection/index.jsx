import styles from "./style.module.scss"

export const NumberSection = ({ notes }) => {

    const totalNumber = notes.reduce((prevValue, note) => {
        return note.select === "entrada" ? prevValue + Number(note.number) : prevValue - Number(note.number)
    }, 0)

    return (
        <div className={styles.totalValue}>
            {notes.length > 0 ? (
                <ul>
                    <div className={styles.textContainer}>
                        <h2>Valor total:</h2>
                        <p>O valor se refere ao saldo</p>
                    </div>
                    <div className={styles.numberContainer}>
                        <h3>{totalNumber.toLocaleString('PT-BR', { style: "currency", currency: "BRL" })}</h3>
                    </div>
                </ul>
            ) : (
                ""
            )}
        </div>
    )
}