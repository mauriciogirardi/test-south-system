import ModalInfoBook from 'components/ModalInfoBook';
import React, { useCallback, useState } from 'react';
import { BsHeartFill, BsHeart } from 'react-icons/bs';

import {
  Container,
  ListBooks,
  Content,
  Books,
  Actions,
  NotImage,
} from './styles';

interface BookData {
  id: string;
  favorite: boolean;
  volumeInfo: {
    title: string;
    imageLinks: {
      smallThumbnail: string;
    };
  };
}

const Favorites: React.FC = () => {
  const [bookId, setBookId] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);

  const [favorites, setFavorites] = useState<BookData[]>(() => {
    const getFavorite = localStorage.getItem('@BookGoogle');

    if (getFavorite) {
      return JSON.parse(getFavorite);
    }

    return [];
  });

  const handleModalIsOpen = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  const handleInfoBook = useCallback(
    (id: string) => {
      handleModalIsOpen();
      setBookId(id);
    },
    [handleModalIsOpen],
  );

  const handleRemoveFavorite = useCallback(
    (id: string) => {
      const delFavorite = favorites.filter(favorite => favorite.id !== id);
      setFavorites(delFavorite);

      localStorage.setItem('@BookGoogle', JSON.stringify(delFavorite));
    },
    [favorites],
  );

  return (
    <Container>
      <h1>Seus books favoritos</h1>

      {isOpen && <ModalInfoBook idBook={bookId} isOpen={handleModalIsOpen} />}

      <Books>
        {favorites &&
          favorites.map(book => (
            <ListBooks key={book.id}>
              {book.volumeInfo.imageLinks &&
              book.volumeInfo.imageLinks.smallThumbnail ? (
                <img
                  src={book.volumeInfo.imageLinks.smallThumbnail}
                  alt={book.volumeInfo.title}
                />
              ) : (
                <NotImage />
              )}

              <Content>
                <h1>
                  {book.volumeInfo.title.substring(0, 15)}
                  {book.volumeInfo.title.length > 15 && <span> ...</span>}
                </h1>
                <Actions>
                  <button
                    className="detail"
                    type="button"
                    onClick={() => handleInfoBook(book.id)}
                  >
                    Ver Detalhes
                  </button>
                  <button
                    className="favorite"
                    type="button"
                    onClick={() => handleRemoveFavorite(book.id)}
                  >
                    {book.favorite ? <BsHeartFill /> : <BsHeart />}
                  </button>
                </Actions>
              </Content>
            </ListBooks>
          ))}

        {favorites.length < 1 && <h2>Nenhum livro adicionado!</h2>}
      </Books>
    </Container>
  );
};

export default Favorites;
