import { WHITE_WILLOW } from '../content.ts'
import { Lottie } from '../Lottie.tsx'
import { GameIntro, RoleAndFacts, Sheet } from '../parts.tsx'

export function WhiteWillow() {
  return (
    <>
      <GameIntro game={WHITE_WILLOW} />
      <Sheet
        name="ww-title"
        alt="White Willow title screen: a herb shop beside a river village, with New Game, Load Game and Settings on a parchment menu"
        width={1800}
        height={1093}
        hero
        caption="Title screen"
      />
      <RoleAndFacts game={WHITE_WILLOW} />

      <section aria-labelledby="herbs-h">
        <h2 id="herbs-h">From line to colour</h2>
        <p className="lede">Each herb starts as line art, then gets painted. This is the cinnamon bundle.</p>
        <div className="pair">
          <Sheet
            name="ww-cinnamon-line"
            alt="Line drawing of a bundle of cinnamon sticks tied with string"
            width={700}
            height={1179}
            tilt={-1.5}
            caption="Line art"
          />
          <Sheet
            name="ww-cinnamon"
            alt="The same cinnamon bundle painted in warm browns"
            width={700}
            height={1167}
            tilt={1}
            caption="Painted"
          />
        </div>
      </section>

      <section aria-labelledby="more-h">
        <h2 id="more-h">More herbs and the villagers</h2>
        <div className="scatter">
          <Sheet
            name="ww-cayenne"
            alt="Painting of three red cayenne peppers"
            width={900}
            height={850}
            tilt={1.5}
            caption="Cayenne pepper"
          />
          <Sheet
            name="ww-ginger"
            alt="Painting of a ginger root"
            width={600}
            height={560}
            tilt={-2}
            caption="Ginger"
          />
          <Sheet
            name="ww-characters"
            alt="Line drawings of two villagers: a woman in a shawl and apron, and a man in a cap and vest"
            width={1242}
            height={1308}
            className="tall"
            caption="Character line art"
          />
        </div>
      </section>

      <section aria-labelledby="motion-h">
        <h2 id="motion-h">In motion</h2>
        <div className="idea">
          <p className="lede">
            Some assets move. This is the oven from the shop, animated in Lottie: the pot is stirred and steam rises
            while a potion boils.
          </p>
          <figure className="sheet" style={{ '--tilt': '1deg' } as React.CSSProperties}>
            <Lottie file="ww-boiling" ratio={1} loop label="The stone oven with a pot boiling over the fire, animated" />
            <figcaption>The oven, boiling</figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="ingame-h">
        <h2 id="ingame-h">In the game</h2>
        <p className="lede">
          The herbs sit in the drawers on the left. A villager asks for a remedy at the window while the suspicion bar
          fills.
        </p>
        <Sheet
          name="ww-shop"
          alt="White Willow gameplay: herb drawers on the left, a stone oven and grinder in the middle, and a villager at the window saying she needs something to ease her throat"
          width={1314}
          height={738}
          caption="The herb shop counter, day 1"
        />
      </section>
    </>
  )
}
