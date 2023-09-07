import { FilterField, FilterLabel } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'features/filter/filterSlice';
export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterField
        id="filter"
        onChange={e => dispatch(setFilter(e.target.value))}
        value={filter}
      />
    </>
  );
};