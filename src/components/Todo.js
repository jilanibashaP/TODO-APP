import React, { useState } from "react";
import Delete from "./Delete";
import Edit from "./Edit";
import Input from "./Input";
import "./../styles/Todo.css";

function Todo() {

  const [value, setValue] = useState([]);

  const [todo, setTodo] = useState("");

  const [edit, setEdit] = useState(null);

  const [text, setText] = useState("");

  // adding the input

  const change = (e) => {

    setTodo(e.target.value);

  };

  let s = 0;

  const click = (e) => {

    s++;

    e.preventDefault();
    let newTodo = {
      id: new Date().getTime(),
      text: todo,
      isCompleted: false,
    };
    setValue([...value].concat(newTodo));
    setTodo("");
  };

  const editTodo = (id) => { };

  const removeElement = (id) => {
    console.log(id)
    let updatedTodo = [...value].filter((item) => item.id !== id);
    setValue(updatedTodo);
  };

  function updateItem(id) {
    const updatedTodos = [...value].map((todo) => {
      if (todo.id === id) {
        todo.text = text;
      }
      return todo;
    });
    setValue(updatedTodos);
    setEdit(null);
    setText("");
  }

  // function completed(id) {
  //   let updatedTodos = [...value].map((todo) => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed;
  //     }
  //     return todo;
  //   });
  //   setValue(updatedTodos);
  // }


  return (
    <div>
      <table>
        <tbody>
          <Input change={change} click={click} v={todo} />
          {value.map((item) => {
            return (
              <div id="item" key={item.id}>
                <tr>
                  {item.id === edit ? (
                    <div>
                      <td id="col-1st-1">
                        <input
                          type="text"
                          placeholder="Edit here"
                          onChange={(e) => setText(e.target.value)}
                          value={text}
                          required
                        />
                      </td>
                      <td>
                        <button id="ok" onClick={() => updateItem(item.id)}>
                          ok
                        </button>
                      </td>
                    </div>
                  ) : (
                    <div id="appear">
                      <td id="col-1st-2">
                        <h2>{item.text}</h2>
                      </td>
                      <td>
                        <Edit edit={() => setEdit(item.id)} />
                      </td>
                      <td>
                        <Delete remove={() => removeElement(item.id)} />
                      </td>
                    </div>
                  )}
                </tr>
              </div>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Todo;
