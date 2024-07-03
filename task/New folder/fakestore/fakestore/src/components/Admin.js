import React from 'react'
import { Link } from 'react-router-dom';

function Admin() {
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
  return (
    <div>
    <Link onClick={handleClick}>Logout</Link>
    </div>
  )
}

export default Admin