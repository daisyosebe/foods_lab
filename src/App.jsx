import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.jsx";
import Recipe from "./pages/recipe/Recipe.jsx"
import African from "./pages/african/African.jsx";
import MyKitchen from "./pages/mykitchen/MyKitchen.jsx";
import Cooked from "./pages/cooked/Cooked.jsx";
import Favorite from "./pages/favorite/Favorite.jsx";
import Pantry from "./pages/pantry/Pantry.jsx";
import Cart from "./pages/cart/Cart.jsx";
// import ProtectedRoute from "./context/ProtectedRoute.jsx";
import SamosaRecipe from "./pages/african/Samosas.jsx"
import './App.css'



// import viteLogo from '/vite.svg'

// function App() {

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         </div>
//     </>
//   )
// }

export default function App(){
  return (
<BrowserRouter basename="/">
<Routes>
    <Route
      path="/"
      element={
        <HomePage/>
      }
    />
    <Route
      path="/recipe"
      element={
        <Recipe/>
      }
    />

<Route
      path="/African"
      element={
        <African/>
      }
    />

<Route
      path="/SamosaRecipe"
      element={
        <SamosaRecipe/>
      }
    />



<Route
      path="/MyKitchen"
      element={
        // <ProtectedRoute>
          <MyKitchen/>
        // </ProtectedRoute>
      }
    />

<Route
      path="/Cooked"
      element={
        // <ProtectedRoute>
          <Cooked/>
        // </ProtectedRoute>
      }
    />  

<Route
      path="/Favorite"
      element={
        // <ProtectedRoute>
          <Favorite/>
        // </ProtectedRoute>     
       }
    />

<Route
      path="/Pantry"
      element={
        // <ProtectedRoute>
          <Pantry/>
        // </ProtectedRoute>     
       }
    />

<Route
      path="/Cart"
      element={
        // <ProtectedRoute>
          <Cart/>
        // </ProtectedRoute>     
       }
    />  
</Routes>



</BrowserRouter>  )
}

