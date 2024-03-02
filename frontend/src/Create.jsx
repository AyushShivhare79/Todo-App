import { useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState();

  const handleAdd = () => {
    axios
      .post("http://localhost:5000/add", { task: task })
      .then((result) => {
        location.reload(result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="flex flex-col items-center ">
        <h1 className=" pb-28 text-6xl cursor-pointer">TodoApp</h1>
        <div className="flex gap-4">
          <input
            type="text"
            className=" border-black border-2"
            placeholder="Task"
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className=" rounded border-2 border-black bg-blue-500 text-white w-20"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Create;
