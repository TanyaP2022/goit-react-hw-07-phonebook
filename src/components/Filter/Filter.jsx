import { FilterStyled, FilterInputStyled } from './FilterStyled';
import { filterContacts } from '../../redux/filtersSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';

export const Filter = () => {
    const dispatch = useDispatch();
    const filterName = useSelector(selectFilter);
  
    const onChangeFilter = event => {
    return dispatch(filterContacts(event.target.value));
    };

    return(
    <FilterStyled>
        Filtr name
        <FilterInputStyled
            type="text"
            value={filterName}
            name="filter"
            onChange={onChangeFilter}
        />
        </FilterStyled>
    )
    };
