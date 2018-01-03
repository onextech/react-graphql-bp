import React from 'react';
import PropTypes from 'prop-types';
import { SiteNav as SiteNavTemplate } from '@onextech/react-semantic-booster';


const menu = [
  {
    position: 'left',
    content: [
      {
        name: 'Logo',
        to: '/',
        image: {
          height: 50,
          src: 'https://s3-ap-southeast-1.amazonaws.com/storage.api.merrymaker.com/images/merrymaker_mascot_head_side.svg',
        },
      },
      { name: 'Home', to: '/home' },
      { name: 'About', to: '/about' },
    ],
  },
  {
    position: 'right',
    content: [
      {
        name: 'Support',
        dropdown: {
          items: [
            { name: 'Phone', to: '/phone' },
            { name: 'Email', to: '/email' },
          ],
        },
      },
      { name: 'Contact Us', to: '/contact', button: { primary: true } },
    ],
  },
];

const SiteNav = ({ children }) => (
  <SiteNavTemplate menu={menu}>
    {children}
  </SiteNavTemplate>
);

SiteNav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};

export default SiteNav;
