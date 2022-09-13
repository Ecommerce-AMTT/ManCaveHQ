import React from 'react'
import './style.css';

function Loading() {
    return (
        <div className="loading-container">
	<div className="yellow load-dot"></div>
	<div className="red load-dot"></div>
	<div className="blue load-dot"></div>
	<div className="violet load-dot"></div>
</div>
    )
}

export default Loading
