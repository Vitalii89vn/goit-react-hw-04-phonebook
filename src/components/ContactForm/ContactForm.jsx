import { Component } from "react";
import { nanoid } from 'nanoid'
import css from "./ContactForm.module.css"
import PropTypes from 'prop-types';

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    static propTypes = {
        onSubmitForm: PropTypes.func.isRequired
    };

    nameId = nanoid();
    numberId = nanoid();

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmitForm(this.state);
        const findName = this.props.contacts.find(item => item.name.toLowerCase() === this.state.name.toLowerCase());
        if (!findName) this.reset();
    };
    
    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;
        const { handleSubmit, handleChange, nameId, numberId } = this;

         return(  <div className={css.container}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor={nameId}>Name</label>
                        <input
                            type="text"
                            id={nameId}
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={name}
                            onChange={handleChange}
                        />
                    <label htmlFor={numberId}>Number</label>
                        <input
                            type="tel"
                            id={numberId}
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={number}
                            onChange={handleChange}
                        />
                    <button type="submit" className={css.btn}>Add contact</button>
             </form>
         </div>)   
    }
};