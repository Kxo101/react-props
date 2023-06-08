import { useSelector, useDispatch } from 'react-redux'


const Counter = () => {
  const count = useSelector((state) => state.counter.value)
//const[count, setCount] = useState(0)
}

export const counter = () => {
  return (
    <div>
     <h1 className='text-center'>Counter: 0</h1>
     <button><div className="btn"></div></button>
    </div>
  )
}
