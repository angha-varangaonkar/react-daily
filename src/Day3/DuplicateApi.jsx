import { data } from 'autoprefixer'
import { useEffect,useState } from 'react'


function DuplicateApi() {

    
    const [count,setCount] = useState(0)
    const [img,setImg] = useState("")
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [rating,setRating] = useState("")

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${count}`).then((res)=>{
            return res.json()
        }).then((data)=>{
            setImg(data.images)
            setTitle(data.title)
            setPrice(data.price)
            setRating(data.rating)
            })
    },[count])


    function handleInc(){
        setCount(count+1)
    }






  return (
    <div>
        <h1>My Data :</h1>
        <h1>{count}</h1>
    
        <button onClick={handleInc}> increment </button>


    <img src={img} alt="" className='w-24 h-40' />
    <h1>Title :{title}</h1>
    <h2>Price :{price}</h2>
    <h3>Rating :{rating}</h3>




    </div>
  )
}

export default DuplicateApi