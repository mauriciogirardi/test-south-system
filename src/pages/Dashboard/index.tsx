import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FiSearch } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import Input from 'components/Input';
import getValidationErrors from 'utils/getValidationErrors';
import { useToast } from 'hooks/toast';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: object) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          search: Yup.string().required('Campo obrigatório.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // Api
        console.log(data);
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
            'Ocorreu um erro ao fazer uma pesquisa por livro, tente novamente.',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
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
    </Container>
  );
};

export default Dashboard;
