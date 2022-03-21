import React, { useState } from "react";
import "./index.module.css";
import TodoItem from "./compenents/TodoItem";
import NewToDo from "./compenents/NewToDo";

let storage = [
  {
    description: "learn html",
    deadline: new Date(2022, 2, 21),
  },
  {
    description: "learn css",
    deadline: new Date(2022, 2, 14),
  },
];

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || storage
  );

  const addToDo = (toDo) => {
    setItems((prevState) => {
      const newElement = [...prevState, toDo];
      localStorage.setItem("items", JSON.stringify(newElement));
      return newElement;
    });
  };

  const deleteTodo = (itemIndex) => {
    setItems((prevState) => {
      const newArray = prevState.filter((item, index) => {
        return index !== itemIndex;
      });
      localStorage.setItem("items", JSON.stringify(newArray));
      return newArray;
    });
  };

  const submitNewItem = (newToDo) => {
    addToDo({
      description: newToDo,
      deadline: new Date(),
    });
  };
  const submitDeleteItem = (index) => {
    deleteTodo(index);
  };
  const updateItem = (index, newDescription) => {
    setItems((prevState) => {
      const newItems = [...prevState];
      newItems[index].description = newDescription;
      localStorage.setItem("items", JSON.stringify(newItems));
      return newItems;
    });
  };

  return (
    <div>
      <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
        <div className="row m-1 p-4">
          <div className="col">
            <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
              <i className="fa fa-check bg-primary text-white rounded p-2"></i>
              <u>My To do List</u>
            </div>
          </div>
        </div>

        <NewToDo Add={submitNewItem} />
        <div className="p-2 mx-4 border-black-25 border-bottom"></div>

        <div className="row m-1 p-3 px-5 justify-content-end">
          {/* <div className="col-auto d-flex align-items-center">
            <label className="text-secondary my-2 pr-2 view-opt-label">
              Filter
            </label>
            <select
              defaultValue={"all"}
              className="custom-select custom-select-sm btn my-2"
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="active">Active</option>
              <option value="has-due-date">Has due date</option>
            </select>
          </div>
          <div className="col-auto d-flex align-items-center px-1 pr-3">
            <label className="text-secondary my-2 pr-2 view-opt-label">
              Sort
            </label>
            <select
              defaultValue="added-date-asc"
              className="custom-select custom-select-sm btn my-2"
            >
              <option value="added-date-asc">Added date</option>
              <option value="due-date-desc">Due date</option>
            </select>
            <i
              className="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Ascending"
            ></i>
            <i
              className="fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1 d-none"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Descending"
            ></i>
          </div> */}
        </div>

        {items.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            submitDeleteItem={submitDeleteItem}
            updateItem={updateItem}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
