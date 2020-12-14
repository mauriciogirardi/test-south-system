import React from 'react';

import pagination from 'utils/pagination';

import Page from './Pages';
import { Container } from './styles';

interface PaginationProps {
  activePage: number;
  total: number;

  onClick: (page: number | string) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  activePage,
  total,
  onClick,
}) => (
  <Container>
    <ul>
      {pagination({ total, activePage }).map((page: string | number, index) => (
        <li key={index}>
          <Page
            style={activePage === page ? { color: '#6c9814' } : { color: '' }}
            page={page}
            onClick={onClick}
          />
        </li>
      ))}
    </ul>
  </Container>
);

export default Pagination;
