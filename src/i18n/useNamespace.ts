import { useEffect, useState } from 'react'
import i18n, { preloadNamespaces } from './i18n'

export function useNamespace(namespace: string | readonly string[]) {
  const namespaces = Array.isArray(namespace) ? namespace : [namespace]
  const [ready, setReady] = useState(() => namespaces.every((ns) => i18n.hasResourceBundle(i18n.language, ns)))

  useEffect(() => {
    let active = true
    void preloadNamespaces(namespaces).then(() => {
      if (active) setReady(true)
    })
    return () => {
      active = false
    }
  }, [namespaces.join('|')])

  return { ready }
}

