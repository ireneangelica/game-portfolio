import { useEffect, useRef, useState } from 'react'
import type { AnimationItem } from 'lottie-web'

type Props = {
  file: string
  /** Read by screen readers in place of the animation. */
  label: string
  /** width / height of the animation, reserves space before it loads. */
  ratio: number
  loop?: boolean
  controls?: boolean
  onDone?: () => void
  className?: string
}

/** Plays one of the game's Lottie files. Loads only when scrolled near, holds still under reduced motion. */
export function Lottie({ file, label, ratio, loop = false, controls = true, onDone, className = '' }: Props) {
  const box = useRef<HTMLDivElement>(null)
  const anim = useRef<AnimationItem | null>(null)
  const done = useRef(onDone)
  done.current = onDone
  const [state, setState] = useState<'loading' | 'ready' | 'error'>('loading')
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const el = box.current
    if (!el) return
    let cancelled = false
    setState('loading')
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const load = async () => {
      try {
        const [{ default: lottie }, res] = await Promise.all([
          import('lottie-web/build/player/lottie_light'),
          fetch(`${import.meta.env.BASE_URL}lottie/${file}.json`),
        ])
        if (!res.ok) throw new Error(`${file}.json responded ${res.status}`)
        const animationData = await res.json()
        if (cancelled) return
        const a = lottie.loadAnimation({ container: el, renderer: 'svg', loop, autoplay: !still, animationData })
        anim.current = a
        a.addEventListener('complete', () => {
          setPlaying(false)
          done.current?.()
        })
        if (still) {
          // reduced motion: show the finished frame instead of moving
          a.goToAndStop(a.totalFrames - 1, true)
          done.current?.()
        }
        setPlaying(!still)
        setState('ready')
      } catch (err) {
        console.error('Animation failed to load', err)
        if (!cancelled) setState('error')
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        io.disconnect()
        void load()
      },
      { rootMargin: '300px' },
    )
    io.observe(el)

    return () => {
      cancelled = true
      io.disconnect()
      anim.current?.destroy()
      anim.current = null
    }
  }, [file, loop])

  const toggle = () => {
    const a = anim.current
    if (!a) return
    if (playing) a.pause()
    else if (!loop && a.currentFrame >= a.totalFrames - 1) a.goToAndPlay(0, true)
    else a.play()
    setPlaying(!playing)
  }

  return (
    <div className={`lottie ${className}`}>
      <div ref={box} className="lottie-stage" style={{ aspectRatio: ratio }} role="img" aria-label={label} />
      {state === 'loading' && <p className="lottie-note">Loading animation</p>}
      {state === 'error' && (
        <p className="lottie-note" role="alert">
          This animation could not load. Reload the page to try again.
        </p>
      )}
      {controls && state === 'ready' && (
        <button type="button" className="quiet" onClick={toggle}>
          {playing ? 'Pause' : 'Play'}
        </button>
      )}
    </div>
  )
}
