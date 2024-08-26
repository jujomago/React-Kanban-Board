import React, { useState, useRef, useContext } from "react";
import Lane from "./components/Lane";
import { KanbanContext } from "./contexts/KanBanContext";

import "./styles.css";

export default function App(props) {
  const [taskName, setTaskName] = useState("");

  const {
    backLogItems,
    todoItems,
    onGoingItems,
    doneItems,
    handleAddTAsk,
    moveToNextLane,
    moveToPrevLane,
    deleteTask,
  } = useContext(KanbanContext);
  const inputRef = useRef(null);
  const addTask = () => {
    if (Boolean(taskName.trim())) {
      handleAddTAsk({ lane: 0, title: taskName });
      inputRef.current.focus();
      setTaskName("");
    }
  };

  return (
    <div className="App">
      <h1>Kanban Board Practice React</h1>

      <input
        type="text"
        onChange={(event) => setTaskName(event.target.value)}
        onKeyDown={(event) => {
          if (event.keyCode === 13) addTask();
        }}
        value={taskName}
        ref={inputRef}
      />
      <button onClick={addTask}>Create Task</button>

      <section className="kanban-board">
        <Lane
          title="Backlog"
          items={backLogItems}
          nextLane={moveToNextLane}
          prevLane={moveToPrevLane}
          deleteItem={deleteTask}
        />
        <Lane
          title="To Do"
          items={todoItems}
          nextLane={moveToNextLane}
          prevLane={moveToPrevLane}
          deleteItem={deleteTask}
        />
        <Lane
          title="On Going"
          items={onGoingItems}
          nextLane={moveToNextLane}
          prevLane={moveToPrevLane}
          deleteItem={deleteTask}
        />
        <Lane
          title="Done"
          items={doneItems}
          nextLane={moveToNextLane}
          prevLane={moveToPrevLane}
          deleteItem={deleteTask}
        />
      </section>
    </div>
  );
}
