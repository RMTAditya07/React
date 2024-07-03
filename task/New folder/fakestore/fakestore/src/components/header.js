import { Box,Flex, Heading ,HStack,Icon} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';


function Header({title}){
  const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
}

    return <Box p={4} shadow="md" color="whiteAlpha.700">
        <Flex
      px="200px"
      py="20px"
      width="full"
      bg="blue.900"
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <Flex alignItems="flex-end">
        <Heading
          color="whiteAlpha.900"
          mr="60px"
          fontSize={20}
          letterSpacing="1.5px"
        >
            {title}
        </Heading>
        <HStack x spacing="40px">
          <Link>Products</Link>
          <Link>Wishlist</Link>
          <Link>My Orders</Link>
        </HStack>
      </Flex>
      <Link onClick={handleClick}>Logout</Link>
      
      <Icon as={AiOutlineShoppingCart} ml="105px" mr="-105px" h={5} w={5} color='white' cursor='pointer'/>
      </Flex>
    </Box>
}
export default Header;