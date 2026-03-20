import { Container } from "../components/Container";
import { SpinLoader } from "../components/SpinLoader";

export default async function HomePage() {
  return (
    <Container>
      <SpinLoader className="min-h-screen" />
    </Container>
  );
}
