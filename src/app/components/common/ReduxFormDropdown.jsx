import React from 'react';
import { PropTypes } from 'prop-types';
import { Icon, Dropdown } from 'semantic-ui-react';

export const ReduxFormDropdown = ({
  input,
  label,
  placeholder,
  meta: {
    error,
    touched,
  },
  ...custom
}) => {
  const errorMessage = (
    <div style={{ color: '#E20000', paddingTop: '.3rem', fontSize: '12px' }} >
      <Icon name="warning" />
      {error}
    </div>
  )
  // onChange={(param, data) => input.onChange(data.value)}
  return (
    <div>
      <Dropdown
        placeholder={placeholder}
        value={input.value}
        {...input}
        onChange={(param, data) => input.onChange(data.value)}
        error={touched && error}
        selection
        {...custom}
      />
      {touched && error && errorMessage}
    </div>
  )
}

ReduxFormDropdown.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
}
