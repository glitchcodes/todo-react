import TaskItem from "./TaskItem";

function TaskList({ items, onToggleCompletion, onDeleteTask }) {
    if (items.length > 0) {
      return (
        <div className="w-full text-center flex items-center flex-col gap-5">
          <div className="w-1/2 bg-slate-300 backdrop-blur-lg px-3 py-5 rounded-md">
            { items.map((item =>
                <TaskItem id={item.id}
                          key={item.id}
                          name={item.name}
                          quantity={item.quantity}
                          isChecked={item.isChecked}
                          onToggleCompletion={onToggleCompletion}
                          onDeleteTask={onDeleteTask}
                />
            )) }
          </div>
        </div>
      );
    }
}

export default TaskList;