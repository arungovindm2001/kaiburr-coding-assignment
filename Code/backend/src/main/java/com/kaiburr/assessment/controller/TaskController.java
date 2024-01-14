package com.kaiburr.assessment.controller;

import com.kaiburr.assessment.models.Task;
import com.kaiburr.assessment.repository.SearchRepository;
import com.kaiburr.assessment.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins="*")
public class TaskController {

    @Autowired
    TaskRepository repo;

    @Autowired
    SearchRepository sRepo;

    @GetMapping("/tasks")
    public ResponseEntity<List<Task>> getAllTasks() {
        List<Task> result = null;
        try {
            result = repo.findAll();
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/tasks/name={query}")
    public List<Task> getAllTasksByName(@PathVariable String query) {
        return sRepo.findByName(query);
    }

    @GetMapping("/tasks/assignee={query}")
    public List<Task> getAllTasksByAssignee(@PathVariable String query) {
        return sRepo.findByAssignee(query);
    }

    @PutMapping("/task")
    public ResponseEntity<String> addTask(@RequestBody Task task) {
        try {
            task.setArunGovindProperty(UUID.randomUUID().toString().substring(0, 5));
            repo.save(task);
            return new ResponseEntity<>("Task " + task + " added successfully", HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>("Error adding task", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/task/id={taskId}")
    public ResponseEntity<String> deleteTask(@PathVariable String taskId) {
        try {
            repo.deleteById(taskId);
            return new ResponseEntity<>("Task with ID " + taskId + " deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error deleting task with ID " + taskId, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
