import React from 'react'
import '.App.css';
import ReactPaginate from 'react-paginate'


function App() {
  return (
    <div>
      <ReactPaginate
      previousLabel={'previous'}
      />
    </div>
  );
}

export default App;