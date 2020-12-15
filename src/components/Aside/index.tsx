import React, { useCallback, useState } from 'react';
import { FaArchive, FaGripLines, FaHeart } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import booksSvg from 'assets/books.svg';
import { useTheme } from 'hooks/theme';
import Toggle from 'components/Toggle';
import { Container, Header, Content, LinkMenu } from './styles';

const link = [
  { id: 0, title: 'Dashboard', to: '/', icon: <FaArchive /> },

  {
    id: 1,
    title: 'Favoritos',
    to: '/favorites',
    icon: <FaHeart />,
  },
];

const Aside: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark');

  const [selected, setSelected] = useState(0);
  const [menuMobile, setMenuMobile] = useState(false);

  const handleChangeTheme = useCallback(() => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  }, [darkTheme, toggleTheme]);

  const handleMenuMobile = useCallback(() => {
    setMenuMobile(prevState => !prevState);
  }, []);

  const handleLinkSelect = useCallback((id: number) => {
    setSelected(id);
    setMenuMobile(prevState => !prevState);
  }, []);

  return (
    <Container menuMobile={menuMobile}>
      <button type="button" onClick={handleMenuMobile}>
        {menuMobile ? <FiX size={30} /> : <FaGripLines size={30} />}
      </button>

      <Header>
        <img src={booksSvg} alt="Livros" />
        <h1>Google Books</h1>
      </Header>

      <Content menuMobile={menuMobile}>
        {link.map(linkMenu => (
          <button
            type="button"
            key={linkMenu.id}
            onClick={() => handleLinkSelect(linkMenu.id)}
          >
            <LinkMenu to={linkMenu.to} selected={linkMenu.id === selected}>
              {linkMenu.icon}
              {linkMenu.title}
            </LinkMenu>
          </button>
        ))}
        <Toggle checked={darkTheme} onChange={handleChangeTheme} />
      </Content>
    </Container>
  );
};

export default Aside;
