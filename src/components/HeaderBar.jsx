import styled from "styled-components";
import { useState } from "react";

export default function HeaderBar({ onSearch }) {

    const [query, setQuery] = useState("");

    
const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim()) {
        onSearch(query);
    }
};

  return (
    <Header>
      
    <SearchInput 
        type="text"
        placeholder="¿Qué quieres escuchar?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearch} 
    />

    </Header>
  );
}

const Header = styled.header`
  background-color: #121212;
  padding: 16px;
  display: flex;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 60%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
`;
