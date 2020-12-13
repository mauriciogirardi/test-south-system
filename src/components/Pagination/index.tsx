import React from 'react';

import pagination from 'utils/pagination';

import Page from './Pages';
import { Container } from './styles';

interface PaginationProps {
  activePage: number;
  total: number;

  pageLink?: any;
  onClick: (page: string | number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  activePage,
  total,
  pageLink,
  onClick,
}) => (
  <Container>
    <ul>
      {pagination({ total, activePage }).map((page: string | number, index) => (
        <li key={index}>
          <Page
            style={activePage === page ? { color: '#6c9814' } : { color: '' }}
            page={page}
            pageLink={pageLink?.replace('%page%', page)}
            onClick={onClick}
          />
        </li>
      ))}
    </ul>
  </Container>
);

export default Pagination;
