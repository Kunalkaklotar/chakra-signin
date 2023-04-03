import React from 'react';
import { Button, Center, Container, Heading, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import './App.css';

function App() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
        <Container border='1px solid black' color='black' mt='100px' p='50px 25px'>
          <Center>
            <Heading>LOGIN PAGE</Heading>
          </Center>
          <Input display='inline-block' mt='40px' w='100%' _placeholder={{ color: 'black' }} placeholder='Name' />
          <Input display='inline-block' mt='20px' w='100%' _placeholder={{ color: 'black' }} placeholder='Email' />
          <InputGroup mt='20px' size='md'>
          <Input border='1px solid black' pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Password' _placeholder={{ color: 'black' }}/>
            <InputRightElement width='100px'>
              <Button h='25px' color='black' bg='transparent' 
                
                onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}

              </Button>
            </InputRightElement>
          </InputGroup>
          <Center>
            <Button mt='50px' bg='white' border='1px solid black'>
              Sign in
            </Button>
          </Center>
        </Container>
  );
}

export default App;