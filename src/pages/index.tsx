import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Grid, Box, Button, Text, HoverCard, Flex, Avatar, Card, Inset, Dialog} from "@radix-ui/themes"
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })


let sentences = [
  'I am a 14 year old programmer, runner, and martial artist. Let me show you some things around!',
  `let str = "." + specifiedPath.name.split(".").at(-1)?.toLowerCase() || "bin"nnn
  let c_size = 1000000nnn
  let start = iOS() ? 0 : parseInt(req.headers.range?.split("=")?.[1] || "0")nnn
  let end = stat.sizennn
  if(req.headers.range && !iOS()) {nnn
      end = c_size + start > stat.size ? stat.size : c_size + startnnn
      res.setHeader("Content-Range", "bytes \${start}-\${end-1}/\${stat.size}")nnn
  } else {nnn
      res.setHeader("Content-Disposition", "\${req.query.download ? "attachment" : "inline"}; filename="\${req.query.name ? req.query.name + "." + specifiedPath.name.split(".").at(-1) : specifiedPath.name}"")nnn
  }nnn
  res.writeHead(req.headers.range && !iOS() ? 206 : 200, {nnn
      'content-length': end - start,nnn
      'accept-ranges': 'bytes',nnn
      'content-type': (types as any)[str] || "application/octet-stream"nnn
  })nnn
  createReadStream(bucket as string + specifiedPath.path, {highWaterMark: c_size, start, end}).pipe(res)nnn`
];

