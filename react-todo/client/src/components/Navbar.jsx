import { LayoutDashboard, ListTodo, Plus, SquarePen } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Add Tasks", icon: Plus, path: "/add/todo" },
  { name: "Edit Task", icon: SquarePen, path: "/edit/todo" },
];

export function Navbar() {
  return (
    <header className="flex justify-between items-center px-2 sm:px-16 py-4 border-b bg-white shadow-sm">
      
      <div className="flex items-center gap-2 text-2xl font-bold text-blue-600 cursor-pointer select-none">
        <ListTodo size={28} />
        <Link to={"/"}>TodoFlow</Link>
      </div>

      <nav>
        <ul className="flex gap-4 text-gray-700 font-medium">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:bg-blue-100 px-2 py-1 rounded-md transition gap-1"
            >
              <Link to={item.path} className="flex items-center gap-1"><item.icon size={18} />{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
