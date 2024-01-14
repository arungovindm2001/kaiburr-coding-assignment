"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddTask = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    assignee: "",
    project: "",
    startTime: "",
    arunGovindProperty: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      formData.startTime = new Date().toISOString();
      console.log(formData);
      axios
        .put("http://localhost:8080/task", formData)
        .then(function (response) {
          if (response.status === 200) {
            alert("Task added successfully");
            router.push("/");
          } else {
            alert("Error adding task");
          }
        });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div>
      <h1 className="text-xl text-center font-bold">Add Task</h1>
      <label className="form-control w-full space-y-4">
        <div>
          <div className="label">
            <span className="label-text">ID</span>
          </div>
          <input
            type="text"
            name="id"
            value={formData.id}
            placeholder="Type ID here"
            className="input input-bordered w-full max-w-xs"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Type name here"
            className="input input-bordered"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <div className="label">
            <span className="label-text">Assignee</span>
          </div>
          <input
            type="text"
            name="assignee"
            value={formData.assignee}
            placeholder="Type assignee here"
            className="input input-bordered"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <div className="label">
            <span className="label-text">Project</span>
          </div>
          <input
            type="text"
            name="project"
            value={formData.project}
            placeholder="Type project here"
            className="input input-bordered"
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </label>
    </div>
  );
};

export default AddTask;
