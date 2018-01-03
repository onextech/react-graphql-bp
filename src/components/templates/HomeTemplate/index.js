import React from 'react';
import PropTypes from 'prop-types';
import SiteNav from 'src/components/templates/SiteNav';
import Footer from 'src/components/organisms/Footer';

const HomeTemplate = ({ children }) => (
  <SiteNav>
    {children}
    <Footer />
  </SiteNav>
);

HomeTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};

export default HomeTemplate;
