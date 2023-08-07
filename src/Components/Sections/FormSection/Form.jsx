import { useState } from "react"
import styles from "./Style.module.scss"

export const Form = ({ addNoteToList }) => {

    const [description, setDescription] = useState("");
    const [number, setNumber] = useState();
    const [select, setSelect] = useState("entrada");

    const handleSubmit = (e) => {
        e.preventDefault();
        addNoteToList({ description, number, select });
        setDescription("");
        setNumber("")
    }

    return (
        <>
            <form className={styles.formContainer} id="form" onSubmit={handleSubmit}>

                <div className={styles.flexBox}>
                    <div className={styles.textContainer}>
                        <label htmlFor="description">Descrição</label>
                        <input type="text"
                            id="description"
                            placeholder="Digite aqui sua descrição"
                            value={description}
                            required={true}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <p>Ex: Compra de roupas</p>
                    </div>

                    <div className={styles.valueContainer}>
                        <label htmlFor="value">Valor (R$)</label>
                        <input
                            type="number"
                            id="value"
                            placeholder="1"
                            value={number}
                            required={true}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>

                    <div className={styles.selectContainer}>
                        <label htmlFor="select">Tipo de valor</label>
                        <select id="select" value={select} onChange={(e) => setSelect(e.target.value)}>
                            <option value="entrada">Entrada</option>
                            <option value="despesa">Despesa</option>
                        </select>
                    </div>

                    <button type="submit">Inserir valor</button>
                </div>
            </form>
        </>
    )
}