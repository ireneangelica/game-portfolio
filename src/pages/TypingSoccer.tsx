import { TYPING_SOCCER } from '../content.ts'
import { GameIntro, RoleAndFacts, Sheet } from '../parts.tsx'
import { Court } from './Court.tsx'

// From Documentation/Game-Design-Document.md in the TypingSoccer repo.
const DUELS = [
  ['Kickoff', 'Opening whistle, or after a goal', 'Win the first word to claim possession'],
  ['Interception', 'A defender catches the ball carrier', 'Win the word to take or keep the ball'],
  ['Shot', 'The carrier reaches the penalty area', "Beat the goalkeeper's word to score"],
]

// Captured from the build on GitHub, single player, Brazil against the AI.
const SHOTS: [name: string, alt: string, caption: string][] = [
  [
    'ts-menu',
    'Typing Soccer main menu over a floodlit stadium: Single Player, Multiplayer 1v1, Multiplayer 2v2, How To Play and Exit',
    'Main menu',
  ],
  [
    'ts-setup',
    'Match setup screen with nine national teams. Brazil is selected and faces Argentina.',
    'Picking a nationality',
  ],
  [
    'ts-shot',
    'A shot on goal: the ball carrier is in the penalty area and the prompt shows the word snapshot',
    'The shot, a longer word against the keeper',
  ],
  [
    'ts-results',
    'Full time screen showing the score and match stats: words per minute, accuracy, duels, shots and saves',
    'Full time, with match stats',
  ],
  [
    'ts-profile',
    'Profile screen with level, career stats, match history and achievements',
    'Profile and achievements',
  ],
  ['ts-howto', 'How To Play screen with sections for basics, game modes, kickoff, keys and shooting', 'How To Play'],
  ['ts-settings', 'Settings panel with language, music, sound effects and text size', 'Settings'],
]

export function TypingSoccer() {
  return (
    <>
      <GameIntro game={TYPING_SOCCER} />
      <Sheet
        name="ts-match"
        alt="Typing Soccer match: Brazil against Argentina on a striped pitch. Two players contest the ball at the halfway line and the prompt shows the word referee."
        width={1600}
        height={963}
        hero
        caption="An interception duel. The rival's progress shows in orange under the word."
      />
      <RoleAndFacts game={TYPING_SOCCER} />

      <section aria-labelledby="idea-h">
        <h2 id="idea-h">The idea</h2>
        <div className="idea">
          <div>
            <p className="lede">
              You never steer a player. The players run themselves, and every contested moment on the pitch is decided
              by who finishes the word on screen first.
            </p>
            <p>
              Words get harder as the ball nears the goal. Lose a duel and your player slows down for a few seconds, so
              a lost word costs field position as well as the ball.
            </p>
          </div>
          <figure className="sheet" style={{ '--tilt': '1deg' } as React.CSSProperties}>
            <Court />
            <figcaption>The court layout: three lanes, one outfield player per lane and a keeper on each side</figcaption>
          </figure>
        </div>
        <div className="table-wrap">
          <table>
            <caption>The three typing duels</caption>
            <thead>
              <tr>
                <th scope="col">Duel</th>
                <th scope="col">When it happens</th>
                <th scope="col">What you are typing for</th>
              </tr>
            </thead>
            <tbody>
              {DUELS.map(([duel, trigger, goal]) => (
                <tr key={duel}>
                  <th scope="row">{duel}</th>
                  <td>{trigger}</td>
                  <td>{goal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="screens-h">
        <h2 id="screens-h">Screens from the game</h2>
        <p className="lede">Captured from the current build on GitHub, playing single player as Brazil.</p>
        <div className="shots">
          {SHOTS.map(([name, alt, caption]) => (
            <Sheet key={name} name={name} alt={alt} width={1600} height={963} caption={caption} />
          ))}
        </div>
      </section>
    </>
  )
}
