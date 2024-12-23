import styles from './componant.module.css'
import Card from './card'
import { useEffect, useState,useRef } from 'react';
const MainPage = ()=>{
    
    const [data , setData] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
    const taskInputRef = useRef();
    const timeInputRef = useRef();
  
   
    const onSubmit =()=>{
        const  task=taskInputRef.current.value;
        const time = timeInputRef.current.value;

        let taskobj = {
            sub :task,
            hour :time
        }
        setData([...data , taskobj])

        taskInputRef.current.value = '';
        timeInputRef.current.value = '';

    }

    useEffect(() => {
        localStorage.setItem("tasks" ,JSON.stringify(data))
    },[data])

  



 
 

    return (
        <div className={styles.MainPage}>
            <h1>TODO LIST</h1>
           <div className={styles.tasks}>
           <input type="text" placeholder="Enter your task" ref={taskInputRef} />
                <input type="number" name="number" min='0' max='24' ref={timeInputRef} />
                <input type="submit" onClick={onSubmit} />
           </div>
           <div className={styles.taskContainer}>
            { 
            data?.map((item,idx)=>{
                    return (<Card key={idx} item={item} id = {idx} setData={setData} data={data}/>)
                })
            }
           </div>
        </div>
    )
}
export default MainPage