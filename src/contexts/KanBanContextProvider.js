import { useState } from "react";
import { KanbanContext } from "./KanBanContext";
export default kanbanContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const handleAddTAsk = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const moveToNextLane = (task) => {
    if (task.lane < 3) {
      setTasks((prevTasks) =>
        prevTasks.map((item) =>
          item.title == task.title && item.lane == task.lane
            ? {
                ...item,
                lane: item.lane + 1,
              }
            : item
        )
      );
    }
  };

  const moveToPrevLane = (task) => {
    if (task.lane > 0) {
      setTasks((prevTasks) =>
        prevTasks.map((item) =>
          item.title == task.title && item.lane == task.lane
            ? {
                ...item,
                lane: item.lane - 1,
              }
            : item
        )
      );
    }
  };

  const deleteTask = (task) => {
    console.log(tasks);
    console.log(task);
    debugger;
    setTasks((prevTasks) =>
      prevTasks.filter(
        (item) => item.title != task.title || item.lane != task.lane
      )
    );
  };

  return (
    <KanbanContext.Provider
      value={{
        handleAddTAsk,
        tasks,
        backLogItems: tasks.filter((task) => task.lane == 0),
        todoItems: tasks.filter((task) => task.lane == 1),
        onGoingItems: tasks.filter((task) => task.lane == 2),
        doneItems: tasks.filter((task) => task.lane == 3),
        moveToNextLane,
        moveToPrevLane,
        deleteTask,
      }}
    >
      {children}
    </KanbanContext.Provider>
  );
};
