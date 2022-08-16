import PropTypes from 'prop-types';
import { Button } from 'components/common';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(label => (
    <Button key={label} label={label} onClick={() => onLeaveFeedback(label)} />
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
