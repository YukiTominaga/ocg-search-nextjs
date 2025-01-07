'use client';

import { Loader2 } from 'lucide-react';
import { useSearch } from '@/hooks/useSearch';
import { CardItem } from '@/components/card-item';
import { SearchHeader } from '@/components/search-header';

export default function Page() {
  const { searchResults, isLoading, error, search, hasSearched } = useSearch();

  return (
    <div>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-4">
            <Loader2 className="h-8 w-8 animate-spin text-gray-800" />
            <p className="font-medium text-gray-800">検索中...</p>
          </div>
        </div>
      )}
      <SearchHeader onSearch={search} />
      <div className="search-results-container fixed bottom-0 left-0 right-0 top-[72px] overflow-y-auto">
        <div className="mx-auto flex max-w-3xl flex-col items-center p-4">
          {error && <p className="text-red-500">{error}</p>}

          <div className="w-full space-y-6">
            {hasSearched && searchResults.length === 0 && !isLoading && !error ? (
              <div className="py-8 text-center">
                <p className="text-gray-500">条件に合致するカードがありませんでした</p>
              </div>
            ) : (
              searchResults.map((card, index) => <CardItem key={index} card={card} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
