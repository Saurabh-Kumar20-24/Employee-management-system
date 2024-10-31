import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="overflow-x-auto flex items-center justify-start gap-5 flex-nowrap h-[55%] w-full  mt-10"
    >
      {data.tasks.map((elem,idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem}/>;
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem}/>;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem}/>;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem}/>;
        }
      })}

      {/* <AcceptTask/>
    <NewTask/>
    <CompleteTask/>
    <FailedTask/> */}

      {/* {data.tasks.map((elem)=>{
        if(elem.active){
          return <AcceptTask/>
        }
        if(elem.newTask){
          return <NewTask/>
        }
        if(elem.completed){
          return <CompleteTask/>
        }
        if(elem.failed){
          return <FailedTask/>
        }
      })} */}
    </div>
  );
};

export default TaskList;