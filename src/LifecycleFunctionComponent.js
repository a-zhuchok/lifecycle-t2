import {useState, useEffect} from 'react';
import LifecycleComponent from './LifecycleComponent';
const LifecycleFunctionComponent = ()=>{
  const [count, setCount] = useState(0);

  useEffect(() => {
      if(count%2===0) {console.log(`componentDidUpdate ${count}`)};
    }, [count]);

  useEffect(() => {
      const fetchData = async () => {
      let response = await fetch ('https://todo-redev.herokuapp.com/api-docs/')
      if(response.ok===true) {console.log('componentDidMount')} }
      fetchData()
      return ()=>console.log('componentWillUnmount')
    }, [])
    

  return (
      <div>
      {count===0 && <LifecycleComponent></LifecycleComponent>}
      <p>Счетчик: {count}</p>
      <button onClick={()=>setCount(count+1)}>Увеличить</button>
      </div>
  )
}
export default LifecycleFunctionComponent