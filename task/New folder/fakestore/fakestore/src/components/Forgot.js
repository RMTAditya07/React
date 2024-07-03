import React from 'react'
import { Link } from 'react-router-dom';
import {
  CSSReset,
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button
} from '@chakra-ui/react'

const VARIANT_COLOR = 'teal'

const Forgot = () => {
  return (
    <div>
        <CSSReset />
        <LoginArea />
        </div>
    
  )
}

const LoginArea = () => {
  return (
    <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
      <Box 
        borderWidth={1}
        px={4}
        width='full'
        maxWidth='500px'
        borderRadius={4}
        textAlign='center'
        boxShadow='lg'
      >
        
        <Box p={4}>
          <LoginHeader />
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  )
}


const LoginHeader = () => {
  return (
    <Box textAlign='center'>
      <Heading>Password Assistance</Heading>
      <Text mt="10px">
      Enter the email address associated with your Fakestore account.
      </Text>
     </Box>
  )
}

const LoginForm = () => {
  return (
    <Box my={8} textAlign='left'>
      <form>

        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type='email' placeholder='Enter your email address' />
        </FormControl>

            

        <Button variantColor={VARIANT_COLOR}  width='full' mt={10} md={5}>Continue</Button>
      </form>
    </Box>
  )
}

export default Forgot