/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.css';

const title = 'Contact Us';

function Contact(props, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>E-mail us at info[at]theatreoutre.ca or check us out on Facebook and Twitter.</p>
        <p>Please message us for mailing address information if needed.</p>
      </div>
    </div>
  );
}

Contact.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Contact);
