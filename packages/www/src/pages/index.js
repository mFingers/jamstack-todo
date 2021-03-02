/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button, Container, Flex, Heading } from 'theme-ui';
import netlifyIdentity from 'netlify-identity-widget';
import { useEffect } from 'react';

const Main = (props) => {
  useEffect(() => {
    netlifyIdentity.init({});
  });

  return (
    <Container>
      <Flex sx={{ flexDirection: 'column', padding: 3 }}>
        <Heading as="h1">Get Stuff Done</Heading>
        <Button sx={{ marginTop: 2 }} onClick={() => netlifyIdentity.open()}>
          Log In
        </Button>
      </Flex>
    </Container>
  );
};

export default Main;
