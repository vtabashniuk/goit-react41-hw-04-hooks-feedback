import PropTypes from 'prop-types';
import styles from './Notification.module.css';

export const Notification = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
};

Notification.defaultProps = {
  message: 'There is no feedback yet.',
};

Notification.propTypes = {
  message: PropTypes.string,
};
