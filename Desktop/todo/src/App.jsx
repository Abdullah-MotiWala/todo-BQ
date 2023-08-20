import { useState } from "react"
import { useDispatch } from "react-redux"
import CustomButton from "../components/button"
import { getUser } from "../redux/actions"
import store from "../redux/store"

function App() {
  const [todoList, setTodoList] = useState([])
  const dispatch = useDispatch()
  const name = useSelector((state)=>state.name)

  const addHandler = () => {
    const userName = prompt("Enter your name")
    dispatch(getUser(userName))
    const userInput = prompt("Enter your todo")
    setTodoList((pre) => [userInput, ...pre])
  }
  const blurHandler = (value, index) => {
    const prevList = todoList
    prevList[index] = value

    setTodoList(prevList)
  }
  const deleteHandler = (index) => {
    const prev = [...todoList];
    prev.splice(index, 1);
    setTodoList(prev)
  }
  const state = store.getState()
  console.log(state)
  return (
    <>
      <p> {state.name} {" "}<span>FatherName</span></p>
      <CustomButton addHandler={addHandler} />
      <ul className="list-wrapper">
        {todoList.map((elem, ind) => <li
          onBlur={(e) => blurHandler(e.target.innerHTML, ind)}
          contentEditable
          className="list-item">
          {elem}
          <button contentEditable={false} onClick={() => deleteHandler(ind)}>delete</button>
        </li>)}
      </ul>
    </>
  )
}

export default App
