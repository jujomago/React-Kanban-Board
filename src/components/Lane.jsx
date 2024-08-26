import "./Lane.css";
export default Lane = ({ title, items, nextLane, prevLane, deleteItem }) => {
  return (
    <div className={"kanban"}>
      <h3>{title}</h3>
      {!!items?.length && (
        <ul>
          {items.map((item, index) => (
            <li key={index} className="taskItem">
              {item.title}
              <div className="taskItem-controls">
                <span
                  className={`${item.lane == 0 ? "disabled" : null}`}
                  onClick={() => prevLane(item)}
                >
                  ⬅
                </span>
                <span
                  className={`${item.lane == 3 ? "disabled" : null}`}
                  onClick={() => nextLane(item)}
                >
                  ➡
                </span>
                <span onClick={() => deleteItem(item)}>&#9762;</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
