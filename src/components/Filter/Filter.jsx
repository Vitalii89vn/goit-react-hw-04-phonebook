import "./Filter.module.css"
import PropTypes from 'prop-types';

export const Filter = ({onFilter}) => {
    return (
        <div><label htmlFor="filter">Find contacts by name</label>
            <input type="text" name="filter" onChange={onFilter} />
        </div>
    )
}

Filter.propTypes = {
    onFilter: PropTypes.func.isRequired
}