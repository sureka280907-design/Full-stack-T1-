import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name="Sureka" age={18}
         marks={[90,92,93,94,95]} 
         person={{name:"sure",dept:["CT"]}}/>
    </div>
  )
}

export default Parent