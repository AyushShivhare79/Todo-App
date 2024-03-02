import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";

const Home = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/get")
      .then((result) => setTodo(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put("http://localhost:5000/update" + id)
      .then((result) => {
        location.reload(result);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/delete" + id)
      .then((result) => {
        location.reload(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Create />
      {todo.length === 0 ? (
        <div className="flex justify-center align-center">
          <h2>No Record</h2>
        </div>
      ) : (
        todo.map((todo) => (
          <div className="flex justify-center pt-10">
            <div className="flex justify-center items-center rounded gap-6 border-2 border-black">
              <div className="flex justify-center gap-6 ">
                {todo.done ? (
                  <button className="border-2 rounded border-black w-20 bg-green-500 text-white">
                    Checked
                  </button>
                ) : (
                  <button
                    className="border-2 rounded border-black w-20"
                    onClick={() => {
                      handleEdit(todo._id);
                    }}
                  >
                    Uncheck
                  </button>
                )}
                <p className="border-2 border-red-500 w-52 flex items-center justify-center rounded">
                  {todo.task}
                </p>
              </div>
              <div className="flex gap-5">
                <button
                  className="border-2 border-black bg-red-500 text-white rounded w-16"
                  onClick={() => handleDelete(todo._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Home;
