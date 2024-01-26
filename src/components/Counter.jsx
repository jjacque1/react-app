// import React, { useState } from "react";

// function Counter() {
//   const [cart, setCart] = useState({
//     item: "apple", 
//     quantity: 0,
//   });
  

//   function removeApple() {
//     // 1. Use a callback to get the previoous value
//     // 2. Spread out all the properties of he prev state
//     // 3. Only change the property that you need to change 
//     setCart((prevCart) => ({
//       ...prevCart,
//       quantity: prevCart.quantity - 1
//     }))
//   }

//   function addApple() {
//     setCart((prevCart) => ({
//       ...prevCart,
//       quantity: prevCart.quantity + 1
//     }))
//   }

//   return (
//     <div>
//       <button onClick={removeApple}>-</button>
//       {cart.quantity} 
//       {cart.item}
//       <button onClick={addApple}>+</button>
//     </div>
//   );
// }

// export default Counter;




// /**
//  * 1. Create a "Counter.jsx" component
//  * 2. Create a default `count` of 0
//  * 3. Create a button to increment 'count' by 1
//  * 4. Create a button to decrement 'count' by 1
//  * 5. Import your Counter in App.jsx and test it
//  */



// function Counter() {
// Create a + and 1 button
// Create an empty arry that 
// add a + to the empty array every time you click the plus button
// add a - to the emptyh array every time you click the minus button

// const [arr, setArr] = useState([])

// function addPlus() {
//   setArr(prevArr => [...prevArr, "+"])
// }

// function addMinus() {
//   setArr(prevArr => [...prevArr, "-"])
// }

//   return (
//     <div>
//       <button onClick={addMinus}>-</button>
//       <button onClick={addPlus}>+</button>
//       {arr}
//     </div>
//   );
// }

// export default Counter;