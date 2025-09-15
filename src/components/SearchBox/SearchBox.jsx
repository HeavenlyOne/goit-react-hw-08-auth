import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/filtersSlice';

export default function SearchBox() {
  const value = useSelector(state => state.filters.name);
  const dispatch = useDispatch();
  return (
    <label>
      Find contacts by name
      <input
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
        value={value}
      />
    </label>
  );
}
