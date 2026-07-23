import { useState, useEffect } from 'react'
import * as github from '../services/github'

interface UseGithubResult<T> {
  data: T | null
  loading: boolean
  error: string | null
  refetch: () => void
}

function useFetch<T>(fetcher: () => Promise<T>): UseGithubResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [trigger, setTrigger] = useState(0)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    fetcher()
      .then((result) => {
        if (!cancelled) {
          setData(result)
          setLoading(false)
        }
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger])

  const refetch = () => setTrigger((p) => p + 1)

  return { data, loading, error, refetch }
}

export function useGitHubUser(username: string) {
  return useFetch(() => github.getUser(username))
}

export function useGitHubRepos(username: string) {
  return useFetch(() => github.getRepos(username))
}

export function useGitHubPinnedRepos(username: string) {
  return useFetch(() => github.getPinnedRepos(username))
}

export function useGitHubLanguages(username: string) {
  return useFetch(() => github.getAggregatedLanguages(username))
}

export function useGitHubEvents(username: string) {
  return useFetch(() => github.getUserEvents(username))
}

export function useGitHubOrgs(username: string) {
  return useFetch(() => github.getUserOrganizations(username))
}

export { github }
