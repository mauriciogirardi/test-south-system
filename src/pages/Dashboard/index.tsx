import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FiSearch } from 'react-icons/fi';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { FormHandles } from '@unform/core';

import api from 'service/api';
import Input from 'components/Input';
import Lodging from 'components/Lodging';
import Pagination from 'components/Pagination';
import ModalInfoBook from 'components/ModalInfoBook';
import getValidationErrors from 'utils/getValidationErrors';
import { useToast } from 'hooks/toast';

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

const Dashboard: React.FC = () => {
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);
  const [bookId, setBookId] = useState<string>();
  const [lodging, setLodging] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [totalPage, setTotalPage] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);

  const [books, setBooks] = useState<BookData[]>([]);
  const [search, setSearch] = useState('');

  const handleSubmit = useCallback(
    async (data: string) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          search: Yup.string().required('Campo obrigatório.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        setSearch(data);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na pesquisa por livro!',
          description:
            'Ocorreu um erro ao fazer a pesquisa por livro, tente novamente.',
        });
      }
    },
    [addToast],
  );

  useEffect(() => {
    async function ApiGoogleBook() {
      const limitPage = 12;

      if (search !== '') {
        setLodging(true);
      }

      if (search) {
        const response = await api.get(
          `/volumes?q=${search}&maxResults=${limitPage}&startIndex=${
            pageIndex * 12
          }`,
        );

        const listFromStorage = localStorage.getItem('@BookGoogle');
        const favoriteList = listFromStorage ? JSON.parse(listFromStorage) : [];

        const result = response.data.items.map((book: BookData) => ({
          ...book,
          favorite: !!favoriteList.find(({ id }: BookData) => id === book.id),
        }));

        setBooks(result);

        const total = Math.ceil(response.data.totalItems / limitPage);
        setTotalPage(total);
        setLodging(false);
      }
    }

    ApiGoogleBook();
  }, [pageIndex, search]);

  const handleFavoriteBook = useCallback(
    (book: BookData) => {
      const findFavorite = books.map(favorite =>
        favorite.id === book.id
          ? { ...favorite, favorite: !favorite.favorite }
          : favorite,
      );
      setBooks(findFavorite);

      const listFromStorage = localStorage.getItem('@BookGoogle');
      const favoriteList = listFromStorage ? JSON.parse(listFromStorage) : [];

      localStorage.setItem(
        '@BookGoogle',
        JSON.stringify([...favoriteList, { ...book, favorite: true }]),
      );
    },
    [books],
  );

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
  return (
    <Container>
      {lodging && <Lodging />}

      <h1>Encontre seu book aqui!</h1>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input
          containerStyle={{ borderRadius: '8px 0 0 8px' }}
          name="search"
          id="search"
          type="text"
          icon={FiSearch}
          placeholder="pesquise seu livro"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {isOpen && <ModalInfoBook idBook={bookId} isOpen={handleModalIsOpen} />}

      <Books>
        {books &&
          books.map((book, index) => (
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
                    id={`favorite${index}`}
                    onClick={() => handleFavoriteBook(book)}
                  >
                    {book.favorite ? <BsHeartFill /> : <BsHeart />}
                  </button>
                </Actions>
              </Content>
            </ListBooks>
          ))}

        {books === undefined && <h2>Livro não encontrado, tente outro!</h2>}
      </Books>

      <Pagination
        total={totalPage}
        activePage={pageIndex === 0 ? 1 : pageIndex}
        onClick={page => (typeof page === 'number' ? setPageIndex(page) : null)}
      />
    </Container>
  );
};

export default Dashboard;
