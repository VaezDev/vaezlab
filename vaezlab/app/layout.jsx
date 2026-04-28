import './globals.css'
export const metadata = {
  title: 'VaezLab — Agencia de Desarrollo Web',
  description: 'Construimos la web que tu negocio necesita. Sitios corporativos, landing pages, e-commerce y portfolios que convierten visitantes en clientes.',
}
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
