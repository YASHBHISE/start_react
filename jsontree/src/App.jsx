
// import './App.css'

// import React from 'react';


// const json = {
//   "name": "Yash Bhise",
//   "age": 21,
//   "email": "yash@gmail.com"
// };


// function App() {

//   return (
//     <>
//     console.log(json.name)
//      <pre>{JSON.stringify(json, null, 2)}</pre>
//     </>
//   )
// }

// export default App

/// second approach.........................................//

// import React from "react";
// import ReactDOM from "react-dom";
// import JsonView from "react-json-tree-view";



// const data = {
//   data: {
//     id: "120",
//     fecha: "05--2024",
//     estado: "identificada",
//     nombreIdea: "Prueba de service",
//     creador: "Raúl",
//     grupo: "15-V"
//   }
// };

// function App() {
//   return (
//     <div className="App">
//       <JsonView data={data} />
//     </div>
//   );
// }

// import Records from './records.json';

// function App() {
//   return (
//     <div  className="App">
//     {
//       Records && Records.map(record => {
//         return (
//           <div  key={ record.id }>
//           <strong>{ record.title }</strong><br />
//           {record.content} <br /> <br />
          

//           </div>
//         )
//       })
//     } 
//     </div>
//   );
// }
// export default App;




// import React from 'react';

// function TreeNode({ node }) {
//   return (
//     <div>
//       <div>Name: {node.name}</div>
//       <div>Field: {node.field}</div>
//       <div>Operator: {node.operator}</div>
//       <div>Value: {node.value}</div>
//       {node.conditions && node.conditions.map((condition, index) => (
//         <div key={index} style={{ marginLeft: '20px' }}>
//           <TreeNode node={condition} />
//         </div>
//       ))}
//     </div>
//   );
// }

// function Tree({ data }) {
//   return (
//     <div>
//       <h1>Tree Structure</h1>
//       <TreeNode node={data} />
//     </div>
//   );
// }

// // JSON data
// const jsonData = {
//   "name": "discountEligibility",
//   "conditions": [{
//     "field": "age",
//     "operator": "greater_than_or_equal",
//     "value": "18",
//     "valueref": "value",
//     "type": "Integer",
//     "conditions": [{
//       "field": "membership_status",
//       "operator": "equal",
//       "value": "gold",
//       "valueref": "value",
//       "type": "String",
//       "priority": "1",
//       "conditions": [{
//         "field": "location",
//         "operator": "equal",
//         "value": "US",
//         "type": "String",
//         "conditions": [{
//           "field": "purchase_history",
//           "operator": "greater_than_or_equal",
//           "value": 1000,
//           "type": "Integer"
//         }]
//       }]
//     }]
//   }]
// };

// function App() {
//   return (
//     <div>
//       <Tree data={jsonData} />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { Tree } from 'react-d3-tree';

// // JSON data
// const jsonData = {
//   name: 'discountEligibility',
//   children: [{
//     name: 'age: greater_than_or_equal to 18',
//     children: [{
//       name: 'membership_status: equal to gold',
//       children: [{
//         name: 'location: equal to US',
//         children: [{
//           name: 'purchase_history: greater_than_or_equal to 1000'
//         }]
//       }]
//     }]
//   }]
// };

// function App() {
//   return (
//     <div style={{ width: '100%', height: '800px' }}>
//       <Tree data={jsonData} orientation="vertical" />
//     </div>
//   );
// }

// export default App;



import React, {useState,useEffect} from 'react'
import './tree.css';

const treeData = [
     
    {
      "field": "info",
      "name":"discountEligibility",
      "conditions": [
          {
            "field": "age",
            "operator": "greater_than_or_equal",
            "value": "18",
            "valueref": "value",
            "type": "Integer",
            "conditions":[
                {
                  "field": "membership_status",
                  "operator": "equal",
                  "value": "gold",
                  "valueref": "value",
                  "type": "String",
                  "priority":"1",
                  "conditions":[
                      {
                        "field": "location",
                        "operator": "equal",
                        "value": "US",
                        "type": "String",
                        "conditions":[
                            {
                              "field": "purchase_history",
                              "operator": "greater_than_or_equal",
                              "value": 1000,
                              "type": "Integer"
                            }
                        ]
                      }
                  ]
                }
            ]
          }
      ]
    }
]

const App = () => {
    
    const [state, setstate] = useState([]);
    useEffect(() => {
        mapTree(treeData, state, setstate);
    }, [])
    useEffect(() => {
        console.log(state)
    }, [state])
    let arr = []
    const mapTree = (treeData) =>{
        treeData.forEach((ele)=>{
            console.log(ele, state);
            setstate([...state, ele])
            arr.push(ele);
            const children = ele.children && JSON.parse(JSON.stringify(ele.children));
            delete ele.children && ele['children'];
            if(children && children.length){
                return mapTree(children)
            }
        })
    }
    console.log(arr)
    return (
<div className="tree">
    {
        treeRendering(treeData)
    }
	{}
                    
</div>
    )
}


const treeRendering = (treeData) => {
    
    return (
        <>
                <ul>
            {
                treeData.map((item)=>                
                    <li className={item.text+item.field}>
                        <div>{ item.field}</div>
                        {
                            item.conditions && item.conditions.length ?
                            treeRendering(item.conditions)
                            :''
                        }
                    </li>
                )            
                
            }
            </ul>
        </>
    )
}


export default App