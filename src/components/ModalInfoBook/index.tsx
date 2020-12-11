import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import formattedCurrency from 'utils/formattedCurrency';
import api from 'service/api';

import Loding from 'components/Loding';
import { Container, Content, Modal, Categories, Buy, Preview } from './styles';

interface ModalProps {
  isOpen: () => void;
  idBook: string | undefined;
}

interface InfoBookData {
  volumeInfo: {
    authors: [];
    title: string;
    subtitle: string;
    description: string;
    categories: [];
    publisher: string;
    pageCount: number;
    previewLink: string;
    imageLinks: {
      small: string;
    };
  };

  saleInfo: {
    buyLink: string;
    retailPrice: {
      amount: number;
    };
  };
}

const ModalInfoBook: React.FC<ModalProps> = ({ isOpen, idBook }) => {
  const [book, setBook] = useState<InfoBookData>();
  const [loding, setLoding] = useState(false);

  useEffect(() => {
    setLoding(true);
    api.get(`/volumes/${idBook}`).then(response => {
      setBook(response.data);
      setLoding(false);
    });
  }, [idBook]);

  return (
    <>
      {loding && <Loding />}
      <Container onClick={isOpen} />

      {book && (
        <Modal>
          <Buy isBuy={!!book.saleInfo.buyLink}>
            <img
              src={book.volumeInfo.imageLinks.small}
              alt={book.volumeInfo.title}
            />

            {book.saleInfo.buyLink && (
              <a
                href={book.saleInfo.buyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar
                <br />
                {formattedCurrency(book.saleInfo.retailPrice.amount)}
              </a>
            )}
          </Buy>

          <Content>
            <h1>{book.volumeInfo.title}</h1>
            <p>{book.volumeInfo.subtitle}</p>
            <article>{book.volumeInfo.description}</article>

            <Categories>
              <h4>
                {book.volumeInfo.authors.length > 1 ? 'Autores' : 'Autor'}
              </h4>
              {book.volumeInfo.authors.map(author => (
                <small key={author}>{author}</small>
              ))}
            </Categories>

            {book.volumeInfo.categories && (
              <Categories>
                <h4>
                  {book.volumeInfo.categories.length > 1
                    ? 'Categorias'
                    : 'Categoria'}
                </h4>
                {book.volumeInfo.categories.map(categori => (
                  <small key={categori}>{categori}</small>
                ))}
              </Categories>
            )}

            <Preview>
              <a
                href={book.volumeInfo.previewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver preview
              </a>
            </Preview>

            <button type="button" onClick={isOpen}>
              <IoMdClose />
            </button>
          </Content>
        </Modal>
      )}
    </>
  );
};

export default ModalInfoBook;
