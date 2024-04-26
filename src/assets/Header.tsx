import styles from '../modules/Header.module.css'
function Header() {
    return (
        <header>
            <h1 className={styles.mainHeader}>
                Reisegepäckplaner
            </h1>
        </header>
    )
}

export default Header
