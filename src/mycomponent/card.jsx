import {useState} from 'react'
import styles from './card.module.css'
const Card = ({item , id , setData , data})=>{
    console.log(item);
    console.log(id)
    
const [hour,setHour]=useState(Number(item.hour));
const addOne = () =>{
    setHour(hour+1);
}
const onminus =()=>{
    if(hour>0){
        setHour(hour-1);
    }
}
   
 const deletetask=(idx)=>{
    
    const newItems = data.filter((_,index)=>index!==idx);
    setData(newItems)
 }




    return (
        <div className={styles.cardDiv}>
             <button className={styles.delete} onClick={()=>{
            deletetask(id)
           }}>x</button>
           <p className={styles.subject}>{item.sub}</p> 
            <p className={styles.time}>Hours: {hour}  <span className={styles.add} onClick={addOne}>+</span>  <span className={styles.minus} onClick={onminus}>-</span></p>
          
        </div>
    )
}
export default Card