import ErrorMessage from "../components/ErrorMessage";

export default function NotFound() {
  return (
    <ErrorMessage
      pageTitle="Página não encontrada"
      contentTitle="404"
      content="Erro 404 - Página não encontrada."
    />
  );
}
