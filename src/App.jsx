import { useState } from 'react'
import './App.css'

function App() {
 const[open, setOpen] = useState(true);

 const menu = [
  { title: "Dashboard", src: "Chart_fill"},
  { title: "Inbox", src: "Chat"},
  { title: "Accounts", src: "User"},
  { title: "Schedule", src: "Calendar"},
  { title: "Search", src: "Search"},
  { title: "Analytics", src: "Chart"},
  { title: "Files", src: "Folder"},
  { title: "Setting", src: "Setting"}
 ]

  return (
    <div className="flex">
      <div className={`${open ? "w-72" : "w-20"} h-screen bg-dark-purple p-5 pt-8 duration-300 relative`}>
        <img 
          src="../src/assets/control.png" 
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${!open && "rotate-180"}`} 
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 items-center">
          <img 
            src="../src/assets/logo.png" 
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
          />

          <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>
            SideBar
          </h1>
        </div>

        <ul className="pt-6">
          {menu.map((menu, index) => (
            <li
              key={index}
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${index === 0 && "bg-light-white"}`}
            >
              <img src={`../src/assets/${menu.src}.png`} />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
        
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </div>
  )
}

export default App
