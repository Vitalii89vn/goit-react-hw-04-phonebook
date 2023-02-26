import PropTypes from 'prop-types';

export const ContactListItem = ({ name, number, onDelete }) => {
    return (
        <li>{name}: {number}
            <button onClick={onDelete}>Delete</button>
        </li>
          
    )
};

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};