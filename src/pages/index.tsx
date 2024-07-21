import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Grid, Box, Button, Text, HoverCard, Flex, Avatar, Card, Inset, Dialog} from "@radix-ui/themes"
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })


let sentences = [
  'I am a 14 year old programmer, runner, and martial artist. Let me show you some things around!'
];

export default function Home() {
  let [height, setHeight] = useState({total: 0, scroll: 0})
  let [information, setInformation] = useState('')
  let [width, setWidth] = useState({
    width: 0
  })
  const getWidth = () => typeof document !== "undefined" ? document.body.clientWidth : 0
  const getScrollHeight = () =>  typeof document !== "undefined" ?  document?.documentElement.scrollTop : 0;
  useEffect(() => {
    setHeight({total: document.documentElement.scrollHeight - document.documentElement.clientHeight, scroll: getScrollHeight()})
  }, [getScrollHeight()])
  useEffect(() => {
    setWidth({width: getWidth()})
  }, [getWidth()])
  useEffect(() => {
    (async () => {
      for(let i = 0; i < sentences[0].length; i++) {
        setInformation(sentences[0].slice(0, i+1))
        await new Promise((resolve, reject) => {
          setTimeout(resolve, 20)
        })
      }
    })()
  }, [])
  return (
    <>
      <main>
        <Grid className='show' columns={width.width < 2000 ? "1" : "2"} style={{placeItems: "center"}}>
          <Box>
            <Box style={{position: "fixed", left: "30px", top: "35px", display: width.width < 1250 ? "none" : "block"}}>
              <Button radius="full" style={{zIndex: 2, backgroundColor:  height.scroll > 0 ? "skyblue" : "white", color: "black", position: "fixed", left: "19px"}}>S</Button>
              <Box width="2" style={{top: "3%", position: "fixed", height: "91%", backgroundColor:"white"}}></Box>
              <Box width="2" style={{top: "3%", position: "fixed", height: `calc((${height.scroll} / ${height.total}) * 91%)`, backgroundColor: "skyblue"}}></Box>
              <Button radius="full" style={{backgroundColor: height.scroll == height.total ? "skyblue" : "white", color: "black", bottom: "5%", position: "fixed", left: "19.5px"}}>E</Button>
            </Box>
            <Box>
              <Text size="8" weight="bold" style={{display: "inline-block", marginTop: "5vh", width: "100%", textAlign: "center"}}>Hello there! My name is{' '}
              <HoverCard.Root>
                  <HoverCard.Trigger>
                    <Text color="cyan">Saarang</Text>
                  </HoverCard.Trigger>
                  <HoverCard.Content>
                    <Flex gap="4">
                      <Avatar
                        size="5"
                        fallback="divinity"
                        radius="full"
                        src="https://t4.ftcdn.net/jpg/05/37/54/49/360_F_537544995_T5NoJB3DtrDLPOZDtd16QqsS9fjQ6py9.jpg"
                      ></Avatar>
                      <Flex direction="column">
                        <Text size="4" weight="bold">Saarang</Text>
                        <Text size="2">One of the 1000 names of Lord Vishnu, also means love</Text>
                      </Flex>
                    </Flex>
                  </HoverCard.Content>
                </HoverCard.Root>
                , more commonly known as <HoverCard.Root>
                  <HoverCard.Trigger>
                    <Text color="cyan">hpsk</Text>
                  </HoverCard.Trigger>
                  <HoverCard.Content>
                    <Flex gap="4">
                      <Avatar
                        size="5"
                        fallback="gdhpsk"
                        radius="full"
                        src="https://cdn.discordapp.com/avatars/703364595321929730/a_d19ef817b89dc3781c5b27c2f3338ec8.gif"
                      ></Avatar>
                      <Flex direction="column">
                        <Text size="4" weight="bold">gdhpsk</Text>
                        <Text size="2">Geometry Dash Hyper P*nis Space Katana</Text>
                      </Flex>
                    </Flex>
                  </HoverCard.Content>
                </HoverCard.Root>!</Text>
                <br></br><br></br>
                <Text size="5" style={{display: "inline-block", width: "100%"}} id="information">{information}<div style={{height: "20px", width: "2px", backgroundColor: "darkgray", display: information.length == sentences[0].length ? "none" : "inline-block"}}></div></Text>
              </Box>
          </Box>
          <Box style={{marginTop: width.width < 2000 ? "100px" : "5vh"}}>
          <Card style={{maxWidth: "600px"}}>
            <Text size="5" style={{width: "100%", display: "inline-block", textAlign: "center"}} weight="bold">My Social Contacts</Text>
              <Grid columns="3" gap="9" style={{marginTop: "20px"}}>
                <Box>
                    <Button color="blue" onClick={() => window.location.href = "https://discord.com/users/703364595321929730"}>
                        Discord
                    </Button>
                    <br></br>
                    <br></br>
                    <Button color="crimson" onClick={() => window.location.href = "https://github.com/gdhpsk"}>
                        Github
                    </Button>
                </Box>
                <Box>
                <Button color="red" onClick={() => window.location.href = "https://www.youtube.com/channel/UCnlpzjbXM19xJJSdY8ztd_A"}>
                        Youtube
                    </Button>
                    <br></br>
                    <br></br>
                    <Button color="cyan" onClick={() => window.location.href = "https://twitter.com/gdhpsk"}>
                        Twitter
                    </Button>
                </Box>
                <Box>
                <Button color="purple" onClick={() => window.location.href = "https://www.twitch.tv/gdhpsk"}>
                        Twitch
                    </Button>
                    <br></br>
                    <br></br>
                    <Button color="cyan" onClick={() => window.location.href = "https://ko-fi.com/gdhpsk"}>
                        Donate via KoFi
                    </Button>
                </Box>
              </Grid>
              <br></br>
              <Text size="1" style={{lineHeight: "15px", display: "inline-block"}}>If you want me to make a site for you, hit me up on discord! Username is gdhpsk</Text>
            </Card>
          </Box>
        </Grid>
       <Flex style={{paddingLeft: width.width < 1250 ? "20px" : "100px", justifyContent: "space-between", rowGap: "50px", alignItems: "flex-start", paddingRight: width.width < 1250 ? "20px" : "100px", marginTop: "15vh", flexWrap: "wrap"}} width={"100%"}>
       <Grid style={{placeItems: "center"}}>
          <Card style={{maxWidth: "1150px", width: width.width <= 1000 ? width.width : "auto"}}>
          {width.width <= 700 ? <Inset clip="padding-box" side="top">
              <img
                src="https://www.parzlogic.com/wp-content/uploads/2017/10/web-dev.jpg"
                width={width.width}
              ></img>
            </Inset> : ""}
            <Flex gap="8">
            {width.width > 700 ? <Inset clip="padding-box" side="top">
              <img
                src="https://www.parzlogic.com/wp-content/uploads/2017/10/web-dev.jpg"
                width={375}
                height={"100%"}
              ></img>
            </Inset> : ""}
            <Flex direction="column" style={{paddingRight: "30px"}}>
              <Text size="8" weight="bold" style={{display: "inline-block", width: "100%", textAlign: "center", marginTop: "20px"}}>Things I&apos;ve done as a Programmer</Text>
              <Text size="4" style={{display: "inline-block", width: "100%", textAlign: "center", marginTop: "15px"}}>This part of the page will display everything I&apos;ve done related to programming.</Text>
              <Card style={{maxWidth: "1150px", marginTop: "20px"}}>
              <Flex gap="6">
              <Avatar
                  fallback="next.js"
                  radius='full'
                  src="https://news.utexas.edu/wp-content/uploads/2021/01/TCE_BlogPostImage_ResumeBuilding-100-600x400-c-default.jpg"
                 style={{width: "64px", height: "64px"}}
                ></Avatar>
              <Flex direction="column">
                <Text size="6" weight="bold">My Programming Resume</Text>
                <Text size="2" style={{marginTop: "10px", lineHeight: "33px"}}>If you want to see more information about what I do, click <Dialog.Root>
                    <Dialog.Trigger><Button variant="soft">here</Button></Dialog.Trigger>
                    <Dialog.Content style={{maxWidth: "600px"}}>
                      <Dialog.Title size="8">Coding Resume</Dialog.Title>
                      <Box style={{marginTop: "30px"}}>
                        <Text size='5' weight="bold">Machines Used</Text>
                        <br></br>
                        <Text size="3" style={{display: "inline-block", marginTop: "5px"}}>Physical Server: <a href="https://www.amazon.com/dp/B0CH81C4K3?psc=1&ref=ppx_yo2ov_dt_b_product_details" style={{textDecoration: "none", color: "skyblue"}} target="_blank">GMKtec Mini PC N100</a>, DigitalOcean virtual machines: NYC, TOR</Text>
                      </Box>
                      <Box style={{marginTop: "20px"}}>
                        <Text size='5' weight="bold">Operating Systems</Text>
                        <br></br>
                        <Text size="3" style={{display: "inline-block", marginTop: "5px"}}>Windows 11, Ubuntu 22.04</Text>
                      </Box>
                      <Box style={{marginTop: "20px"}}>
                        <Text size='5' weight="bold">Server Proxies</Text>
                        <br></br>
                        <Text size="3" style={{display: "inline-block", marginTop: "5px"}}>Nginx</Text>
                      </Box>
                      <Box style={{marginTop: "20px"}}>
                        <Text size='5' weight="bold">Databases</Text>
                        <br></br>
                        <Text size="3" style={{display: "inline-block", marginTop: "5px"}}>MongoDB, Firebase, MySQL, Supabase</Text>
                      </Box>
                      <Box style={{marginTop: "20px"}}>
                        <Text size='5' weight="bold">API Types</Text>
                        <br></br>
                        <Text size="3" style={{display: "inline-block", marginTop: "5px"}}>REST</Text>
                      </Box>
                      <Box style={{marginTop: "20px"}}>
                        <Text size='5' weight="bold">Languages I know</Text>
                        <br></br>
                        <Text size="3" style={{display: "inline-block", marginTop: "5px"}}>Node.js, JavaScript, Next.js, React.js, Angular.js, Vue.js, EJS, MQL, Python, C++, MySQL, PostgreSQL</Text>
                      </Box>
                      <Box style={{marginTop: "20px"}}>
                        <Text size='5' weight="bold">Backend Server Frameworks</Text>
                        <br></br>
                        <Text size="3" style={{display: "inline-block", marginTop: "5px"}}>Express.js, Next.js App Router & Pages Router, raw HTTP library, Prisma, Node.js MongoDB Driver, AWS-S3, Discord.js</Text>
                      </Box>
                      <Box style={{marginTop: "20px"}}>
                        <Text size='5' weight="bold">Frontend UI Frameworks</Text>
                        <br></br>
                        <Text size="3" style={{display: "inline-block", marginTop: "5px"}}>Bootstrap, RadixUI, tailwind, FontAwesome, Aceternity UI, Shadcn, T4 stack, Tamagui</Text>
                      </Box>
                      <Box style={{marginTop: "20px"}}>
                        <Text size='5' weight="bold">Some Concepts I Know</Text>
                        <br></br>
                        <Text size="3" style={{display: "inline-block", marginTop: "5px"}}>WebSockets, Web Push notifications, Discord API, Schemas, Transactions, Streaming Content, MIME types, CORS, Multi-threaded JS, Tensorflow (basic), Service Workers, IntersectionObservor, Real-time application, Server Proxy, Server-Side rendering, Client-side rendering, Static Site Generation, SMTP server, IMAP server, POP3 server, Email Security, Email Relay, Cloudflare Tunneling, Port Forwarding, Static /  Dynamic IP, Dynamic DNS, NMAP</Text>
                      </Box>
                      <br></br>
                      <Dialog.Close style={{marginTop: "30px"}}>
                        <Button color="red">Close</Button>
                      </Dialog.Close>
                    </Dialog.Content>
                  </Dialog.Root> for more info.</Text>
              </Flex>
              </Flex>
            </Card>
            </Flex>
            </Flex>
          </Card>
          <br></br>
          <br></br>
          <Box style={{maxWidth: "1000px"}}>
            <Card>
              <Flex gap="6">
                <Avatar
                  fallback="GD logo"
                  radius='full'
                  src="https://assets-prd.ignimgs.com/2021/12/14/geometrydash-1639510868467.jpg"
                 style={{width: "64px", height: "64px"}}
                ></Avatar>
              <Flex direction="column">
                <Text size="6" weight="bold">Developer of 6 Geometry Dash Lists</Text>
                <Text size="2" style={{marginTop: "10px"}}>My main business is making lists for a game called Geometry Dash, and putting ads on them to make money / pay for servers.</Text>
              </Flex>
              </Flex>
            </Card>
            <br></br>
            <Card>
              <Flex gap="6">
              <Avatar
                  fallback="money"
                  radius='full'
                  src="https://gallery.yopriceville.com/downloadfullsize/send/21205"
                 style={{width: "64px", height: "64px"}}
                ></Avatar>
              <Flex direction="column">
                <Text size="6" weight="bold">Making $200 a month off of all my websites combined</Text>
                <Text size="2" style={{marginTop: "10px"}}>Using Google Adsense, I was able to put ads on 5 of my websites (Listed below), and make money off them.</Text>
              </Flex>
              </Flex>
              <br></br>
              <Box>
                <Grid columns={width.width < 600 ? "1" : width.width < 1000 ? "2" : "3"} gap="6" style={{marginTop: width.width < 2000 ? "100px" : 0}}>
                  <Box>
                  <Card style={{maxWidth: "256px"}}>
                    <Flex direction="column">
                <Inset clip="padding-box" side="top">
                <img
                  src="https://songfilehub.com/favicon.ico"
                  width={256}
                ></img>
                </Inset>
                <Text size="6" weight="bold" color="cyan"><a href="https://songfilehub.com" style={{textDecoration: "none", color: "inherit"}}>Song File Hub</a></Text>
                <Text size="2" style={{marginTop: "10px"}}>A Geometry Dash website that has NONG (Not on Newgrounds) songs available for use in-game!</Text>
                </Flex>
            </Card>
            <br></br>
            <Card style={{maxWidth: "256px"}}>
                    <Flex direction="column">
                <Inset clip="padding-box" side="top">
                <img
                  src="https://insanedemonlist.com/favicon.ico"
                  width={256}
                ></img>
                </Inset>
                <Text size="6" weight="bold" color="cyan"><a href="https://insanedemonlist.com" style={{textDecoration: "none", color: "inherit"}}>GD Insane Demon List</a></Text>
                <Text size="2" style={{marginTop: "10px"}}>A Geometry Dash demonlist that has insane demon levels based on difficulty, and shows what players have completed them!</Text>
                </Flex>
            </Card>
                  </Box>
                  <Box>
                  <Card style={{maxWidth: "256px"}}>
                    <Flex direction="column">
                <Inset clip="padding-box" side="top">
                <img
                  src="https://gdlrrlist.com/favicon.ico"
                  width={256}
                ></img>
                </Inset>
                <Text size="6" weight="bold" color="cyan"><a href="https://gdlrrlist.com" style={{textDecoration: "none", color: "inherit"}}>GD LRR List</a></Text>
                <Text size="2" style={{marginTop: "10px"}}>A Geometry Dash demonlist that has the hardest levels beaten on 75FPS or below, and ranks them based on difficulty!</Text>
                </Flex>
            </Card>
            <br></br>
            <Card style={{maxWidth: "256px"}}>
                    <Flex direction="column">
                <Inset clip="padding-box" side="top">
                <img
                  src="https://mobilepointercrate.com/icon.gif"
                  width={256}
                ></img>
                </Inset>
                <Text size="6" weight="bold" color="cyan"><a href="https://mobilepointercrate.com" style={{textDecoration: "none", color: "inherit"}}>GD HRR Mobile List</a></Text>
                <Text size="2" style={{marginTop: "10px"}}>A Geometry Dash demonlist that has the hardest demons beaten on high refresh rate mobile, and ranks them based on difficulty!</Text>
                </Flex>
            </Card>
                  </Box>
                  <Box>
            <Card style={{maxWidth: "256px"}}>
                    <Flex direction="column">
                <Inset clip="padding-box" side="top">
                <img
                  src="https://gdmobilewrlist.com/favicon.ico"
                  width={256}
                ></img>
                </Inset>
                <Text size="6" weight="bold" color="cyan"><a href="https://gdmobilewrlist.com" style={{textDecoration: "none", color: "inherit"}}>GD Mobile World Records List</a></Text>
                <Text size="2" style={{marginTop: "10px"}}>A Geometry Dash demonlist that has every extreme demon in the game, and has Mobile World Records listed for them!</Text>
                </Flex>
            </Card>
            <br></br>
            <Card style={{maxWidth: "256px"}}>
                    <Flex direction="column">
                <Inset clip="padding-box" side="top">
                <img
                  src="https://gdplatformerlist.com/pl_icon.png"
                  width={256}
                ></img>
                </Inset>
                <Text size="6" weight="bold" color="cyan"><a href="https://gdplatformerlist.com" style={{textDecoration: "none", color: "inherit"}}>GD Platformer List</a></Text>
                <Text size="2" style={{marginTop: "10px"}}>A Geometry Dash platformer list that ranks BOTH rated and unrated platformer demons by difficulty!</Text>
                </Flex>
            </Card>
                  </Box>
                </Grid>
              </Box>
            </Card>
            <br></br>
            <Card>
              <Flex gap="6">
              <Avatar
                  fallback="medium"
                  radius='full'
                  src="https://miro.medium.com/v2/resize:fit:2400/1*sHhtYhaCe2Uc3IU0IgKwIQ.png"
                 style={{width: "64px", height: "64px"}}
                ></Avatar>
              <Flex direction="column">
                <Text size="6" weight="bold">Made my own blog on <HoverCard.Root>
                  <HoverCard.Trigger>
                    <Text color="cyan"><a href="https://medium.com/@gdhpsk" style={{textDecoration: "none", color: "inherit"}}>Medium</a></Text>
                  </HoverCard.Trigger>
                  <HoverCard.Content>
                    <Flex gap="4">
                      <Avatar
                        size="5"
                        fallback="gdhpsk"
                        radius="full"
                        src="https://miro.medium.com/v2/resize:fit:2400/1*sHhtYhaCe2Uc3IU0IgKwIQ.png"
                      ></Avatar>
                      <Flex direction="column">
                        <Text size="4" weight="bold">Medium</Text>
                        <Text size="2" style={{marginTop: "5px"}}>A blog posting site that I used to put my articles</Text>
                      </Flex>
                    </Flex>
                  </HoverCard.Content>
                </HoverCard.Root></Text>
                <Text size="2" style={{marginTop: "10px"}}>I&apos;ve made a blog on medium so that I can keep track of everything I&apos;ve done so far as a programmer. Here are their links:
                <ul style={{marginLeft: "-25px"}}>
                  <li><Text size="2" color="cyan" style={{display: "inline-block"}}><a href="https://medium.com/@gdhpsk/how-i-made-my-own-locally-hosted-mongodb-instance-using-ubuntu-314a0f253f99" style={{color: "inherit", textDecoration: "none"}}>Locally hosted MongoDB</a></Text></li>
                  <li><Text size="2" color="cyan"><a href="https://medium.com/@gdhpsk/how-i-made-hpskloud-my-very-own-storage-bucket-c2575b9626bb" style={{color: "inherit", textDecoration: "none"}}>Hpskloud: how I made it</a></Text></li>
                  <li><Text size="2" color="cyan"><a href="https://medium.com/@gdhpsk/how-i-made-my-own-send-and-receive-email-server-07e0b7c41189" style={{color: "inherit", textDecoration: "none"}}>How I made my own send-and-receive email server</a></Text></li>
                  <li><Text size="2" color="cyan"><a href="https://medium.com/@gdhpsk/how-i-was-able-to-host-my-services-on-my-home-network-668dd19dbead" style={{color: "inherit", textDecoration: "none"}}>How I was able to host my services on my home network</a></Text></li>
                </ul>
                </Text>
              </Flex>
              </Flex>
            </Card>
            <br></br>
            <Card>
              <Flex gap="6">
              <Avatar
                  fallback="money"
                  radius='full'
                  src="https://imaginethatcreative.net/blog/wp-content/uploads/2023/06/2250206.png"
                 style={{width: "64px", height: "64px"}}
                ></Avatar>
              <Flex direction="column">
                <Text size="6" weight="bold">Made my own Email Server</Text>
                <Text size="2" style={{marginTop: "10px"}}>Using postfix and dovecot, I made an SMTPS and an IMAPS server on my physical server. I currently use it for my email {"=>"} gdhpsk@hpsk.me</Text>
              </Flex>
              </Flex>
            </Card>
            <br></br>
            <Card>
              <Flex gap="6">
              <Avatar
                  fallback="storage upload"
                  radius='full'
                  src="https://sirv.sirv.com/website/img/ico_1_up.svg"
                 style={{width: "64px", height: "64px"}}
                ></Avatar>
              <Flex direction="column">
                <Text size="6" weight="bold">Made my own <HoverCard.Root>
                  <HoverCard.Trigger>
                    <Text color="cyan"><a href="https://storage.hpsk.me" style={{textDecoration: "none", color: "inherit"}}>Storage Bucket</a></Text>
                  </HoverCard.Trigger>
                  <HoverCard.Content>
                    <Flex gap="4">
                      <Avatar
                        size="5"
                        fallback="gdhpsk"
                        radius="full"
                        src="https://storage.hpsk.me/favicon.ico"
                      ></Avatar>
                      <Flex direction="column">
                        <Text size="4" weight="bold">Hpskloud</Text>
                        <Text size="2" style={{marginTop: "5px"}}>Hpsk&apos;s very own personal storage bucket, very cool right?</Text>
                      </Flex>
                    </Flex>
                  </HoverCard.Content>
                </HoverCard.Root></Text>
                <Text size="2" style={{marginTop: "10px"}}>I made hpskloud using a DigitalOcean storage bucket, and custom virtual machine hosting.</Text>
              </Flex>
              </Flex>
            </Card>
            <br></br>
            <Card>
              <Flex gap="6">
              <Avatar
                  fallback="digitalocean"
                  radius='full'
                  src="/physical.png"
                 style={{width: "64px", height: "64px"}}
                ></Avatar>
              <Flex direction="column">
                <Text size="6" weight="bold">Using a Physical Linux Machine to self-host my projects</Text>
                <Text size="2" style={{marginTop: "10px"}}>Everything I use, from the CDN to my MongoDB data to my projects, are all hosted on my own physical servers, along with 2 DigitalOcean VMs for replica sets and AWS S3 for backups.</Text>
              </Flex>
              </Flex>
            </Card>
            <br></br>
            <Card>
              <Flex gap="6">
                <Avatar
                  fallback="hackathon"
                  radius='full'
                  src="data:image/png;base64,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"
                 style={{width: "64px", height: "64px"}}
                ></Avatar>
              <Flex direction="column">
                <Text size="6" weight="bold">Won a Hackathon in my Category</Text>
                <Text size="2" style={{marginTop: "10px"}}>I actually have made a website for a hackathon, and won in my category. If you are curious to see what it looks like, click <a href="https://cfc.hpsk.me" style={{textDecoration: "none", color: "lightblue"}}>here</a></Text>
              </Flex>
              </Flex>
            </Card>
              </Box>
        </Grid>
        <Grid style={{placeItems: "center"}}>
        <Card style={{maxWidth: "1150px", width: width.width <= 700 ? width.width : "auto"}}>
          {width.width <= 700 ? <Inset clip="padding-box" side="top">
              <img
                src="https://static.vecteezy.com/system/resources/previews/012/005/167/original/running-silhouettes-trail-running-marathon-runner-jogging-outdoor-sports-exercise-fitness-healthy-lifestyle-watercolor-png.png"
                width={width.width}
              ></img>
            </Inset> : ""}
            <Flex gap="8">
            {width.width > 700 ? <Inset clip="padding-box" side="top">
              <img
                src="https://static.vecteezy.com/system/resources/previews/012/005/167/original/running-silhouettes-trail-running-marathon-runner-jogging-outdoor-sports-exercise-fitness-healthy-lifestyle-watercolor-png.png"
                width={250}
              ></img>
            </Inset> : ""}
            <Flex direction="column" style={{paddingRight: "30px"}}>
              <Text size="8" weight="bold" style={{display: "inline-block", width: "100%", textAlign: "center", marginTop: "40px"}}>Things I&apos;ve done in Running</Text>
              <Text size="4" style={{display: "inline-block", width: "100%", textAlign: "center", marginTop: "15px"}}>This part of the page will display everything I&apos;ve done related to running.</Text>
            </Flex>
            </Flex>
          </Card>
          <br></br>
          <br></br>
          <Box style={{maxWidth: "1000px"}}>
            <Card>
              <Flex gap="6">
                <Avatar
                fallback={"xc image"}
                  src="https://i0.wp.com/www.designs4screen.com/wp-content/uploads/2019/08/No-Excuses-XC.png?fit=1800%2C1800&ssl=1"
                  style={{width: "64px", height: "64px"}}
                ></Avatar>
              <Flex direction="column">
                <Text size="6" weight="bold">Represented my school team in both cross country and track and field</Text>
                <Text size="2" style={{marginTop: "10px"}}>In my local school close to where I live, I was able to represent them during competitions we had against other schools</Text>
              </Flex>
              </Flex>
            </Card>
            <br></br>
            <Card>
              <Flex gap="6">
                <Avatar
                  src="https://athleticsweekly.com/wp-content/uploads/2021/08/4x400m-W-hurdles-.png"
                  style={{width: "64px", height: "64px"}}
                  fallback={"4x400m relay team"}
                ></Avatar>
              <Flex direction="column">
                <Text size="6" weight="bold">Did 4x400m and High Jump for sectionals while representing my school</Text>
                <Text size="2" style={{marginTop: "10px"}}>I was fortunate to be a part of the record breaking 4x4 team, clocking a time of 3:50. I personally ran first leg in around 56 seconds, which was the fastest split in the race</Text>
              </Flex>
              </Flex>
            </Card>
            <br></br>
            <Card>
              <Flex gap="6">
              <Avatar
                  fallback="timer"
                  radius='full'
                  src="https://cdn-icons-png.flaticon.com/512/3937/3937859.png"
                 style={{width: "64px", height: "64px"}}
                ></Avatar>
              <Flex direction="column">
                <Text size="6" weight="bold" style={{marginTop: "15px"}}>Fastest 400m time is 0:56</Text>
              </Flex>
              </Flex>
            </Card>
            <br></br>
            <Card>
              <Flex gap="6">
              <Avatar
                  fallback="timer"
                  radius='full'
                  src="https://cdn-icons-png.flaticon.com/512/3937/3937859.png"
                 style={{width: "64px", height: "64px"}}
                ></Avatar>
              <Flex direction="column">
                <Text size="6" weight="bold" style={{marginTop: "15px"}}>2:30 800m Time</Text>
              </Flex>
              </Flex>
            </Card>
            <br></br>
            <Card>
              <Flex gap="6">
                <Avatar
                  fallback="timer"
                  radius='full'
                  src="https://cdn-icons-png.flaticon.com/512/3937/3937859.png"
                 style={{width: "64px", height: "64px"}}
                ></Avatar>
              <Flex direction="column">
                <Text size="6" weight="bold" style={{marginTop: "15px"}}>13:31 2 Mile Time</Text>
              </Flex>
              </Flex>
            </Card>
              </Box>
              <br></br>
              <br></br>
                <Grid columns="1" gap="6" style={{placeItems: "center"}}>
                  <Box>
                  <img
                      src="https://www.kinetic-revolution.com/wp-content/uploads/2019/10/eliud_kipchoge_running_gif.gif"
                      style={{width: "min(100%, 350px)"}}
                    ></img>
                    <br></br>
                    <img
                      style={{marginTop: "100px", width: "min(100%, 350px)"}}
                      src="https://i.ytimg.com/vi/M9wuLja89Hg/maxresdefault.jpg"
                    ></img>
                  </Box>
                </Grid>
        </Grid>
        <Grid style={{placeItems: "center"}}>
        <Card style={{maxWidth: "1150px", width: width.width <= 700 ? width.width : "auto"}}>
          {width.width <= 700 ? <Inset clip="padding-box" side="top">
              <img
                src="/martial_arts.png"
                width={width.width}
              ></img>
            </Inset> : ""}
            <Flex gap="8">
            {width.width > 700 ? <Inset clip="padding-box" side="top">
              <img
                src="/martial_arts.png"
                width={250}
              ></img>
            </Inset> : ""}
            <Flex direction="column" style={{paddingRight: "30px"}}>
              <Text size="8" weight="bold" style={{display: "inline-block", width: "100%", textAlign: "center", marginTop: "40px"}}>Things I&apos;ve done in Martial Arts</Text>
              <Text size="4" style={{display: "inline-block", width: "100%", textAlign: "center", marginTop: "15px"}}>This part of the page will display everything I&apos;ve done related to martial arts.</Text>
            </Flex>
            </Flex>
          </Card>
          <br></br>
          <br></br>
          <Box>
            <Card>
              <Flex gap="6">
                <Avatar
                fallback={"black belt"}
                  src="https://img.freepik.com/premium-vector/karate-belt-black-color-isolated-white-background-design-icon-japanese-martial-art-flat-style-vector-illustration_186802-5137.jpg"
                  style={{width: "64px", height: "64px"}}
                ></Avatar>
              <Flex direction="column">
                <Text size="6" weight="bold">1st Degree Black Belt @ West Coast</Text>
                <Text size="2" style={{marginTop: "10px"}}>West Coast is a school managed by Ernie Reyes, a well known and professional martial artist.</Text>
              </Flex>
              </Flex>
            </Card>
            <br></br>
            <Card>
              <Flex gap="6">
                <Avatar
                  src="https://edsurge.imgix.net/uploads/post/image/14200/grading-1622052736.png?auto=compress%2Cformat&crop=true&h=486&w=1200"
                  style={{width: "64px", height: "64px"}}
                  fallback={"helping out"}
                ></Avatar>
              <Flex direction="column">
                <Text size="6" weight="bold">Helped out for multiple tests & classes</Text>
                <Text size="2" style={{marginTop: "10px"}}>Sometimes they need help during tests on Friday, so I would come over that day to help with testing.</Text>
              </Flex>
              </Flex>
            </Card>
            <br></br>
            <Card>
              <Flex gap="6">
              <Avatar
                  src="https://www.master-sh-yu.com/wp-content/uploads/2019/08/XqffXVMGSgIMpzBxinvoQ-e1575654366554.jpg"
                  style={{width: "64px", height: "64px"}}
                  fallback={"tournament"}
                ></Avatar>
              <Flex direction="column">
                <Text size="6" weight="bold" style={{marginTop: "15px"}}>Won first place in 2 tournaments for forms</Text>
                <Text size="2" style={{marginTop: "10px"}}>Sometimes I go to locally hosted tournaments and compete to see how good I am. I&apos;ve only won 1st twice, but I am still improving.</Text>
              </Flex>
              </Flex>
            </Card>
            <br></br>
            <Card>
              <Flex gap="6">
              <Avatar
                  src="https://i.insider.com/51eea9ad69bedd0b6f00000c?width=600&format=jpeg"
                  style={{width: "64px", height: "64px"}}
                  fallback={"tricks"}
                ></Avatar>
              <Flex direction="column">
                <Text size="6" weight="bold" style={{marginTop: "15px"}}>Can do an Ariel and 540 kick</Text>
                <Text size="2" style={{marginTop: "10px"}}>Look at the gifs to see examples</Text>
              </Flex>
              </Flex>
            </Card>
              </Box>
              <br></br>
              <br></br>
              <Box>
                <Grid columns="1" gap="6" style={{marginTop: width.width < 2000 ? "100px" : 0}}>
                  <Box>
                  <img
                      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dbec5ebb-6f13-47da-b1dd-fd5ec5990ed1/dcbjkq6-e303a5cd-a2d3-430e-bcee-92e693ba0d09.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RiZWM1ZWJiLTZmMTMtNDdkYS1iMWRkLWZkNWVjNTk5MGVkMVwvZGNiamtxNi1lMzAzYTVjZC1hMmQzLTQzMGUtYmNlZS05MmU2OTNiYTBkMDkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mC5zS5-kRTzxhPB043ukffSNASq4IdTC9bbeACy880Q"
                      style={{width: "min(100%, 400px)", paddingLeft:  width.width > 700 ? "25%" : "0%"}}
                    ></img>
                    <br></br>
                    <Text size="2" style={{width: "min(100%, 400px)", paddingLeft:  width.width > 700 ? "25%" : "0%", textAlign: "center", display: "inline-block"}}>Ariel</Text>
                    <br></br>
                    <img
                      style={{marginTop: "100px", width: "min(100%, 400px)", paddingLeft:  width.width > 700 ? "25%" : "0%"}}
                      src="https://media.tenor.com/QB4WVpO_4hwAAAAd/540-taekwondo.gif"
                    ></img>
                    <br></br>
                    <Text size="2" style={{width: "min(100%, 400px)", textAlign: "center", display: "inline-block", paddingLeft:  width.width > 700 ? "25%" : "0%"}}>540 Tornado Kick</Text>
                  </Box>
                </Grid>
              </Box>
        </Grid>
       </Flex>
       <br></br>
       <br></br>
      </main>
    </>
  )
}
