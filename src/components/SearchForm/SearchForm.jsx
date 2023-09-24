import { DebounceInput } from 'react-debounce-input';
import propTypes from 'prop-types';

import { Form } from './SearchForm.styled';

export const SearchForm = ({ value, onChange }) => {
  const handleSubmit = el => {
    el.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Movie Search</h2>
      <DebounceInput
        type="text"
        debounceTimeout={700}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="place for type "
      />
      {/* <Icon /> */}
    </Form>
  );
};

SearchForm.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};
