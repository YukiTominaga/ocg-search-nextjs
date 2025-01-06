import { Search } from 'lucide-react'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { SearchFilter } from '@/components/search-filter'
import { useSearchFilters } from '@/hooks/useSearchFilters'
import type { Filters } from '@/hooks/useSearchFilters'

interface SearchFormProps {
  onSearch: (query: string, filterString?: string) => Promise<void>
}

export function SearchForm({ onSearch }: SearchFormProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const { setFilters, getFilterString } = useSearchFilters()

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!searchQuery.trim()) return
    await onSearch(searchQuery, getFilterString())
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters)
  }

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="flex gap-2 items-center">
        <div className="relative flex-1">
          <Input
            type="search"
            placeholder="検索例: デッキからカードを墓地へ送る"
            value={searchQuery}
            onChange={handleInputChange}
            className="pl-10 pr-4 py-2"
            aria-label="検索"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <SearchFilter onFilterChange={handleFilterChange} />
      </div>
    </form>
  )
}
