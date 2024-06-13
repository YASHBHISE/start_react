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
                    <li className={item.operator+item.field}>
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


export default App;