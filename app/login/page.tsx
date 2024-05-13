import { TextInput, Button, Group, Container, Center } from '@mantine/core';
import { login } from './actions';

export default function Login() {
  return (
    <Center>
      <Container>
        <form>
          <TextInput label="Email" placeholder="Email" id="email" name="email" />
          <TextInput
            mt="md"
            label="Password"
            placeholder="Password"
            id="password"
            name="password"
          />

          <Group justify="center" mt="xl">
            <Button type="submit" formAction={login}>
              Sign In
            </Button>
          </Group>
        </form>
      </Container>
    </Center>
  );
}
