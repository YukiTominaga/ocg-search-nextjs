'use client'

import { Loader2 } from 'lucide-react'
import { useSearch } from '@/hooks/useSearch'
import { SearchForm } from '@/components/search-form'
import { CardItem } from '@/components/card-item'

export default function Page() {
  console.log("render page")
  const { searchResults, isLoading, error, search, hasSearched } = useSearch()

  return (
    <div>
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4 flex flex-col items-center space-y-2">
            <Loader2 className="h-8 w-8 animate-spin text-gray-800" />
            <p className="text-gray-800 font-medium">検索中...</p>
          </div>
        </div>
      )}
      <div className="fixed top-0 left-0 right-0 bg-white z-10 shadow-md">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <SearchForm onSearch={search} />
        </div>
      </div>
      <div className="fixed top-[72px] bottom-0 left-0 right-0 overflow-y-auto search-results-container">
        <div className="flex flex-col items-center p-4 max-w-3xl mx-auto">
          {error && <p className="text-red-500">{error}</p>}

          <div className="w-full space-y-6">
            {hasSearched && searchResults.length === 0 && !isLoading && !error ? (
              <div className="text-center py-8">
                <p className="text-gray-500">条件に合致するカードがありませんでした</p>
              </div>
            ) : (
              searchResults.map((card, index) => (
                <CardItem key={index} card={card} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
