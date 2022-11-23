import React, { useEffect, useState }  from 'react';
import { Routes, Route} from "react-router-dom";
import axios from "axios";

import JobList from "./pages/Job-list"
import JobDetailed from "./pages/Job-detailed"

function App() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const result = await axios.get('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu');
    console.log(result.data)
    setProducts(result.data)}

  useEffect(() => {fetchProducts()}, [])

  
  
  return (
    <div>
        <Routes>
          <Route path='/' element={<JobList products={products}/>}/>
          <Route path='job-list/:link' element={<JobDetailed products={products}/>}/>
        </Routes>
    </div>
  );
}

export default App;
