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

const Signup = () => {
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
      <Heading>Sign Up</Heading>
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

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type='password' placeholder='Enter your password' />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type='password' placeholder='Re-Enter your password' />
        </FormControl>

        <Stack justifyContent='center' mt={4}>
            <Box>
              <Link to="/signin" color={`${VARIANT_COLOR}.500`}>Already have an account? Sign in</Link>
            </Box>
        </Stack>

        <Button variantColor={VARIANT_COLOR}  width='full' mt={4}>Sign Up</Button>
      </form>
    </Box>
  )
}

export default Signup