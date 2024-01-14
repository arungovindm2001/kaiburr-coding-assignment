"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import Card from "./components/Card";

import Task from "@/types/task";
import { PlusCircleIcon, RotateCcw, Search } from "lucide-react";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("name");
  const [taskData, setTaskData] = useState<Task[]>([]);

  const handleSearch = async () => {
    try {
      setTaskData([]);
      console.log(searchValue + selectedOption);
      if (selectedOption === "name") {
        const { data } = await axios.get(
          "http://localhost:8080/tasks/name=" + searchValue
        );
        console.log(data);
        setTaskData(data);
      } else if (selectedOption === "assignee") {
        const { data } = await axios.get(
          "http://localhost:8080/tasks/assignee=" + searchValue
        );
        console.log(data);
        setTaskData(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const checkSearchValue = searchValue.trim() == "";

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/tasks");
      console.log(data);
      setTaskData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  function reloadData() {
    setTaskData([]);
    fetchTasks();
  }

  return (
    <>
      <div className="flex flex-row items-center gap-4">
        <div className="join">
          <div>
            <div>
              <input
                className="input input-bordered join-item"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
          <select
            className="select select-bordered join-item"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="assignee">Assignee</option>
          </select>
          <div className="indicator">
            <button
              className="btn join-item"
              onClick={handleSearch}
              disabled={checkSearchValue}
            >
              <Search />
            </button>
          </div>
        </div>
        <a role="button" href="/add" className="btn btn-primary">
          <PlusCircleIcon /> Add Task
        </a>
        <button className="btn" onClick={() => reloadData()}><RotateCcw/></button>
      </div>

      {taskData && taskData.length > 0 ? (
        <Card tasks={taskData} />
      ) : (
        <span className="loading loading-bars loading-lg"></span>
      )}
    </>
  );
}
