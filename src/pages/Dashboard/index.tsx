import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FiSearch } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import api from 'service/api';
import Input from 'components/Input';
import Loding from 'components/Loding';
import ModalInfoBook from 'components/ModalInfoBook';
import getValidationErrors from 'utils/getValidationErrors';
import { useToast } from 'hooks/toast';

import { Container, ListBooks, Content, Books } from './styles';

interface DashboardFormData {
  search: string;
}

interface BookData {
  id: string;
  volumeInfo: {
    title: string;
    authors: string;
    imageLinks: {
      smallThumbnail: string;
    };
  };
}

const Dashboard: React.FC = () => {
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);
  const [books, setBookes] = useState<BookData[]>([]);
  const [bookId, setBookId] = useState<string>();
  const [loding, setLoding] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = useCallback(
    async (data: DashboardFormData) => {
      try {
        formRef.current?.setErrors({});

        if (data.search !== '') {
          setLoding(true);
        }

        const schema = Yup.object().shape({
          search: Yup.string().required('Campo obrigatório.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.get(`/volumes?q=${data.search}`);
        setBookes(response.data.items);

        setLoding(false);
        formRef.current?.reset();
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
      {loding && <Loding />}

      <h1>Encontre seu book aqui!</h1>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input
          containerStyle={{ borderRadius: '8px 0 0 8px' }}
          name="search"
          type="text"
          icon={FiSearch}
          placeholder="pesquise seu livro"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {isOpen && <ModalInfoBook idBook={bookId} isOpen={handleModalIsOpen} />}

      <Books>
        {books &&
          books.map(book => (
            <ListBooks key={book.id}>
              {book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.smallThumbnail && (
                  <img
                    src={book.volumeInfo.imageLinks.smallThumbnail}
                    alt={book.volumeInfo.title}
                  />
                )}

              <Content>
                <h1>
                  {book.volumeInfo.title.substring(0, 15)}
                  {book.volumeInfo.title.length > 15 && <span> ...</span>}
                </h1>
                <button type="button" onClick={() => handleInfoBook(book.id)}>
                  Ver Detalhes
                </button>
              </Content>
            </ListBooks>
          ))}

        {books === undefined && <h2>Livro não encontrado, tente outro!</h2>}
      </Books>
    </Container>
  );
};

export default Dashboard;
