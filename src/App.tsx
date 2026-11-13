import { useEffect } from 'react'
import { CONTACT_LINKS, GAMES } from './content.ts'
import { useHashRoute } from './useHashRoute.ts'
import { Home } from './pages/Home.tsx'
import { WhiteWillow } from './pages/WhiteWillow.tsx'
import { BobaCafe } from './pages/BobaCafe.tsx'
import { TypingSoccer } from './pages/TypingSoccer.tsx'

const PAGES: Record<string, () => React.JSX.Element> = {
  '': Home,
  'white-willow': WhiteWillow,
  'boba-cafe': BobaCafe,
  'typing-soccer': TypingSoccer,
}

function NotFound() {
  return (
    <div className="game-intro">
      <h1>This page is not in the sketchbook</h1>
      <p>
        <a href="#/">Back to all games</a>
      </p>
    </div>
  )
}

export function App() {
  const route = useHashRoute()
  const Page = PAGES[route] ?? NotFound
  const game = GAMES.find((g) => g.slug === route)

  useEffect(() => {
    document.title = game ? `${game.title} | Irene, game artist` : 'Irene, game artist'
    window.scrollTo(0, 0)
  }, [game])

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-head">
        <a className="name" href="#/" aria-current={route === '' ? 'page' : undefined}>
          Irene
        </a>
        <nav aria-label="Games">
          {GAMES.map((g) => (
            <a key={g.slug} href={`#/${g.slug}`} aria-current={route === g.slug ? 'page' : undefined}>
              {g.title}
            </a>
          ))}
        </nav>
      </header>
      <main id="main" tabIndex={-1}>
        <Page />
      </main>
      <footer className="site-foot">
        <p>Irene, game artist, Bali.</p>
        <p>
          {CONTACT_LINKS.map((l) => (
            <a key={l.href} href={l.href} aria-label={`Irene on ${l.label}`} title={l.label}>
              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path d={l.icon} fill="currentColor" />
              </svg>
            </a>
          ))}
        </p>
      </footer>
    </>
  )
}
