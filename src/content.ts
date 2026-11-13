// All site text lives here so it can be edited without touching layout.

export const GITHUB = 'https://github.com/ireneangelica'

// Each link shows as a logo. `icon` is the SVG path of the brand mark on a 24x24 grid (from simpleicons.org).
// To add another: { label: 'Instagram', href: 'https://…', icon: '<path data>' }
export type ContactLink = { label: string; href: string; icon: string }

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://id.linkedin.com/in/ireneangelika',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'GitHub',
    href: GITHUB,
    icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
]

export type Game = {
  slug: string
  title: string
  pitch: string
  credit: string
  facts: [label: string, value: string][]
  role: string
  repo?: string
}

export const WHITE_WILLOW: Game = {
  slug: 'white-willow',
  title: 'White Willow',
  pitch:
    "A 2D puzzle game where the player runs a witch's herb shop and brews the right potion for each sick villager, while a witch hunter watches.",
  credit: 'Team game. I am one of the artists.',
  facts: [
    ['Role', 'Artist'],
    ['Team', 'Kuwa Kuwi'],
    ['Tools', 'Procreate, Figma, Lottie'],
    ['Platform', 'macOS'],
    ['Status', 'In development'],
  ],
  role: 'I made the assets for some of the herbs, the female character, the herb shop and the background. In Figma I animate scenes, like the camera pan down to the shop, and I use Lottie to add motion to certain assets. I also look for a suitable soundtrack and SFX to support White Willow. The game is inspired by Papers, Please and Strange Horticulture.',
}

export const BOBA_CAFE: Game = {
  slug: 'boba-cafe',
  title: 'Boba Cafe',
  pitch:
    'A cozy 2D boba cafe run by two doggo baristas. Players can mix their own milk tea, complete with toppings.',
  credit: 'Solo game. All the art is mine.',
  facts: [
    ['Role', 'Artist'],
    ['Team', 'Solo'],
    ['Tools', 'Adobe Fresco, Figma, Lottie, Swift'],
    ['Platform', 'iOS'],
    ['Status', 'Private TestFlight'],
  ],
  role: 'For this game I drew the assets: the baristas, the storefront, the inside of the store, the milk thermos, the toppings and the drinks. Because the game needs a lot of motion, I used Lottie to animate the baristas, the tea pouring and the toppings being added.',
  repo: `${GITHUB}/BobaPlace`,
}

export const TYPING_SOCCER: Game = {
  slug: 'typing-soccer',
  title: 'Typing Soccer',
  pitch:
    'A FIFA World Cup themed multiplayer typing game for macOS. A combination of fast typing and soccer strategy.',
  credit: 'Team game. I did the hi-fi design, the court layout and the design document.',
  facts: [
    ['Role', 'Artist'],
    ['Team', '3 v 1 Team'],
    ['Platform', 'macOS'],
    ['Status', 'Public TestFlight'],
  ],
  role: 'I designed the hi-fi screens and the court layout for the game. I also wrote the game design documentation and handled TestFlight deployment.',
  repo: `${GITHUB}/TypingSoccer`,
}

export const GAMES = [WHITE_WILLOW, BOBA_CAFE, TYPING_SOCCER]

export const ABOUT = [
  "I'm a student at the Apple Developer Academy in Bali, where I work as a junior product designer in team projects.",
  'Before the Academy, I worked in project management at Staffinc Group, running HR operations across multiple clients in a hybrid setup. It taught me how to keep many moving parts on track.',
  "Now, in game development, I take the role of artist. I've done the art for three games so far, and I tried coding one 2D pixel game in Godot. I'm still early with game engines, and I'd rather say so than pretend otherwise.",
]
