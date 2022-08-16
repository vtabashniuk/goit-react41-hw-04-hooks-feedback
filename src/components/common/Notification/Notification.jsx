import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.defaultProps = {
  message: 'There is no feedback yet.',
};

Notification.propTypes = {
  message: PropTypes.string,
};
