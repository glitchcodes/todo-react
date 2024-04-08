function TaskInfo({tasks}) {
  const completedItems = tasks.filter((task) => task.isChecked).length

  const percentDone = Math.round((completedItems / tasks.length) * 100);

  return (
    <div className="w-1/2 bg-slate-300 px-3 py-5 rounded-md">
      <p className="text-xl font-bold text-gray-900 mb-4">
        Total Items: <span>{ tasks.length }</span>
      </p>
      <p className="text-xl font-bold text-gray-900 mb-4">
        Completed Items: <span>{ completedItems }</span>
      </p>
      <p className="text-xl font-bold text-gray-900">
        Percent Done: <span>{percentDone}%</span>
      </p>
    </div>
  )
}

export default TaskInfo