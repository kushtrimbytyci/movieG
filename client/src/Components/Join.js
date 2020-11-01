import React,{useState,useContext,memo} from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import authContext from '../Context/Auth/authContext'


const App = (props) => {
  const [name,setName] = useState('')
  const [password,setPassword]=useState('')
  const authCon = useContext(authContext)
  return (
    <div className = 'container my-5' style={{minHeight:'calc(100vh - 200px', backgroundColor: 'rgb(24, 24, 26)'}}>
    <div className="row justify-content-center">
      <div className="col-4 d-flex flex-column align-items-center">
      <h1 className=' text-white text-monospace mb-4'>Join</h1>
      <hr style={{width:'100%',backgroundColor:"white",height:'0.01rem'}}/>
      <InputGroup className="mb-3">
    <FormControl
      placeholder="Username"
      aria-label="name"
      aria-describedby="basic-addon1"
      onChange={(e)=>setName(e.target.value)}
    />
  </InputGroup>
  <InputGroup className="mb-3" >
    <FormControl
    type='password'
      placeholder="Password"
      aria-label="Password"
      aria-describedby="basic-addon1"
      onChange={(e)=>setPassword(e.target.value)}
      onKeyDown={(e)=>{
        if(e.key==='Enter' && name!=='' && password!=='')
        {
          axios.post('/apii',{name,password}).then((e)=>{
    authCon.logmein()
    props.history.push(`/chat/${name}`)
  }).catch((e)=>{
//ignore for now
  })
        }
      }}
    />
  </InputGroup>
  <Button onClick={(event)=>(!name || !password)?event.preventDefault():axios.post('/apii',{name,password}).then((e)=>{
    authCon.logmein()
    props.history.push(`/chat/${name}`)
  }).catch((e)=>{

  })}  className='btn btn-block btn-primary'>Join chat!</Button>
      </div>
    </div>
    </div>
  )
}

export default memo(App)
