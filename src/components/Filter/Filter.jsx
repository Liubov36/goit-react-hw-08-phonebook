import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/contacts/selectors';

import { setFilter } from '../../redux/contacts/filterSlice';

import { Label, Title, Text, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    e.preventDefault();

    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <>
      <Title>Sort contacts:</Title>
      <Label>
        <Text>Input search query</Text>
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
          placeholder="Start to enter contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </Label>
    </>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func,
  QueryInputId: PropTypes.func,
};