import { SearchForm } from '@/components/search-form';
import { SearchFilter } from '@/components/search-filter';
import { useSearchFilters } from '@/hooks/useSearchFilters';
import type { Filters } from '@/hooks/useSearchFilters';
import { useState } from 'react';

interface SearchHeaderProps {
  onSearch: (query: string, filterString: string) => Promise<void>;
}

export function SearchHeader({ onSearch }: SearchHeaderProps) {
  const { setFilters, getFilterString } = useSearchFilters();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    const filterString = getFilterString() || '';
    await onSearch(query, filterString);
  };

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  const handleFilterSearch = () => {
    const filterString = getFilterString() || '';
    onSearch(searchQuery, filterString);
  };

  return (
    <div className="fixed left-0 right-0 top-0 z-10 bg-white shadow-md">
      <div className="mx-auto max-w-3xl px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <SearchForm onSearch={handleSearch} searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} />
          </div>
          <SearchFilter onFilterChange={handleFilterChange} onSearch={handleFilterSearch} searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
}
