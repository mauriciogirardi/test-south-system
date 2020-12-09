import React, { useCallback, useState } from 'react';
import { FaArchive, FaGripLines, FaHeart } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import booksSvg from 'assets/books.svg';
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
  const [selected, setSelected] = useState(0);
  const [menuMobile, setMenuMobile] = useState(true);

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
        {menuMobile ? (
          <FiX size={30} color="#fff" />
        ) : (
          <FaGripLines size={30} color="#fff" />
        )}
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
      </Content>
    </Container>
  );
};

export default Aside;
