import {useState} from "react";

function TaskForm({ onAddItem }) {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name) return;
    const item = { id: Date.now(), name, quantity, isChecked: false }

    onAddItem(item)

    // Reset form to defaults
    setName("");
    setQuantity(1);
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center gap-6 mb-10">
      <select className="border-2 rounded-md px-3 py-3 bg-[#E8ECF4] backdrop-blur-lg"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({length: 20}, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>

      <input className="border-2 rounded-md px-3 py-3 bg-[#E8ECF4] backdrop-blur-lg"
             type="text"
             placeholder="New task"
             value={name}
             onChange={(e) => setName(e.target.value)}/>

      <button type="submit" className="h-full px-5 py-2 bg-[#0264F6] text-white font-medium rounded-md">
        Add Item
      </button>
    </form>
  );
}

export default TaskForm;