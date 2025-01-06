import { useState, useEffect } from 'react'
import { SearchResult } from '@/types/search'

export function useSearch() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [shouldScroll, setShouldScroll] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  useEffect(() => {
    if (shouldScroll && !isLoading) {
      const container = document.querySelector('.search-results-container')
      if (container) {
        container.scrollTop = 0
      }
      setShouldScroll(false)
    }
  }, [shouldScroll, isLoading])

  const search = async (query: string, filter?: string) => {
    setIsLoading(true)
    setError(null)
    setShouldScroll(true)
    setHasSearched(true)
    try {
      const response = await fetch('/api/v1/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, filter }),
      })
      if (!response.ok) throw new Error('検索に失敗しました')
      const data = await response.json()
      setSearchResults(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : '検索に失敗しました')
      setSearchResults([])
    } finally {
      setIsLoading(false)
    }
  }

  return { searchResults, isLoading, error, search, hasSearched }
}
