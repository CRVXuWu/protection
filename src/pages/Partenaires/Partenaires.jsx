import React , {useEffect, useState} from 'react';
import './Partenaires.css'
import NavBar2 from '../../components/NavBar2/NavBar2';
const base_url="http://localhost:8080/partenaire"

const Partenaires = () => {
  const [user,setUsers]=useState([])
  const fetchUsers = async ()=>{
    const response = await fetch(base_url+"/get-categorie?categorie=public")
    const users = await response.json()
    setUsers(users)
  }
  useEffect(()=>{
    fetchUsers()
  },[])
  return (
    
    <>
  <NavBar2 />
 
    <div className='c'>
    <h1 className='headingStyle' >
      Nos partenaires
    </h1>
    </div>
    <section class="partners">
    {
    user.map(partner=>(
      <div className='partenaire'>
        <img src={partner.logo} className='img-style'/>
        <div className='content'>
        <p>{partner.titre}</p>
        <a href={partner.url}>Visit Website</a>
        </div>
    </div>
    ))
  }

   </section>
    </>
    )
}

export default Partenaires

