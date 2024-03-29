import React , {useState} from 'react'
import './SignForm.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/esm/Button'
function SignForm() {
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [FamName,setFname]=useState(''); 
    const [passwd,setPasswd]=useState('');
    const [ConfirmPassword,setConfirmPassword]=useState('');
    const [tel,setTel]=useState('');
    const [gender,setGender]=useState('Male');
  return (
    <>
        <div className='SignUp-div'>
        <form>
            <Container>
                <Row className='SignUp-row-title'>
                    <h2>Sign Up</h2>
                </Row>
                <Row>
                    <input type='text' placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                </Row>
                <Row>
                    <input type='text' placeholder='Family Name' value={FamName} onChange={(e)=>{setFname(e.target.value)}}></input>
                </Row>
                <Row className='SignUp-row-email'>
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </Row>
                <Row className='SignUp-row-password'>
                    <input type="password" placeholder="Password" value={passwd} onChange={(e)=>{setPasswd(e.target.value)}} />
                </Row>
                <Row className='SignUp-row-confirm-password'>
                    <input type="password" placeholder="Confirm Password" value={ConfirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                </Row>
                <Row>
                    <input type="tel" placeholder='Enter your phone number' value={tel} onChange={(e)=>{setTel(e.target.value)}}></input>
                </Row>
                <Row>
                    <select placeholder='Sexe' value={gender} onChange={(e)=>{setGender(e.target.value)}}>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </Row>
                <Row>
                    <Button type='submit'>Sign Up</Button>
                </Row>
            </Container>
        </form>
        </div>
    </>
  )
}

export default SignForm