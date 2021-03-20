//CONTEXT api using class based component


// import React,{createContext} from 'react'

// export const Context=createContext()
// class ShopContext extends React.Component{

//     state={
//         products:[
//             {id:1,name:'Laptop',price:5500},
//             {id:2,name:'Camera',price:1500},
//             {id:3,name:'Speaker',price:700},
//             {id:4,name:'Keyboard',price:500},
//             {id:5,name:'Mouse',price:400}
//         ]
//     }

//     //we can pass a function as a value with context.Provider
//     doSomething=()=>{
//         return 'Hey BRo'
//     }
//     render(){
//         return(
//             <Context.Provider value={{...this.state,doSomething:this.doSomething}}>
//              {this.props.children}
//             </Context.Provider>
//         )
//     }
       
    
// }

// export default ShopContext





//CONText api using functional compo




import React,{createContext, useEffect, useState} from 'react'

export const Context=createContext()

const  ShopContext =(props)=>{

    const [products,setProducts]=useState({products:[
        {id:1,name:'Laptop',price:5500},
        {id:2,name:'Camera',price:1500},
        {id:3,name:'Speaker',price:700},
        {id:4,name:'Keyboard',price:500},
        {id:5,name:'Mouse',price:400}
    ]})

    //we can pass a function as a value with context.Provider
   const  doSomething=()=>{
        return 'Hey BRo'
    }

        return(
            <Context.Provider value={{...products,doSomething:doSomething}}>
             {props.children}
            </Context.Provider>
        )   
}

export default ShopContext