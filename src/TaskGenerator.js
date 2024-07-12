// src/TaskGenerator.js
import React, { useState } from 'react';
import tasks from './tasks';
import FancyText from './FancyText';

const motivationalMessages = [
  "Keep going, you're doing great!",
  "Stay positive and keep pushing forward!",
  "Believe in yourself and all that you are.",
  // Add more messages as needed
];

const TaskGenerator = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const handleNextTask = () => {
    setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % tasks.length);
  };

  const handleCompleteTask = () => {
    tasks[currentTaskIndex].isCompleted = true;
    handleNextTask();
  };

  return (
    <div>
      <h2>Task:</h2>
      <FancyText text={tasks[currentTaskIndex].name} />
      <p>Status: {tasks[currentTaskIndex].isCompleted ? 'Completed ✔' : 'Pending'}</p>
      <button onClick={handleCompleteTask}>Mark as Completed</button>
      <button onClick={handleNextTask}>Next Task</button>
      <FancyText title text={motivationalMessages[currentTaskIndex % motivationalMessages.length]} />
    </div>
  );
};

export default TaskGenerator;
