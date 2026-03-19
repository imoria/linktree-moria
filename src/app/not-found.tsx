export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a0a0a',
      color: '#f5f5f5',
      fontFamily: 'Inter, sans-serif',
    }}>
      <h1>404 - Página não encontrada</h1>
      <p>A página que você procura não existe.</p>
      <a href="/" style={{ color: '#fff', textDecoration: 'underline', marginTop: 16 }}>Voltar para a página inicial</a>
    </div>
  );
}
