import React, { useContext } from 'react'
import { AuthContext } from './Contexts/AuthContext'
import { Button, ButtonGroup, Flex, Heading, Input, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import './Loging.module.css'

const Loging = () => {

    const { toggleColorMode } = useColorMode();
    const {formBackground}=useColorModeValue("gray.100","gray.700");
    const [User, setUser] = React.useState("");
    const [Pass, setPass] = React.useState("")

    React.useEffect(() => {



    }, [])

    const {isAuthorized, Login, LogOut,Msg} = useContext(AuthContext)


        
        // LogOut()

    return isAuthorized ? <div>
        <aside className="profile-card">

<header>

  {/* <!-- here’s the avatar --> */}
  <a href="https://tutsplus.com">
    <img src="https://randomuser.me/api/portraits/men/99.jpg"/>
  </a>

  {/* <!-- the username --> */}
  <h1>George Darkos</h1>

  {/* <!-- and role or location --> */}
  <h2>- Full Stack Web Developer -</h2>

</header>

{/* <!-- bit of a bio; who are you? --> */}
<div className="profile-bio">

  <p>Hello there!</p>
  <p>I am a full stack web developer. I mainly work with PHP, HTML, CSS, JS and WordPress.
    <br />I also play well with Photoshop, Corel Draw, After Effects and other cool stuff.</p>

</div>
<br />
<br />
<button onClick={()=>LogOut()} style={{color: "white", backgroundColor: "teal", padding: "12px", borderRadius: "10px" }}>Logout</button>

{/* <!-- some social links to show off --> */}
<ul className="profile-social-links">

  {/* <!-- twitter - el clásico  --> */}
  <li>
    <a href="https://twitter.com/tutsplus">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg"/>
    </a>
  </li>

  {/* <!-- envato – use this one to link to your marketplace profile --> */}
  <li>
    <a href="https://envato.com">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg"/>
    </a>
  </li>

  {/* <!-- codepen - your codepen profile--> */}
  <li>
    <a href="https://codepen.io/tutsplus">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg"/>
    </a>
  </li>
  <li>
      
  </li>

  {/* <!-- add or remove social profiles as you see fit --> */}

</ul>

</aside>
    </div> 
    : (
        // <div>
        //     <h1>Login / LogOut</h1>
        //     {
        //         isAuthorized ?"you are Logged in ": "you are logged out"
        //     }
        //     <div>Login  :</div>
        //     <h3>{Msg}</h3>
        // </div>
        
        
        
        
        <Flex height="100vh" alignItems="center" justifyContent="center" >
            <Flex direction="column" background={formBackground} p={12} rounded={6} >
                <Heading mb={6}>LogIn</Heading>
                <Input value={User} onChange={(e)=> {
                    setUser(e.target.value)
                }} placeholder='Enter username' variant="filled" mb={3} type="email" />
                <Input onChange={(e)=> {
                    setPass(e.target.value)
                }} value={Pass}  placeholder='password' variant="filled" mb={6} type="password" />
                <Button onClick={()=> {
                    setPass("")
                    setUser("")
                    Login(User,Pass)
                }} mb={6}  colorScheme="teal" >Log In</Button>
                <Text style={ (isAuthorized) ? {color: "green"} : {color: "red"} }> {isAuthorized ? Msg : "Login needed"} </Text>
                
                <Button width="30%" colorScheme='teal' margin="10% auto" variant='outline' size="xs" onClick={(e)=> {
                        toggleColorMode()
                        
                } }> Mode </Button>


            </Flex>
        </Flex>
    )
}

export default Loging