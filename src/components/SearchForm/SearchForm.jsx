import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormContainer, Form, Input, Button } from './SearchForm.styled';

export default function SearchForm({ formSubmit, errorMessage }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      errorMessage();
      return;
    }
    formSubmit(query);
    setQuery('');
  };

  const handleInput = e => {
    setQuery(e.target.value.toLowerCase().trim());
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          autoFocus
          value={query}
          onChange={handleInput}
          autoComplete="off"
          placeholder="find a movie"
        />
        <Button type="submit"></Button>
      </Form>
    </FormContainer>
  );
}

SearchForm.propTypes = {
  formSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.func.isRequired,
};
