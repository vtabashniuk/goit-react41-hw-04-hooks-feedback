import { useState } from 'react';
import { LABELS } from 'constants/labels';
import { Section, Notification } from './common';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementCount = key => {
    switch (key) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const total = good + neutral + bad;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={LABELS} onLeaveFeedback={incrementCount} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification />
        ) : (
          <Statistics good={good} neutral={neutral} bad={bad} />
        )}
      </Section>
    </>
  );
};
