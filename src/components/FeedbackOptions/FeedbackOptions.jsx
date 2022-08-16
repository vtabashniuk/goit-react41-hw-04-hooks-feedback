import PropTypes from 'prop-types';
import { Button } from 'components/common';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.wrapper}>
      {options.map(label => (
        <Button
          key={label}
          label={label}
          onClick={() => onLeaveFeedback(label)}
        />
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
