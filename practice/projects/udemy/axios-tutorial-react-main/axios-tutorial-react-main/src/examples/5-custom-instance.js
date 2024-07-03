import { useEffect } from 'react';
import axios from 'axios';
import autoFetch from '../axios/custom';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const data=await autoFetch('/react-store-products')
      console.log(data)
    } catch (error) {
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
