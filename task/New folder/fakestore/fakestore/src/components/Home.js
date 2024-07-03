//pagination
//post limit


import {useState,useEffect} from 'react';
import Store from './Store';
import axios from 'axios';
//import ReactPaginate from 'react-paginate';
import Pagination from './Pagination';
import BackToTop from './BackToTop';


function Home(){
  const [StoreItem,setStoreItem ]=useState([]);
  const [loading,setLoading] =useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  
useEffect(()=>{
 axios.get("https://fakestoreapi.com/products").then(({data})=>{
   setLoading(false); //AFTER THE DATA LOADED SET LOADING TO FALSE
  setStoreItem(data);
 }); 
},[])

 // Get current posts
 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPosts = StoreItem.slice(indexOfFirstPost, indexOfLastPost);

 // Change page
 const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    
  <div class="carousel" data-flickity='{ "groupCells": true }'>
    <BackToTop />
    <Store 
      items={StoreItem} 
      loading={loading}
      onItemAdd={(itemData) => {
      setStoreItem([...StoreItem,itemData])
    }}
    />
     <Pagination
        postsPerPage={postsPerPage}
        totalPosts={StoreItem.length}
        paginate={paginate}
      />
  </div>
  

  );

}

export default Home;