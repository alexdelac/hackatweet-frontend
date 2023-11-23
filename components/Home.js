import styles from '../styles/Home.module.css';
import Message from '../components/Message';

function Home() {


const messages = [
  {avatar: 'link', firstName: 'test', userName: 'userName', time: 'moment', message: 'voici un message'},
  {avatar: 'link', firstName: 'test', userName: 'userName', time: 'moment', message: 'voici un message'},
  {avatar: 'link', firstName: 'test', userName: 'userName', time: 'moment', message: 'voici un message'},
]

const message = messages.map((data, i)=>{
    return <Message avatar={data.avatar} firstName={data.firstName} userName={data.userName} moment={data.moment} message={data.message}/>
})


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Home</h1>
        <input type='text' placeholder="What's up?" className={styles.input}/>
        <div className={styles.addContainer}>
          <p><span>0</span>/280</p>
          <button className={styles.button}>Tweet</button>
        </div>
      </div>
      {message}
    </div>
  );
}

export default Home;
