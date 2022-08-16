import PropTypes from 'prop-types';
import { Title } from 'components/common';

export const Section = ({ title, children }) => {
  return (
    <section>
      <Title title={title} />
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
