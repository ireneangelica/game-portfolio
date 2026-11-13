import type { CSSProperties, ReactNode } from 'react'
import type { Game } from './content.ts'

const img = (name: string) => `${import.meta.env.BASE_URL}img/${name}.webp`

type SheetProps = {
  name: string
  alt: string
  width: number
  height: number
  caption?: ReactNode
  tilt?: number
  hero?: boolean
  className?: string
}

/** A piece of art on a white sheet taped to the page. The site's one repeated motif. */
export function Sheet({ name, alt, width, height, caption, tilt = 0, hero, className = '' }: SheetProps) {
  return (
    <figure className={`sheet ${className}`} style={{ '--tilt': `${tilt}deg` } as CSSProperties}>
      <img
        src={img(name)}
        alt={alt}
        width={width}
        height={height}
        loading={hero ? 'eager' : 'lazy'}
        fetchPriority={hero ? 'high' : 'auto'}
        decoding="async"
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export function GameIntro({ game }: { game: Game }) {
  return (
    <header className="game-intro">
      <p className="back">
        <a href="#/">Back to all games</a>
      </p>
      <h1>{game.title}</h1>
      <p className="pitch">{game.pitch}</p>
      <p className="credit">{game.credit}</p>
    </header>
  )
}

export function RoleAndFacts({ game }: { game: Game }) {
  return (
    <section className="role" aria-labelledby="role-h">
      <div>
        <h2 id="role-h">My role</h2>
        <p>{game.role}</p>
        {game.repo && (
          <p>
            <a href={game.repo}>{game.title} source on GitHub</a>
          </p>
        )}
      </div>
      <dl className="facts">
        {game.facts.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
