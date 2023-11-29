import styles from "@/styles/Home.module.css"

type GenericCardprops = {
    nome: string;
    descricao: string;
    imagem: string;
    count: number;
    setCount: (count: number) => void;
    total: number;
    setTotal: (total: number) => void;
}

export default function GenericCard({ nome, descricao, imagem, count, setCount, total, setTotal } : GenericCardprops ) {
    return(
        <div className={styles.card}>
            <header className={styles.cardTitle}>{nome}</header>
            <div className={styles.cardContent}>{descricao}</div>
            <div className={styles.cardImage}>
                <img src={imagem} alt={''} />
            </div>
            <div className={styles.container}>
              <button className={styles.button} onClick={() => {if(count > 0) {setCount(count - 1); setTotal(total - 1);}}}>-</button>
              <span className={styles.count}>{count}</span>
              <button className={styles.button} onClick={() => {setCount(count + 1); setTotal(total + 1);}}>+</button>
            </div>
        </div>
    );
}
