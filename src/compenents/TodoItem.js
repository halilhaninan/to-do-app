import React, { useState } from "react";

const TodoItem = ({ item, submitDeleteItem, index, updateItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(item.description);
  const editItem = () => {
    if (isEditing) updateItem(index, newDescription);
    setIsEditing((prev) => !prev);
  };
  return (
    <div className="row mx-1 px-5 pb-3 w-80">
      <div className="col mx-auto">
        <div className="row px-3 align-items-center todo-item rounded">
          <div className="col-auto m-1 p-0 d-flex align-items-center">
            <h2 className="m-0 p-0">
              <i
                className="fa fa-square-o text-primary btn m-0 p-0 d-none"
                data-toggl
                e="tooltip"
                data-placement="bottom"
                title="Mark as complete"
              ></i>
              <i
                className="fa fa-check-square-o text-primary btn m-0 p-0"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Mark as todo"
              ></i>
            </h2>
          </div>
          <div className="col px-1 m-1 d-flex align-items-center">
            <input
              type="text"
              className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
              value={newDescription}
              onChange={(event) => setNewDescription(event.target.value)}
            />
            <input
              type="text"
              className="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none"
              defaultValue="Buy groceries for next week"
            />
          </div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => submitDeleteItem(index)}
          >
            Delete
          </button>

          <button className="btn btn-info ml-2" onClick={() => editItem()}>
            {isEditing ? "Save" : "Edit"}
          </button>

          <div className="col-auto m-1 p-0 px-3 d-none"></div>
          <div className="col-auto m-1 p-0 todo-actions">
            <div className="row d-flex align-items-center justify-content-end">
              <h5 className="m-0 p-0 px-2">
                <i
                  className="fa fa-pencil text-info btn m-0 p-0"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Edit todo"
                ></i>
              </h5>
              <h5 className="m-0 p-0 px-2">
                <i
                  className="fa fa-trash-o text-danger btn m-0 p-0"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Delete todo"
                ></i>
              </h5>
            </div>

            <div className="row todo-created-info">
              <div className="col-auto d-flex align-items-center pr-2">
                <i
                  className="fa fa-info-circle my-2 px-2 text-black-50 btn"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title=""
                  data-original-title="Created date"
                ></i>
                <label className="date-label my-2 text-black-50">
                  {
                    new Date(item.deadline)
                      .toLocaleString("en-US")
                      .split(",")[0]
                  }
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
