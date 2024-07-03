import React, { useEffect } from 'react'
import { Box,Button,Flex,Heading,Image,Input, Stack,Text,Spacer ,Tag, SimpleGrid, Center, GridItem, Spinner,Badge } from '@chakra-ui/react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';

export const StoreItem=({title,price,image,category,description})=>{
    return (
      <Box p={4} borderRadius="lg" borderWidth="1px" w={575} h={500} _hover={{boxShadow:'lg'}}>
            <Box h={200} mt={5}>
            <Center>
                <Image src={image} w={100} mb={10}/>
            </Center>
            </Box>
            <Heading mt={4} noOfLines={2} size="sm" fontWeight="normal">{title}</Heading>

            <Spacer/>
            <Badge variant='solid' variantColor='teal' rounded='full' px={2}>
                {category}
            </Badge>
            <Spacer/>
            <Tag mt={4}> ₹{price}</Tag>
            <Spacer/>
            <Text noOfLines={3} fontWeight="light" fontSize='md'>
                {description}
            </Text>
            <Box textAlign='center'>
            <Button bg="blue.900" color="whiteAlpha.700" size='lg' mt={3} boxShadow='sm' _hover={{boxShadow:'lg'}} >Add to Cart</Button>
            </Box>
        </Box>
    );
};


         //all these are styling the page
        //doesnt involve data
        // <MDBCard  className='w-75 h-100' alignment='center'>
        //     <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        //     <Center>
        //         <Image src={image} w={24}/>
        //     </Center>
        //             <a>
        //             <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        //             </a>
        //     </MDBRipple>
        //     <MDBCardBody>
        //         <MDBCardTitle>{title}</MDBCardTitle>
        //         <Spacer/>
        //             <Badge variant='solid' variantColor='teal' rounded='full' px={2}>
        //                 {category}
        //             </Badge>
        //         <Spacer/>
        //         <Tag mt={4}> ₹{price}</Tag>
        //         <MDBCardText>
        //             {description}
        //         </MDBCardText>
        //         <Spacer/>
        //         <MDBBtn href='#'>Add to Cart</MDBBtn>
        //     </MDBCardBody>
            
        // </MDBCard>