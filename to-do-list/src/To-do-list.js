import React, { useState } from 'react'
import './App.css';
const TodoList = () => {
const [activity,setActivity] = useState(''); 
const [listData,setListData] = useState([]);
const AddActivity = () => {
    setListData((listData)=> {
         const updatedlist = [...listData,activity]; 
         console.log(updatedlist)
         setActivity('')
         return  updatedlist;
    })
     
}
 

  return (
    <>
    <div className='container-list'>
   
     <div className='Header'> 
        <h1 >--To Do List--</h1> 
        </div>
          
 <input type='text' placeholder='Enter your activity' value={activity} onChange={(e)=> {
      setActivity(e.target.value)
    
 }}/>
   <div className='btn'>
   <button onClick={AddActivity}>Add</button>
   <h1 className='list'>Here is Your List : {')'}</h1>
   </div>
    {listData!=[] && listData.map((data,i) => {

     const removeActivity = (i) => {
        const updatedlistdata = listData.filter((element,id) => {
             return i!= id;     
            
                 
             
        })
        setListData(updatedlistdata); 
    }
     
    
         
          
         
         return (
             <>
             <p key={i} className='data'>{data}</p>
             <div className='btn2'>
             <button onClick={()=> removeActivity(i)}>Remove(-)</button>
             </div>
             </>
         )
    }) }
     
          
 </div>

     
    </>
  )     
}

export default TodoList



