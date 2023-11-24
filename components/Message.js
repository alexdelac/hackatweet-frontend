import styles from '../styles/Message.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import {useSelector} from 'react-redux'
//import {moment} from 'moment'
import {useState} from 'react'


function Message(props) {


  const [timeMess, setTimeMess]=useState('')

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
              props.refresh()
            })
            
    }

    function deleteTweet(){
      fetch('http://localhost:3000/tweets/delete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({message: props.message})
        })
            .then(response=>response.json())
            .then(data=>{
              
            })
            props.refresh()
    }

    
   /* const dateObj = moment(props.moment)

    const difference = moment().diff(dateObj)

    const duree = moment.duration(difference)
    const heure = Math.floor(duree.asHours())
    const minutes = Math.floor(duree.asMinutes()) % 60;
   
    
    if(minutes<1){
      setTimeMess('a few seconds') 
    } else if (heure>=1){
      setTimeMess(`${heure} heures`) 
    } else {
      setTimeMess(`${minutes} minutes`) 
    }*/



  return (
    <div className={styles.container}>
        <div className={styles.userContainer}>
          <img src='/images/iconAvatar.png'/>
          <p>{props.firstName}</p>
          <p className={styles.username}>@{props.userName}</p>
          <p className={styles.username}>{timeMess}</p>
        </div>
        <div className={styles.messContainer}>
          <p className={styles.message}>{props.message}</p>
          <p style={{"color": "#398fee"}}>{props.trend}</p>
        </div>
        <div className={styles.icon}>
            <FontAwesomeIcon icon={faHeart} style={likeStyle} onClick={()=>like()}/><span className={styles.count}style={likeStyle}>{props.likeCount}</span>
           {props.trash && <FontAwesomeIcon icon={faTrashCan} onClick={()=>deleteTweet()}/>}
        </div>
        
    </div>
  );
}

export default Message;
