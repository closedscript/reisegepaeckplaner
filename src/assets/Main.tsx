import styles from "../modules/Main.module.css"
import VacationplanerPage from "./VacationplanerPage.tsx";

function Main() {
    return (
        <main className={styles.mainMain}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}
            ></div><div/>

            <VacationplanerPage></VacationplanerPage>

        </main>
    )
}
export default Main