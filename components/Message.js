import styles from '../styles/Message.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons'


function Message(props) {


    function like(){
        fetch('http://localhost:3000/like', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({message: props.message, token: 'Hux0Gb0-1k5ACiyYii8Foo_m-ZWcSQGo'})
        })
            .then(response=>response.json())
            .then(data=>{
                console.log(data)
            })
    }



  return (
    <div className={styles.container}>
        <div className={styles.userContainer}>
          <img src='/images/iconAvatar.png'/>
          <p>{props.firstName}</p>
          <p className={styles.username}>@{props.userName}</p>
          <p>{props.moment}</p>
        </div>
        <div className={styles.messContainer}>
          <p>{props.message}</p>
          <p style={{"color": "#398fee"}}>{props.trend}</p>
        </div>
        <div className={styles.icon}>
            <FontAwesomeIcon icon={faHeart} /><span>0</span>
            <FontAwesomeIcon icon={faTrashCan} />
        </div>
        
    </div>
  );
}

export default Message;
