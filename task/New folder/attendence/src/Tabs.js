import { useState } from "react";
import "./App.css";
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
    Link,
    Button
  } from '@chakra-ui/react'

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

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
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Student
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Staff
        </button>
        
      </Box>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
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

                    <Stack isInline justifyContent='space-between' mt={4}>
                        <Box>
                            <Checkbox>Remember Me</Checkbox>
                        </Box>
                        <Box>
                            <Link>Forgot your password?</Link>
                        </Box>
                    </Stack>

                    <Button width='full' mt={4}>Sign In</Button>
                </form>
            </Box>
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
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
              <Link>Already have an account? Sign in</Link>
            </Box>
        </Stack>

        <Button width='full' mt={4}>Sign Up</Button>
      </form>
    </Box>
        </div>

        
      </div>
    </Flex>
  );
}

export default Tabs;