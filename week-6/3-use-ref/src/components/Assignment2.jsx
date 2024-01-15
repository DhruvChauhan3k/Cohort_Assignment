import React, { useState, useCallback } from 'react';
import { useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const check=useRef(0)
    const[render,setrender]=useState(0)
    const handleReRender = () => {
        // Update state to force re-render
        setrender(render+1)
    };
    check.current=check.current+1
    return (
        <div>
            <p>This component has rendered {check.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};