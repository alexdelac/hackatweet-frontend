import styles from '../styles/Message.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons'


function Message(props) {
  return (
    <div className={styles.container}>
        <div className={styles.userContainer}>
          <img src='/images/iconAvatar.png'/>
          <p>{props.firstName}</p>
          <p>{props.userName}</p>
          <p>{props.moment}</p>
        </div>
        <div>
          <p>{props.message}</p>
        </div>
        <div className={styles.icon}>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faTrashCan} />
        </div>
        
    </div>
  );
}

export default Message;
