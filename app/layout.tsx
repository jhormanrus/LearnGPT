import './globals.css'

export default function RootLayout ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="es">
      <head />
      <body>{children}</body>
    </html>
  )
}
