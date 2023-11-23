import styles from '../styles/Logo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLike } from '@fortawesome/free-solid-svg-icons'

function Logo() {
  return (
    <div className={styles.container}>
      <div>
        ICONE
      </div>
      
      <div>
        <div>
          <div>Avatar</div>
          <div>
              <h2>name</h2>
              <p>username</p>
          </div>
        </div>
        <button>Logout</button>
        
      </div>
    </div>
  );
}

export default Logo;
