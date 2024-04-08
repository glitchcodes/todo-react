function TaskItem({ id, name, quantity, isChecked, onToggleCompletion, onDeleteTask }) {

  const markTaskAsComplete = () => {
    onToggleCompletion(id, true)
  }

  const markTaskAsNotComplete = () => {
    onToggleCompletion(id, false)
  }

  const deleteTask = () => {
    onDeleteTask(id)
  }

  return (
    <div className="flex justify-between items-center mb-5 last:mb-0">
      <li className='list-none w-1/2 text-left break-normal'>
        <span className="bg-blue-100 rounded-full py-1 px-2 me-2">
          { quantity > 1 ?
            quantity + ' pcs' : quantity + ' pc'
          }
        </span>
        <span className={isChecked ? 'line-through' : ''}>
          {name}
        </span>
      </li>
      <div className="flex gap-3">
        {isChecked &&
          <button className="bg-blue-600 text-white px-2 py-2 font-medium rounded-md" onClick={markTaskAsNotComplete}>
            Mark as not completed
          </button>
        }
        { !isChecked &&
          <button className="bg-blue-400 text-white px-2 py-2 font-medium rounded-md" onClick={markTaskAsComplete}>
            Mark as completed
          </button>
        }
        <button className="bg-red-400 text-white px-2 py-2 font-medium rounded-md" onClick={deleteTask}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskItem;