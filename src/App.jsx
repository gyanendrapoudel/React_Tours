import { useEffect, useState } from 'react'
import Tours from './components/Tours'
import './App.css'
import Loading from './components/Loading'

const url = "https://www.course-api.com/react-tours-project"

 
function App() {
const [tours, setTours] = useState([])
const [isLoading, setIsLoading] = useState(true)
const fetchTours = async ()=>{
  setIsLoading(true)
  try{
  const response = await  fetch(url)
  
  if(!response.ok){
     throw  new  Error("Error occurred")
  }
  const data = await response.json()
  setTours(data)
  setIsLoading(false)
}catch(error){
  console.log(error)
}
}
useEffect(()=>{
  fetchTours()
},[])

if(isLoading){
  return <Loading/>
}
  return (
    <>
     
      <div className="wrapper">
        <h4 className="title">Our Tours</h4>
        <Tours tours={tours} />
      </div>
    </>
  )
}

export default App
