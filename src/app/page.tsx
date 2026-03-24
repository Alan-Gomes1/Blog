import { Container } from "../components/Container";
import Header from "../components/Header";
import { SpinLoader } from "../components/SpinLoader";

export default async function HomePage() {
  return (
    <Container>
      < Header />
      <SpinLoader className="min-h-screen" />
    </Container>
  );
}
