import { SearchForm } from '@/components/search-form'
import { SearchFilter } from '@/components/search-filter'
import { useSearchFilters } from '@/hooks/useSearchFilters'
import type { Filters } from '@/hooks/useSearchFilters'

interface SearchHeaderProps {
  onSearch: (query: string, filterString: string) => Promise<void>
}

export function SearchHeader({ onSearch }: SearchHeaderProps) {
  const { setFilters, getFilterString } = useSearchFilters()

  const handleSearch = async (query: string) => {
    const filterString = getFilterString() || ''
    await onSearch(query, filterString)
  }

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters)
  }

  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-10 shadow-md">
      <div className="max-w-3xl mx-auto px-4 py-4">
        <div className="flex gap-2 items-center">
          <div className="flex-1">
            <SearchForm onSearch={handleSearch} />
          </div>
          <SearchFilter onFilterChange={handleFilterChange} />
        </div>
      </div>
    </div>
  )
}
