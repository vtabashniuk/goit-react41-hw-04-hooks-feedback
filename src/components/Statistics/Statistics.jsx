import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <div className={styles.statistics}>
        <p className={styles.statItem}>Good: {good}</p>
        <p className={styles.statItem}>Neutral: {neutral}</p>
        <p className={styles.statItem}>Bad: {bad}</p>
      </div>
      {total > 0 && (
        <div className={styles.total}>
          <p className={styles.totalItem}>Total: {total}</p>
          <p className={styles.totalItem}>
            Positive feedback: {positivePercentage} %
          </p>
        </div>
      )}
    </>
  );
};

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
