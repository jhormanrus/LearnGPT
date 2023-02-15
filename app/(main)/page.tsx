import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home (): JSX.Element {
  return (
    <main className={inter.className}>
      hello
    </main>
  )
}
