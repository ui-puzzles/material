import Image from 'next/image';
import styles from './page.module.css';

import './app.css';
import { Open, Delete } from './icons';

export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        <div className="board">
          <div className="todo">
            <h3>Todo</h3>
            <div className="card">
              Wake up
              <div className="buttons">
                <button data-action="open">
                  <Open />
                </button>
                <button data-action="delete">
                  <Delete />
                </button>
              </div>
            </div>
            <div className="card">
              Feed the dog
              <div className="buttons">
                <button data-action="open">
                  <Open />
                </button>
                <button data-action="delete">
                  <Delete />
                </button>
              </div>
            </div>
            <div className="card">
              Do some work
              <div className="buttons">
                <button data-action="open">
                  <Open />
                </button>
                <button data-action="delete">
                  <Delete />
                </button>
              </div>
            </div>
          </div>
          <div className="done">
            <h3>Done</h3>
            <div className="card">
              Eat some ice cream
              <div className="buttons">
                <button data-action="open">
                  <Open />
                </button>
                <button data-action="delete">
                  <Delete />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        Some text here
        <div className="buttons">
          <button data-action="open">
            {/* <Open /> */}
            open
          </button>
          <button data-action="delete">
            delete
            {/* <Delete /> */}
          </button>
        </div>
      </div>
      <div className={styles.card}>simple card</div>
      <div className={styles.card}>
        <div>
          <img
            src="https://fujia.site/articles/60e24468075f4700349fa016"
            alt=""
          />
        </div>
      </div>
      <div className={styles.card}></div>
      <img src="https://fujia.site/articles/60e24468075f4700349fa016" alt="" />
    </div>
  );
}
