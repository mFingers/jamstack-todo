/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button, Container, Flex, Heading } from 'theme-ui';

const Main = (props) => (
  <Container>
    <Flex sx={{ flexDirection: 'column', padding: 3 }}>
      <Heading as="h1">Get Stuff Done</Heading>
      <Button sx={{ marginTop: 2 }} onClick={() => alert('clicked')}>
        Log In
      </Button>
    </Flex>
  </Container>
);

export default Main;
