function TaskSort({ onSortItems }) {
  const sortItems = (type) => {
    onSortItems(type)
  }

  return (
    <div className="w-1/2 bg-slate-300 px-3 py-5 rounded-md">
      <button className="w-full bg-slate-500 text-white px-2 py-2 font-medium rounded-md mb-4" onClick={() => sortItems('name')}>
        Sort by name
      </button>

      <button className="w-full bg-slate-500 text-white px-2 py-2 font-medium rounded-md mb-4" onClick={() => sortItems('quantity')}>
        Sort by quantity
      </button>

      <button className="w-full bg-slate-500 text-white px-2 py-2 font-medium rounded-md" onClick={() => sortItems('completion')}>
        Sort by completed
      </button>
    </div>
  );
}

export default TaskSort