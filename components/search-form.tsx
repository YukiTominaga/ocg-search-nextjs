import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchFormProps {
  onSearch: (query: string) => Promise<void>;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
}

export function SearchForm({ onSearch, searchQuery, onSearchQueryChange }: SearchFormProps) {
  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchQuery.trim()) return;
    await onSearch(searchQuery);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchQueryChange(event.target.value);
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="relative flex-1">
        <Input
          type="search"
          placeholder="検索例: デッキからカードを墓地へ送る"
          value={searchQuery}
          onChange={handleInputChange}
          className="py-2 pl-10 pr-4"
          aria-label="検索"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" size={20} />
      </div>
    </form>
  );
}
