import { useSyncExternalStore } from 'react'

// ponytail: four static pages, so the URL hash is the router. Swap for react-router if routes grow params.
const subscribe = (onChange: () => void) => {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}

/** Current route without the leading "#/", "" for home. */
export const useHashRoute = () =>
  useSyncExternalStore(subscribe, () => window.location.hash.replace(/^#\/?/, ''))
