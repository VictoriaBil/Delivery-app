import React, { useState } from 'react';
import css from '../../components/ContactForm/ContactForm.module.css';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleAddressChange = address => {
    setAddress(address);
  };

  const handleSelectAddress = selectedAddress => {
    setAddress(selectedAddress);
    geocodeByAddress(selectedAddress)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Selected address coordinates:', latLng);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactBlock}>
      <div>
        <label htmlFor="name" className={css.contactLabel}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          className={css.contactInput}
        />
      </div>
      <div>
        <label htmlFor="email" className={css.contactLabel}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={css.contactInput}
        />
      </div>
      <div>
        <label htmlFor="phone" className={css.contactLabel}>
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className={css.contactInput}
        />
      </div>
      <div>
        <label htmlFor="address" className={css.contactLabel}>
          Address:
        </label>
        <PlacesAutocomplete
          value={address}
          onChange={handleAddressChange}
          onSelect={handleSelectAddress}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Enter address',
                  className: css.contactInput,
                })}
              />
              <div>
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? css.suggestionItemActive
                    : css.suggestionItem;
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                      })}
                    >
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
      <button type="submit" className={css.contactBtn}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
