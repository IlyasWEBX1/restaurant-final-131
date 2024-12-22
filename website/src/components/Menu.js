import logo from '../logo.svg';
import '../index.css'
import { useEffect, useState } from 'react';

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/menus/`);
        const data = await response.json();
        setMenu(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchMenu();
  }, []);
//   const firstMenuItem = menu[0]

//   return (
//       <div>
//         <ul>
//             {firstMenuItem ? (
//             <h1>{firstMenuItem.name}</h1>) : (<p>Loading menu or no items available.</p>)}
//         </ul>
//       </div>
//   );
}

export default App;
