import styles from '../styles/Home.module.css';
import Message from '../components/Message';
import {useEffect, useState} from 'react'

function Home() {

    const [messages, setMessages]=useState([])
    const [tweet, setTweet]=useState('')
    const [add, setAdd]= useState(false)
    console.log(tweet)

  useEffect(()=>{
    fetch('http://localhost:3000/tweets/display', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({token: 'Hux0Gb0-1k5ACiyYii8Foo_m-ZWcSQGo'})
    })
      .then(response=>response.json())
      .then(data=>{
        setMessages(data.dataReturn.reverse())
      })
      
  }, [add])

function addTweet(){
    fetch('http://localhost:3000/tweets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({message: tweet, token: 'Hux0Gb0-1k5ACiyYii8Foo_m-ZWcSQGo'})
    })
      .then(response =>response.json)
      .then(data=>{
        console.log(data)
        setAdd(!add)
      })
}

function refresh(){
  setAdd(!add)
}



const message = messages.map((data, i)=>{
    return <Message key={i} firstName={data.firstName} userName={data.userName} moment={data.moement} message={data.message} trend={data.trend} isLiked={data.isLiked} likeCount={data.likeCount} refresh={refresh}/>
})


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Home</h1>
        <input type='text' placeholder="What's up?" className={styles.input} maxlength="280" require onChange={((e)=>  setTweet(e.target.value))}/>
        <div className={styles.addContainer}>
          <p className={styles.counter}><span>{tweet.length}</span>/280</p>
          <button className={styles.button} onClick={()=>addTweet()}>Tweet</button>
        </div>
      </div>
      {message}
    </div>
  );
}

export default Home;
