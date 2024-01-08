import Counter from 'components/counter';
import styles from './style.module.css';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <Counter />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className={styles['App-link']}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
