import React, { useEffect, useState } from 'react'

function Suggestions() {
    const [suggestions,setSuggestions] = useState([])

    useEffect(() => {
        const suggestions = [...Array(5)].map((_,i) => ({
            
        }))
    },[])
  return (
    <div>
        
    </div>
  )
}

export default Suggestions