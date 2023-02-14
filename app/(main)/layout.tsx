import Link from "next/link"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/play">Play</Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}