import logo from '../logo.svg';
import '../index.css'
import { useEffect, useState } from "react";

function Menu() {
  const [menu, setMenu] = useState([]); // State to store menu items
  const [loading, setLoading] = useState(true); // State for loading status
  const [category, setCategory] = useState([]); // Add state for menuTab filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("")

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_PUBLIC_API_URL}/api/menus/`);
        const data = await response.json();
        setMenu(data);
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []);

  useEffect(() => {
    const fetchCategoryList = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_PUBLIC_API_URL}/api/menus/categories/`);
        const data = await response.json();
        setCategoryList(data);
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };
    fetchCategoryList();
  }, []);

  // Filtering menu based on category and search query
  useEffect(() => {
    let filtered = menu;

    // Filter by category if one is selected
    if (selectedCategory) {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim() !== '') {
      const lowercasedQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(lowercasedQuery)
      );
    }

    setFilteredMenu(filtered);
  }, [searchQuery, menu, selectedCategory]);




  return (
    <div className="flex flex-col items-center mt-8 w-full">
      {/* Hero Section */}
      <div className="relative w-full max-w-6xl">
        {/* Image */}
        <img
          className="w-full h-[400px] object-cover"
          src="https://www.webstaurantstore.com/uploads/seo_category/2024/11/baked-goods-desserts.jpg"
          alt="Delicious Baked Goods and Desserts"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1
            className="text-3xl font-bold md:text-4xl"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
          >
            FOOD MENU
          </h1>
          <h2
            className="mt-2 text-lg md:text-xl"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
          >
            Impress Residents and Guests with These Delicious Treats
          </h2>
          <div className="rounded-full p-1 box-border mt-8 bg-white overflow-hidden ring-red-300 focus:ring-4 w-96 flex justify-between items-center">
            <input
              type="text"
              className="rounded-full px-4 focus:outline-none w-full bg-transparent text-black"
              placeholder="Search here ......."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="text-sm bg-green-500 py-3 px-6 rounded-full text-black ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform">
              Search
            </button>
          </div>
        </div>
      </div>
      {/* {Category Selection} */}
      <div className='py-5 flex items-center justify-center space-x-6'>
        {loading ? (
          <p className="text-center col-span-full">Loading...</p>
        ) : (
          categoryList.map(cat => (
            <button
              key={cat.id} // Use a unique key for each element
              className={`menu_tab py-4 px-6 rounded-full hover:bg-green-500 hover:text-white ${selectedCategory === cat.name ? 'bg-green-500 text-white' : ''
                }`}
              onClick={() => setSelectedCategory(cat.name)} // Use the `name` for filtering
            >
              {cat.name} {/* Render the name, not the entire object */}
            </button>
          ))
        )}
      </div>
      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 px-5">
        {loading ? (
          <p className="text-center col-span-full">Loading...</p>
        ) : (
          filteredMenu.map(item => (
            <div className='bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative'>
              <span className='bg-green-100 border border-white-100 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 '>{item.category}</span>
              <div className='flex flex-col items-center my-3 space-y-2'>
                <h1 class="text-gray-900 poppins text-lg">{item.name}</h1>
                <p class="text-gray-500 poppins text-sm text-center">{item.description}</p>
                <h2 class="text-gray-900 poppins text-2xl font-bold">${item.price}</h2>
                <button className="bg-green-500 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105 mb-0">Order Now</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Menu;
