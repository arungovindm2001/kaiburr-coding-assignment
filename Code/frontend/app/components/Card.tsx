"use client";

import React from "react";
import Task from "@/types/task";
import { Trash2 } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface CardProps {
  tasks: Task[];
}

const Card: React.FC<CardProps> = ({ tasks }) => {
  const router = useRouter();

  function deleteTask(task_id: string) {
    try {
      console.log("http://localhost:8080/task/id=" + task_id);
      axios
        .delete("http://localhost:8080/task/id=" + task_id)
        .then(function (response) {
          if (response.status === 200) {
            alert("Task " + task_id + " is deleted successfully");
            router.refresh();
          } else {
            alert("Error deleting task " + task_id);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {tasks.map((task) => (
        <div key={task.id} className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              {task.id}: {task.name}
              <div className="badge badge-secondary">{task.project}</div>
            </h2>
            <h3>
              Assignee: <span className="font-medium">{task.assignee}</span>
            </h3>
            <p>{task.arunGovindProperty}</p>
            <div className="flex flex-row text-sm text-end">
              <button
                onClick={() => deleteTask(task.id)}
                className="btn btn-sm btn-error"
              >
                <Trash2 />
              </button>
              <p>{task.startTime}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
