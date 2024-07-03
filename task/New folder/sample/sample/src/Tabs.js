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
  Link,
  Stack,
  Checkbox,
  Button
} from '@chakra-ui/core'

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Box my={8} textAlign='left'>
            <form>
            <Box textAlign='center'>
              <Heading>Sign In to Your Account</Heading>
              <Text>
                <Link>Don't have an Account? Sign Up</Link>
              </Text>
            </Box>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input  placeholder='Enter your admin email address'/>    
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
                <Input  placeholder='Enter your password'/>
              </FormControl>

              <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
                <Input placeholder='User or Admin'/>
              </FormControl>

              <Stack isInline justifyContent='space-between' mt={4}>
                <Box>
                  <Checkbox>Remember Me</Checkbox>
                </Box>
                <Box>
                  <Link>Forgot your password?</Link>
                </Box>
              </Stack>

          <button>Sign in</button>
          </form>
</Box>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;