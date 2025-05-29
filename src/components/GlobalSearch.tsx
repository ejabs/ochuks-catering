
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface GlobalSearchProps {
  onSearch?: (searchTerm: string) => void;
  placeholder?: string;
  className?: string;
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({ 
  onSearch, 
  placeholder = "Search products...", 
  className = "" 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    } else {
      // Navigate to products page with search term
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-20"
        />
        <Button 
          type="submit"
          size="sm"
          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-orange-600 hover:bg-orange-700"
        >
          Search
        </Button>
      </div>
    </form>
  );
};
