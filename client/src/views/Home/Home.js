import React,{useState,useEffect} from 'react'

function Home() {
  const [currentUser, setCurentUser] = useState({})

  useEffect(()=>{
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    console.log(currentUser)
    if(currentUser){
      setCurentUser(currentUser)
    }
  }, [])
  return (
    <>
    <div>Home Component</div>
    <h2>{currentUser?.name}</h2>
    </>
  )
}

export default Home