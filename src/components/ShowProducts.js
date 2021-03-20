//RAW Class based method to acces context api data

// import React from 'react'
// import {Context} from '../context/ShopContext'

// class ShowProducts extends React.Component{

//      static contextType=Context

//     render(){
//         const {products}=this.context
//         return(<><h1>All Products</h1>

//         <table className="table">
//         <thead>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Price</th>
//         </thead>
//         <tbody>
//           {products.map((value) => (
//             <tr key={value.id}>
//               <td>{value.id}</td>
//               <td>{value.name}</td>
//               <td>{value.price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//         </>)
//     }
// }

// export default ShowProducts




//acces context data using Consumer Key word and calss based comp




// import React from "react";
// import { Context } from "../context/ShopContext";

// class ShowProducts extends React.Component {
//   render() {
//     return (
//       <Context.Consumer>
//         {(contextData) => {
//           const { products } = contextData;
//           return (
//             <div>
//               <h1>All Products</h1>
//               <table className="table">
//                 <thead>
//                   <th>ID</th>
//                   <th>Name</th>
//                   <th>Price</th>
//                 </thead>
//                 <tbody>
//                   {products.map((value) => (
//                     <tr key={value.id}>
//                       <td>{value.id}</td>
//                       <td>{value.name}</td>
//                       <td>{value.price}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           );
//         }}
//       </Context.Consumer>
//     );
//   }
// }

// export default ShowProducts;





//acces context api data using functional component,



// import React from "react";
// import { Context } from "../context/ShopContext";
// const ShowProducts =()=> {
//     return (
//       <Context.Consumer>
//         {(contextData) => {
//           const { products,doSomething } = contextData;
//           return (
//             <div>
//               <h1>All Products</h1>
//               <h1>{doSomething()}</h1>
//               <table className="table">
//                 <thead>
//                   <th>ID</th>
//                   <th>Name</th>
//                   <th>Price</th>
//                 </thead>
//                 <tbody>
//                   {products.map((value) => (
//                     <tr key={value.id}>
//                       <td>{value.id}</td>
//                       <td>{value.name}</td>
//                       <td>{value.price}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           );
//         }}
//       </Context.Consumer>
//     );
// }

// export default ShowProducts;





//access context data using hook(useContext) ,this is use only func compo..





import React,{useContext} from "react";
import { Context } from "../context/ShopContext";
const ShowProducts =()=> {
    const myData=useContext(Context)
    const {products,doSomething}=myData
    return (
      
            <div>
              <h1>All Products</h1>
              <h1>{doSomething()}</h1>
              <table className="table">
                <thead>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                </thead>
                <tbody>
                  {products.map((value) => (
                    <tr key={value.id}>
                      <td>{value.id}</td>
                      <td>{value.name}</td>
                      <td>{value.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
    );
}
export default ShowProducts;





