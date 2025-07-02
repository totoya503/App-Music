import styled from "styled-components";

export default function HeaderBar() {
  return (
    <Header>
      <SearchInput type="text" placeholder="¿Qué quieres reproducir?" />
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
