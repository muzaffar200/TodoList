
import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  const [todoArr, setTodoArr] = useState([])
  const [editId, seteditId] = useState(null)


  function addTodo() {

    if (todo != "") {
      if (editId) {
        let test = todoArr.find(item => item.id == editId)
        test.contet = todo
        seteditId(null)
      }
      else {
        setTodoArr([...todoArr, { contet: todo, id: Date.now() }])
      }
    }
    setTodo("")
  }
  function del(i) {
    setTodoArr(todoArr.filter((_, index) => index != i))
  }
  function edit(i) {
    setTodo(todoArr.find(item => item.id == i).contet)
    seteditId(i)
  }
  return (
    <>
      <div className="container mx-auto my-10">
        <h1 className="text-center text-3xl font-semibold mb-4">To Do List</h1>
        <div className="md:w-1/2 mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex mb-4">
              <input value={todo} onChange={(e) => setTodo(e.target.value)}
                type="text"
                className="w-full px-4 py-2 mr-2 rounded-lg
                       border-gray-300 focus:outline-none
                        focus:border-blue-500"
                id="todo-input"
                placeholder="Add new task"
                required=""
              />

              <button onClick={addTodo}
                className="bg-blue-500 hover:bg-blue-700 
                      text-white font-bold py-2 px-4 rounded"
              >
                Add
              </button>

            </div>
            <ul id="todo-list">
              {
                todoArr.map((item, i) => {
                  return (
                    <li key={i} className='border-b border-gray-200 flex items-center justify-between py-4'>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>
                          {item.contet}
                        </span>
                      </label>
                      <div>
                        <button onClick={() => (del(i))}
                          className="text-red-500 hover:text-red-700
               mr-2 delete-btn"
                        >
                          Delete
                        </button>
                        <button onClick={() => (edit(item.id))}
                          className="text-blue-500
               hover:text-blue-700 edit-btn"
                        >
                          Edit
                        </button>
                      </div>
                    </li>

                  )
                })
              }

            </ul>
          </div>
        </div>
      </div>
      {/* <div id='popAp' className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
          <h2 className="text-xl font-semibold mb-4">Edit Your To Do</h2>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
            Submit
          </button>
        </div>
      </div> */}

    </>
  )
}

export default App
