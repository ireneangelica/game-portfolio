import { useState } from 'react'
import { BOBA_CAFE } from '../content.ts'
import { SEAL_FILE, TEAS, TOPPINGS, dropFile, pourFile } from '../cupFile.ts'
import type { TeaId, ToppingId } from '../cupFile.ts'
import { Lottie } from '../Lottie.tsx'
import { GameIntro, RoleAndFacts, Sheet } from '../parts.tsx'

const CUP_RATIO = 840 / 1476

/** The game's milk tea builder: topping drops in, tea pours, the cup gets sealed. Same order as the game. */
function Builder() {
  const [topping, setTopping] = useState<ToppingId | null>(null)
  const [tea, setTea] = useState<TeaId | null>(null)
  const [poured, setPoured] = useState(false)

  const pickTopping = (id: ToppingId) => {
    setTopping(id)
    setTea(null)
    setPoured(false)
  }
  const pickTea = (id: TeaId) => {
    setTea(id)
    setPoured(false)
  }
  const reset = () => {
    setTopping(null)
    setTea(null)
    setPoured(false)
  }

  const toppingName = TOPPINGS.find((t) => t.id === topping)?.name
  const teaName = TEAS.find((t) => t.id === tea)?.name
  const cup = topping ? (tea ? pourFile(tea, topping) : dropFile(topping)) : null

  return (
    <div className="builder">
      <div className="builder-controls">
        <fieldset>
          <legend>1. Pick a topping</legend>
          {TOPPINGS.map((t) => (
            <label key={t.id} className="choice">
              <input type="radio" name="topping" checked={topping === t.id} onChange={() => pickTopping(t.id)} />
              {t.name}
            </label>
          ))}
        </fieldset>
        <fieldset disabled={!topping}>
          <legend>2. Pick a tea</legend>
          {TEAS.map((t) => (
            <label key={t.id} className="choice">
              <input type="radio" name="tea" checked={tea === t.id} onChange={() => pickTea(t.id)} />
              {t.name}
            </label>
          ))}
        </fieldset>
        <p className="builder-result" aria-live="polite">
          {poured && teaName && toppingName
            ? `${teaName} with ${toppingName.toLowerCase()}`
            : topping
              ? 'Now pick a tea.'
              : 'Pick a topping to start.'}
        </p>
        {topping && (
          <button type="button" onClick={reset}>
            Make another
          </button>
        )}
      </div>

      <div className="sheet cup" style={{ aspectRatio: CUP_RATIO }}>
        {!cup && <p className="lottie-note">The cup shows up here.</p>}
        {cup && (
          <Lottie
            key={cup}
            file={cup}
            ratio={CUP_RATIO}
            controls={false}
            label={tea ? `${teaName} pouring over ${toppingName}` : `${toppingName} dropping into the cup`}
            onDone={tea ? () => setPoured(true) : undefined}
          />
        )}
        {poured && (
          <Lottie file={SEAL_FILE} ratio={CUP_RATIO} controls={false} label="The cup gets sealed" className="seal" />
        )}
      </div>
    </div>
  )
}

export function BobaCafe() {
  return (
    <>
      <GameIntro game={BOBA_CAFE} />
      <Sheet
        name="boba-inside"
        alt="Drawing of the inside of the boba cafe: tea thermoses on a shelf, a sealing machine, topping bins, syrups, cups and finished drinks"
        width={1800}
        height={851}
        hero
        caption="Inside the store"
      />
      <RoleAndFacts game={BOBA_CAFE} />

      <section aria-labelledby="baristas-h">
        <h2 id="baristas-h">The two baristas</h2>
        <p className="lede">A corgi on the tea grinder and a shih tzu on the shaker. These are the animations from the game.</p>
        <div className="pair">
          <figure className="sheet" style={{ '--tilt': '-1.5deg' } as React.CSSProperties}>
            <Lottie file="corgi" ratio={859 / 829} loop label="The corgi barista grinding tea leaves, animated" />
            <figcaption>Corgi Barista</figcaption>
          </figure>
          <figure className="sheet" style={{ '--tilt': '1.5deg' } as React.CSSProperties}>
            <Lottie file="shih-tzu" ratio={916 / 812} loop label="The shih tzu barista shaking a drink, animated" />
            <figcaption>Shih Tzu Barista</figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="builder-h">
        <h2 id="builder-h">Make a milk tea</h2>
        <p className="lede">The same steps as in the game: the topping drops in, the tea pours, the cup gets sealed.</p>
        <Builder />
      </section>

      <section aria-labelledby="stills-h">
        <h2 id="stills-h">Drawings</h2>
        <div className="scatter">
          <Sheet
            name="boba-storefront"
            alt="Drawing of the Boba Cafe storefront with two stools outside"
            width={1200}
            height={1022}
            tilt={-1}
            caption="The storefront"
          />
          <Sheet
            name="boba-brown-sugar"
            alt="Drawing of a brown sugar milk tea with boba pearls and a straw"
            width={700}
            height={976}
            tilt={2}
            className="tall"
            caption="Brown sugar milk tea"
          />
          <Sheet
            name="boba-corgi"
            alt="Watercolor drawing of the corgi barista grinding tea leaves"
            width={900}
            height={848}
            tilt={1}
            caption="Corgi, still frame"
          />
        </div>
      </section>
    </>
  )
}
