import { ABOUT, BOBA_CAFE, TYPING_SOCCER, WHITE_WILLOW } from '../content.ts'
import type { Game } from '../content.ts'
import { Lottie } from '../Lottie.tsx'
import { Sheet } from '../parts.tsx'

function Entry({ game, children, className }: { game: Game; children: React.ReactNode; className: string }) {
  return (
    <article className={`entry ${className}`}>
      <div className="entry-art">{children}</div>
      <div className="entry-text">
        <h3>
          <a href={`#/${game.slug}`}>{game.title}</a>
        </h3>
        <p>{game.pitch}</p>
        <p className="credit">{game.credit}</p>
      </div>
    </article>
  )
}

export function Home() {
  return (
    <>
      <section className="hello">
        <div>
          <h1>Passionate about learning design</h1>
          <p className="pitch">
            I'm Irene, a game artist based in Bali. Starting small and getting gradually bigger, learning by shipping
            with a team.
          </p>
        </div>
        <figure className="sheet" style={{ '--tilt': '2deg' } as React.CSSProperties}>
          <Lottie file="shih-tzu" ratio={916 / 812} loop label="A shih tzu barista in an apron shaking a drink, animated" />
          <figcaption>Shih Tzu Barista</figcaption>
        </figure>
      </section>

      <section className="about" aria-labelledby="about-h">
        <h2 id="about-h">About me</h2>
        <div>
          {ABOUT.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section aria-labelledby="games-h">
        <h2 id="games-h">Three games so far</h2>

        <Entry game={WHITE_WILLOW} className="entry-wide">
          <Sheet
            name="ww-title"
            alt="White Willow title screen: a herb shop beside a river village, with a parchment menu"
            width={1800}
            height={1093}
            caption="Title screen"
          />
        </Entry>

        <Entry game={BOBA_CAFE} className="entry-pair">
          <Sheet
            name="boba-storefront"
            alt="Drawing of the Boba Cafe storefront with two stools outside"
            width={1200}
            height={1022}
            tilt={-1.5}
            caption="The storefront"
          />
          <figure className="sheet" style={{ '--tilt': '2deg' } as React.CSSProperties}>
            <Lottie file="corgi" ratio={859 / 829} loop label="A corgi barista in an apron grinding tea leaves, animated" />
            <figcaption>Corgi Barista</figcaption>
          </figure>
        </Entry>

        <Entry game={TYPING_SOCCER} className="entry-flip">
          <Sheet
            name="ts-match"
            alt="Typing Soccer match: Brazil against Argentina on a striped pitch, with the word referee in the typing prompt"
            width={1600}
            height={963}
            tilt={-1}
            caption="A typing duel, Brazil v Argentina"
          />
        </Entry>
      </section>
      <section aria-labelledby="learning-h">
        <h2 id="learning-h">Learning to build</h2>
        <div className="idea">
          <div>
            <h3>Pixel platformer (learning)</h3>
            <p>
              A small platformer I built in Godot to learn how a game is put together. I followed the Brackeys beginner
              tutorial and used the asset pack that comes with it, so the art, sound and music here are not mine.
            </p>
            <p>
              What I built along the way: a knight that runs and jumps, a slime that patrols between walls, coins to
              pick up, and a fall that slows time and restarts the level.
            </p>
            <p className="credit">Solo learning project. Code by me, art provided.</p>
          </div>
          <Sheet
            name="godot-bridge"
            alt="Pixel art platformer: a knight crosses a rope bridge between stone platforms, with coins, a potion and grassy ledges above"
            width={1280}
            height={720}
            tilt={1}
            className="pixel"
            caption="Running in Godot. Art from the tutorial's asset pack."
          />
        </div>
      </section>
    </>
  )
}
