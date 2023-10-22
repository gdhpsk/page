import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Nav from '@/components/Nav'
import dayjs from 'dayjs'
import { Button } from 'react-bootstrap'

export default function Home({age}:  {age: number}) {
  return (
    <>
      <Head>
        <title>Hpsk&#39;s website</title>
        <meta name="description" content="My very own personalized website, with some info & socials about me." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{background: "linear-gradient(0deg, gray, black 95%)", width: "100vw", height: "100vh"}}>
        <Nav></Nav>
        <div style={{display: "grid", placeItems: "center"}}>
        <div className={styles.title}>
          <h1>Hello! hpsk over here.</h1>
          <br></br>
          <p>I am a {age} year old web developer, runner, and martial artist. Let me show you some things around!</p>
        </div>
        <div className={`${styles.title} ${styles.webdev}`}>
          <h2 style={{textAlign: 'left'}}>Some things I have done in web development include:</h2>
          <br></br>
          <ul style={{paddingLeft: "20px"}}>
          <li style={{textAlign: 'left'}}>Making $300 a month off of all my websites combined</li>
          <li style={{textAlign: 'left'}}>Sponsored by iCreate Pro, the all in one Geometry Dash hacking tool for iOS</li>
          <li style={{textAlign: 'left'}}>Using frameworks like Node.js, Next.js, and Angular.js to make them</li>
          <li style={{textAlign: 'left'}}>Using a Linux Virtual Machine to self-host my own MongoDB server & all my websites.</li>
          <li style={{textAlign: 'left'}}>Developer of 5 Geometry Dash Lists:<br></br><br></br>
          <div className={styles.scrollable}>
          <div>
              <img src="https://songfilehub.com/favicon.ico" width="200" height="200" />
              <br></br>
              <a href="https://songfilehub.com" target="_blank" style={{color: "whitesmoke"}}>Song File Hub</a>
            </div>
            <div>
              <img src="https://insanedemonlist.com/favicon.ico" width="200" height="200" />
              <br></br>
              <a href="https://insanedemonlist.com" target="_blank" style={{color: "whitesmoke"}}>Insane Demon List</a>
            </div>
            <div>
              <img src="https://gdlrrlist.com/favicon.ico" width="200" height="200" />
              <br></br>
              <a href="https://gdlrrlist.com" target="_blank" style={{color: "whitesmoke"}}>Low Refresh Rate List</a>
            </div>
            <div>
              <img src="https://mobilepointercrate.com/icon.gif" width="200" height="200" />
              <br></br>
              <a href="https://mobilepointercrate.com" target="_blank" style={{color: "whitesmoke"}}>High Refresh Rate Mobile List</a>
            </div>
            <div>
              <img src="https://gdmobilewrlist.com/favicon.ico" width="200" height="200" />
              <br></br>
              <a href="https://gdmobilewrlist.com" target="_blank" style={{color: "whitesmoke"}}>Mobile World Records List</a>
            </div>
          </div>
          <br></br>
              {/* <ul style={{marginLeft: "20px"}}>
                  <li style={{textAlign: 'left'}}><a href="https://songfilehub.com" target="_blank" style={{color: "whitesmoke"}}>Song File Hub</a></li>
                  <li style={{textAlign: 'left'}}><a href="https://insanedemonlist.com" target="_blank" style={{color: "whitesmoke"}}>Insane Demon List</a></li>
                  <li style={{textAlign: 'left'}}><a href="https://gdlrrlist.com" target="_blank" style={{color: "whitesmoke"}}>Low Refresh Rate List</a></li>
                  <li style={{textAlign: 'left'}}><a href="https://gdmobilewrlist.com" target="_blank" style={{color: "whitesmoke"}}>Mobile World Records List</a></li>
                  <li style={{textAlign: 'left'}}><a href="https://hrrmobilelist.com" target="_blank" style={{color: "whitesmoke"}}>High Refresh Rate Mobile List</a></li>
              </ul> */}
          </li>
          <li style={{textAlign: 'left'}}>Made my own blog on Medium: <a href="https://medium.com/@gdhpsk" target="_blank" style={{color: "whitesmoke"}}>https://medium.com/@gdhpsk</a></li>
          </ul>
        </div>
        <div className={`${styles.title} ${styles.running}`}>
          <h2 style={{textAlign: 'left'}}>Some things I have done in running include:</h2>
          <br></br>
          <ul style={{paddingLeft: "20px"}}>
            <li style={{textAlign: 'left'}}>Represented my school team in both cross country and track and field</li>
            <li style={{textAlign: 'left'}}>Main event was the 4x400, however I may do more events</li>
            <li style={{textAlign: 'left'}}>Fastest opem 400m time is 1:01</li>
            <li style={{textAlign: 'left'}}>6:02 Mile Time</li>
            <li style={{textAlign: 'left'}}>13:31 2 Mile Time</li>
          </ul>
        </div>
        <div className={`${styles.title} ${styles.arts}`}>
          <h2 style={{textAlign: 'left'}}>Some things I have done in martial arts include:</h2>
          <br></br>
          <ul style={{paddingLeft: "20px"}}>
            <li style={{textAlign: 'left'}}>1st Degree Black Belt @ West Coast</li>
            <li style={{textAlign: 'left'}}>Helped out for multiple tests & classes</li>
            <li style={{textAlign: 'left'}}>Won first place in 2 tournaments for forms</li>
            <li style={{textAlign: 'left'}}>Can do an Ariel and 540 kick</li>
          </ul>
        </div>
        <div className={`${styles.title} ${styles.contact}`}>
          <h2 style={{textAlign: 'left'}}>Contact me!</h2>
          <br></br>
          <div className={styles.scrollable} style={{height: "40px", overflowY: "hidden"}}>
          <div>
                <Button href="https://discord.com/users/703364595321929730" target="_blank">Discord</Button>
            </div>
            <div>
                <Button style={{backgroundColor: "red"}} href="https://www.youtube.com/channel/UCnlpzjbXM19xJJSdY8ztd_A" target="_blank">Youtube</Button>
            </div>
            <div>
                <Button style={{backgroundColor: "purple"}} href="https://www.twitch.tv/gdhpsk" target="_blank">Twitch</Button>
            </div>
            <div>
                <Button style={{backgroundColor: "lightblue"}} href="https://twitter.com/gdhpsk" target="_blank">Twitter</Button>
            </div>
            <div>
                <Button style={{backgroundColor: "black"}} href="https://github.com/gdhpsk" target="_blank">Github</Button>
            </div>
          </div>
        </div>
        </div>
        <br></br>
      </main>
    </>
  )
}

export function getServerSideProps() {
  return {
    props: {
      age: dayjs(Date.now() - 1253577600000).year() - 1970
    }
  }
}