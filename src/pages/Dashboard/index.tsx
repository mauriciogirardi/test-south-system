import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { FiSearch } from 'react-icons/fi';

import Input from 'components/Input';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const handleSubmit = useCallback(() => {
    console.log('search');
  }, []);

  return (
    <Container>
      <h1>Dashboar</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          name="seach"
          type="text"
          icon={FiSearch}
          placeholder="pesquise seu livro"
        />
      </Form>
    </Container>
  );
};

export default Dashboard;
