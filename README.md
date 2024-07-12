# Task Management and Motivation App

## Project Description

This React application is designed to help users manage their tasks effectively while providing motivational messages to keep them inspired. The app displays tasks one at a time, allowing users to mark them as completed and navigate to the next task. Alongside each task, a motivational message is displayed to encourage the user.

## Features

- Displays tasks with their completion status.
- Provides buttons to mark tasks as completed and navigate to the next task.
- Displays motivational messages dynamically using a reusable text component.
- Clean and modern UI with accessible design elements.
- Footer section with a copyright notice.

## Project Structure

- `src/App.js`: Main component that orchestrates the rendering of the entire application.
- `src/FancyText.js`: Reusable component designed to display text with distinctive styling based on its type (title or regular text).
- `src/TaskGenerator.js`: Component that displays the current task along with a motivational message.
- `src/tasks.js`: Contains an array of task objects, each with properties like `id`, `name`, and `isCompleted`.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine. You can download them from [Node.js official website](https://nodejs.org/).

### Installation

1. **Clone the repository:** git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app

2. **Install Dependencies:** npm install

3. **Run the server:** npm start

4. **Open the application in your browser:** Open http://localhost:3000 to view the app