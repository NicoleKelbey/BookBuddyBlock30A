import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import AllBooks from "./AllBooks.jsx";
import SingleBook from "./SingleBook.jsx";
import Home from "./Home.jsx";


const App = () => {
  

  return (
    <>
    <nav>
      <link to="/">Home</link>
      <link to="/Books">All Books</link>
    </nav>

    <h1>Welcome Book Buddies!</h1>

    <Routes>
        <Route path="/" element={<Homepage setToken={setToken} token={token} />} />
        <Route path="/book" element={<AllBooks />} />
        <Route path="/books/:id" element={<SingleBook token={token} />} />
      </Routes>
    </>
  )
}

export default App
