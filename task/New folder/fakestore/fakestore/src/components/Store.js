import React, { useEffect } from 'react'
import { Box,Button,Flex,Heading,Image,Input, Stack,Text,Spacer ,Tag, SimpleGrid, Center, GridItem, Spinner,Badge } from '@chakra-ui/react'
import {useRef,useState} from "react";  
import Header from './header';
import { Link } from 'react-router-dom';
import { StoreItem } from './style/StoreItem';

function Store({items, loading}){

    //search
    const [FilteredItems,setFilteredItems]=useState(items);

    useEffect(()=>{
        setFilteredItems(items);
    },[items])

    return(
    <Box>
        <Header title="Fake Store"/>
        {loading ? (
            <Center mt={6}>
                <Spinner/>
            </Center>) : (
            <Box p={2}>
                <Input onChange={e => {
                    let f=items.filter(item=>
                        item.title.toLowerCase().includes(e.target.value.toLowerCase()) //search value with lowercase also
                    );
                    console.log("f",f);
                    setFilteredItems(f); //display the search results
                }}placeholder='Search' mt={4} />
                <SimpleGrid columns={2} spacing={4} mt={4} p={2}>  
                    {FilteredItems.map((item)=>{  
                    return(
                        <GridItem>
                            <Link to={`/product/${item.id}`}>
                            <StoreItem {...item}/>
                            </Link>
                        </GridItem>
                    );
                })} 
                </SimpleGrid>
            </Box>
        )}
    </Box>
);
}

export default Store