export default function Home() {
  let used = false;
  let [height, setHeight] = useState({total: 0, scroll: 0})
  let [intersected, setIntersected] = useState([false, false, false])
  let [information, setInformation] = useState('')
  let [codeSample, setCodeSample] = useState<any[]>([])
  let [width, setWidth] = useState({
    width: 0
  })
  const getWidth = () => typeof document !== "undefined" ? document.body.clientWidth : 0
  const getScrollHeight = () =>  typeof document !== "undefined" ?  document?.documentElement.scrollTop : 0;
  useEffect(() => {
    setHeight({total: document.documentElement.scrollHeight - document.documentElement.clientHeight, scroll: getScrollHeight()})
  }, [getScrollHeight()])
  useEffect(() => {
    if(used) return;
    used = true
    let intersect = [false, false, false]
   for(let i = 0; i < document.getElementsByClassName("intersection").length; i++) {
    let observer = new IntersectionObserver(entry => {
        intersect[i] = entry[0].isIntersecting
        setIntersected(intersect)
    })
    let item =  document.getElementsByClassName("intersection")[i]
    observer.observe(item)
   }
  })
  useEffect(() => {
    setWidth({width: getWidth()})
  }, [getWidth()])
  useEffect(() => {
    let sent = sentences[1].split("nnn");
    (async () => {
      for(const index in sent) {
          for(let i = 0; i < sent[index].length; i++) {
            setCodeSample([...sent.slice(0, parseInt(index)), sent[index].slice(0, i+1)])
            await new Promise((resolve, reject) => {
              setTimeout(resolve, 0)
            })
          }
      }
    })()
  }, [])
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
              <Box width="2" style={{top: "5%", position: "fixed", height: "90%", backgroundColor:"white"}}></Box>
              <Box width="2" style={{top: "5%", position: "fixed", height: `calc((${height.scroll} / ${height.total}) * 90%)`, backgroundColor: "skyblue"}}></Box>
              <Button radius="full" style={{backgroundColor: height.scroll == height.total ? "skyblue" : "white", color: "black", bottom: "5%", position: "fixed", left: "19.5px"}}>E</Button>
            </Box>
            <Box>
              <Text size="8" weight="bold" style={{display: "inline-block", marginTop: "40vh", width: "100%", textAlign: "center"}}>Hello there! My name is{' '}
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
          <Box style={{marginTop: width.width < 2000 ? "100px" : 0}}>
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
                </Box>
              </Grid>
              <br></br>
              <Text size="1" style={{lineHeight: "15px", display: "inline-block"}}>If you want me to make a site for you, hit me up on discord! Username is gdhpsk</Text>
            </Card>
            {width.width >= 2000 ? <>
            <br></br>
            <br></br>
            <Card style={{maxWidth: "600px", position: "absolute"}}>
              <Text size="6" weight="bold">JavaScript</Text>
              <br></br>
              <Text size="3" style={{display: "inline-block", width: "100%"}} >{codeSample.map(e => <><br></br>{e}</>)}<div style={{height: "20px", width: "2px", backgroundColor: "darkgray", display: sentences[1].split("nnn")[15] == codeSample[15] ? "none" : "inline-block"}}></div></Text>
              <br></br>
              <Text size="1" style={{width: "100%", textAlign: "center", display: "inline-block"}}>Streaming Video</Text>
            </Card></> : ""}
          </Box>
        </Grid>
        <Box className="intersection">
        <Grid style={{marginTop: "70vh", placeItems: "center", opacity: intersected[0] ? "initial" : 0}} className={intersected[0] ? "show" : ""}>
          <Card style={{maxWidth: "1150px", width: width.width <= 700 ? width.width : "auto", height: width.width <= 700 ? "auto" : "200px"}}>
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
              ></img>
            </Inset> : ""}
            <Flex direction="column" style={{paddingRight: "30px"}}>
              <Text size="8" weight="bold" style={{display: "inline-block", width: "100%", textAlign: "center", marginTop: "40px"}}>Things I&apos;ve done as a Programmer</Text>
              <Text size="4" style={{display: "inline-block", width: "100%", textAlign: "center", marginTop: "15px"}}>This part of the page will display everything I&apos;ve done related to programming.</Text>
            </Flex>
            </Flex>
          </Card>
          <br></br>
          <br></br>
          <Card style={{maxWidth: "1150px", width: width.width <= 700 ? width.width : "auto"}}>
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
                        <Text size="3" style={{display: "inline-block", marginTop: "5px"}}>DigitalOcean virtual machines: SFO, NYC, TOR</Text>
                      </Box>
                      <Box style={{marginTop: "20px"}}>
                        <Text size='5' weight="bold">Operating Systems</Text>
                        <br></br>
                        <Text size="3" style={{display: "inline-block", marginTop: "5px"}}>Windows, Linux</Text>
                      </Box>
                      <Box style={{marginTop: "20px"}}>
                        <Text size='5' weight="bold">Server Proxies</Text>
                        <br></br>
                        <Text size="3" style={{display: "inline-block", marginTop: "5px"}}>Nginx</Text>
                      </Box>
                      <Box style={{marginTop: "20px"}}>
                        <Text size='5' weight="bold">Databases</Text>
                        <br></br>
                        <Text size="3" style={{display: "inline-block", marginTop: "5px"}}>MongoDB, Firebase</Text>
                      </Box>
                      <Box style={{marginTop: "20px"}}>
                        <Text size='5' weight="bold">API Types</Text>
                        <br></br>
                        <Text size="3" style={{display: "inline-block", marginTop: "5px"}}>REST</Text>
                      </Box>
                      <Box style={{marginTop: "20px"}}>
                        <Text size='5' weight="bold">Languages I know</Text>
                        <br></br>
                        <Text size="3" style={{display: "inline-block", marginTop: "5px"}}>Node.js, JavaScript, Next.js, Angular.js, EJS, MQL, Python, C++</Text>
                      </Box>
                      <Box style={{marginTop: "20px"}}>
                        <Text size='5' weight="bold">Backend Server Frameworks</Text>
                        <br></br>
                        <Text size="3" style={{display: "inline-block", marginTop: "5px"}}>Express.js, Next.js Serverless Functions, raw HTTP library</Text>
                      </Box>
                      <Box style={{marginTop: "20px"}}>
                        <Text size='5' weight="bold">Frontend UI Frameworks</Text>
                        <br></br>
                        <Text size="3" style={{display: "inline-block", marginTop: "5px"}}>Bootstrap, RadixUI</Text>
                      </Box>
                      <Box style={{marginTop: "20px"}}>
                        <Text size='5' weight="bold">Some Concepts I Know</Text>
                        <br></br>
                        <Text size="3" style={{display: "inline-block", marginTop: "5px"}}>WebSockets, Web Push notifications, Discord API, Schemas, Transactions, Streaming Content, MIME types, CORS, Multi-threaded JS, Tensorflow (basic), Service Workers, IntersectionObservor, Real-time application, Server Proxy, Server-Side rendering, Client-side rendering, Static Site Generation</Text>
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
        </Grid>
        <Box style={{marginTop: "90px"}}></Box>
        <Grid columns={width.width < 2000 ? "1" : "2"} style={{placeItems: "center", opacity: intersected[0] ? "initial" : 0}} className={intersected[0] ? "show" : ""}>
          <Box>
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
                    <Text color="cyan"><a href="https://storage.hpsk.me" style={{textDecoration: "none"}}>Storage Bucket</a></Text>
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
                  fallback="next.js"
                  radius='full'
                  src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
                 style={{width: "64px", height: "64px"}}
                ></Avatar>
              <Flex direction="column">
                <Text size="6" weight="bold">Made using frameworks like Node.js, Next.js, and Angular.js</Text>
                <Text size="2" style={{marginTop: "10px"}}>These frameworks all revolve around JavaScript, however all these frameworks behave very differently from each other.</Text>
              </Flex>
              </Flex>
            </Card>
            <br></br>
            <Card>
              <Flex gap="6">
              <Avatar
                  fallback="digitalocean"
                  radius='full'
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/1200px-DigitalOcean_logo.svg.png"
                 style={{width: "64px", height: "64px"}}
                ></Avatar>
              <Flex direction="column">
                <Text size="6" weight="bold">Using a Linux Virtual Machine to self-host my projects</Text>
                <Text size="2" style={{marginTop: "10px"}}>Everything I use, from the CDN to my MongoDB data to my projects, are all hosted on 3 DigitalOcean virtual machines.</Text>
              </Flex>
              </Flex>
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
                    <Text color="cyan"><a href="https://medium.com/@gdhpsk" style={{textDecoration: "none"}}>Medium</a></Text>
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
                <Text size="2" style={{marginTop: "10px"}}>I&apos;ve made a blog on medium so that I can keep track of everything I&apos;ve done so far as a programmer. Here is a link to 2 of them:<br></br>
                <Text size="2" color="cyan" style={{marginTop: "10px", display: "inline-block"}}><a href="https://medium.com/@gdhpsk/how-i-made-my-own-locally-hosted-mongodb-instance-using-ubuntu-314a0f253f99" style={{color: "inherit", textDecoration: "none"}}>Locally hosted MongoDB</a></Text>
                <br></br>
                <Text size="2" color="cyan"><a href="https://medium.com/@gdhpsk/how-i-made-hpskloud-my-very-own-storage-bucket-c2575b9626bb" style={{color: "inherit", textDecoration: "none"}}>Hpskloud: how I made it</a></Text>
                </Text>
              </Flex>
              </Flex>
            </Card>
            <br></br>
            <Card>
              <Flex gap="6">
                <Avatar
                  fallback="GD logo"
                  radius='full'
                  src="https://assets-prd.ignimgs.com/2021/12/14/geometrydash-1639510868467.jpg"
                 style={{width: "64px", height: "64px"}}
                ></Avatar>
              <Flex direction="column">
                <Text size="6" weight="bold">Developer of 5 Geometry Dash Lists</Text>
                <Text size="2" style={{marginTop: "10px"}}>My main business is making lists for a game called Geometry Dash, and putting ads on them to make money / pay for servers.</Text>
              </Flex>
              </Flex>
            </Card>
              </Box>
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
                <Text size="6" weight="bold"><a href="https://songfilehub.com" style={{textDecoration: "none"}}>Song File Hub</a></Text>
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
                <Text size="6" weight="bold"><a href="https://insanedemonlist.com" style={{textDecoration: "none"}}>GD Insane Demon List</a></Text>
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
                <Text size="6" weight="bold"><a href="https://gdlrrlist.com" style={{textDecoration: "none"}}>GD LRR List</a></Text>
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
                <Text size="6" weight="bold"><a href="https://mobilepointercrate.com" style={{textDecoration: "none"}}>GD HRR Mobile List</a></Text>
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
                <Text size="6" weight="bold"><a href="https://gdmobilewrlist.com" style={{textDecoration: "none"}}>GD Mobile World Records List</a></Text>
                <Text size="2" style={{marginTop: "10px"}}>A Geometry Dash demonlist that has every extreme demon in the game, and has Mobile World Records listed for them!</Text>
                </Flex>
            </Card>
                  </Box>
                </Grid>
              </Box>
        </Grid>
        </Box>
        <Box className="intersection">
        <Grid style={{marginTop: "200px", placeItems: "center", opacity: intersected[1] ? "initial" : 0}} className={intersected[1] ? "show" : ""}>
          <Card style={{maxWidth: "1150px", width: width.width <= 700 ? width.width : "auto", height: width.width <= 700 ? "auto" : "200px"}}>
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
        </Grid>
        <Box style={{marginTop: "150px"}}></Box>
        <Grid columns={width.width < 2000 ? "1" : "2"} style={{placeItems: "center", opacity: intersected[1] ? "initial" : 0}} className={intersected[1] ? "show" : ""}>
          <Box>
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
                <Text size="6" weight="bold">Main event  in track was the 4x400, however I may do more events</Text>
                <Text size="2" style={{marginTop: "10px"}}>I was part of the 4x400m relay team during track, however since it is very competitive, I may try out more events.</Text>
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
                <Text size="6" weight="bold" style={{marginTop: "15px"}}>Fastest open 400m time is 1:01</Text>
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
                <Text size="6" weight="bold" style={{marginTop: "15px"}}>6:02 Mile Time</Text>
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
              <Box>
                <Grid columns="1" gap="6" style={{marginTop: width.width < 2000 ? "100px" : 0}}>
                  <Box>
                  <img
                      src="https://www.kinetic-revolution.com/wp-content/uploads/2019/10/eliud_kipchoge_running_gif.gif"
                      style={{width: "min(100%, 400px)", paddingLeft:  width.width > 700 ? "25%" : "0%"}}
                    ></img>
                    <br></br>
                    <img
                      style={{marginTop: "100px", width: "min(100%, 400px)", paddingLeft:  width.width > 700 ? "25%" : "0%"}}
                      src="https://i.ytimg.com/vi/M9wuLja89Hg/maxresdefault.jpg"
                    ></img>
                  </Box>
                </Grid>
              </Box>
        </Grid>
        </Box>
        <Box className="intersection">
        <Grid style={{marginTop: "410px", placeItems: "center", opacity: intersected[2] ? "initial" : 0}} className={intersected[2] ? "show" : ""}>
          <Card style={{maxWidth: "1150px", width: width.width <= 700 ? width.width : "auto", height: width.width <= 700 ? "auto" : "200px"}}>
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
        </Grid>
        <Box style={{marginTop: "150px"}}></Box>
        <Grid columns={width.width < 2000 ? "1" : "2"} style={{placeItems: "center", opacity: intersected[2] ? "initial" : 0}} className={intersected[2] ? "show" : ""}>
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
        </Box>
      </main>
    </>
  )
}
