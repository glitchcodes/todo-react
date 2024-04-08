import './App.css';
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskSort from "./components/TaskSort";
import TaskInfo from "./components/TaskInfo";
import {useEffect, useState} from "react";

function App() {
  // Use local storage
  const storedItems = JSON.parse(localStorage.getItem("todoItems"));

  const [items, setItems] = useState(storedItems);

  // Update local storage whenever a new item is added
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items])

  const handleAddItem = (item) => {
    setItems(items => [...items, item])
  }

  // Ugly code
  const handleToggleCompletion = (id, status) => {
    const updatedItem = items.find((item) => item.id === id)
    updatedItem.isChecked = status;

    setItems(items => {
      return items.map((item) => {
        if (item.id === id) {
          return updatedItem
        }
        return item
      })
    });
  }

  const handleDeleteItem = (id) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  }

  const handleSortItems = (type) => {
    let sortedItems = []

    switch (type) {
      case 'name':
        console.log('test')
        sortedItems = items.sort((a, b) => {
          if (b.name < a.name) {
            return 1;
          } else if (b.name > a.name) {
            return -1
          } else {
            return 0;
          }
        });
        setItems(items => [...sortedItems])
        break;
      case 'completion':
        sortedItems = items.sort((a, b) => b.isChecked - a.isChecked);
        setItems(items => [...sortedItems])
        break;
      case 'quantity':
        sortedItems = items.sort((a, b) => b.quantity - a.quantity);
        setItems(items => [...sortedItems])
        break;
      default:
        sortedItems = items.sort((a, b) => b.quantity - a.quantity);
        setItems(items => [...sortedItems])
        break;
    }
  }

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-8">
      <h1 className="text-blue-600 uppercase font-semibold text-2xl">TODO LIST</h1>

      <TaskForm onAddItem={handleAddItem}/>

      <div className="w-full flex justify-center items-center mb-5">
        <div className="w-1/2 flex gap-6">
          <TaskSort onSortItems={handleSortItems} />
          <TaskInfo tasks={items} />
        </div>
      </div>

      <TaskList items={items} onToggleCompletion={handleToggleCompletion} onDeleteTask={handleDeleteItem}/>
    </div>
  );
}

export default App;
