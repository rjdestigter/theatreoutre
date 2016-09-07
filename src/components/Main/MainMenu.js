// Libs
import React from 'react';

// Components
import Navigation from '../Navigation';
import Flex from '../Flex';

// Assets
import dots from '../../public/images/dots.gif';
import sidebar from '../../public/images/sidebar.png';

const MainMenu = () => (
  <Flex
    grow
    base={265}
    style={{
      backgroundImage: `url(${sidebar}), url(${dots})`,
      backgroundRepeat: 'no-repeat, repeat',
      backgroundSize: 'contain, auto',
      backgroundPosition: 'right, top',
      backgroundColor: 'Cyan',
      height: '100%',
    }}
  >
    <Navigation />
  </Flex>
);

export default MainMenu;
