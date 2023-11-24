import styles from '../styles/Message.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import {useSelector} from 'react-redux'



function Message(props) {

   const user = useSelector((state)=>state.users.value[0].newUser)
 
  let likeStyle = {}
  if (props.isLiked){
    likeStyle = {"color": "#f51772"}
  }


    function like(){
        fetch('http://localhost:3000/tweets/like', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({message: props.message, token:  `${user.token}`})
        })
            .then(response=>response.json())
            .then(data=>{
                
            })
            props.refresh()
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
          <p className={styles.message}>{props.message}</p>
          <p style={{"color": "#398fee"}}>{props.trend}</p>
        </div>
        <div className={styles.icon}>
            <FontAwesomeIcon icon={faHeart} style={likeStyle} onClick={()=>like()}/><span className={styles.count}style={likeStyle}>{props.likeCount}</span>
            <FontAwesomeIcon icon={faTrashCan} />
        </div>
        
    </div>
  );
}

export default Message;
