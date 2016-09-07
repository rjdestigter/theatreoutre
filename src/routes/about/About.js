import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './About.css';

const title = 'About Us';

function About(props, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>
          <h2>Mission Statement</h2>
          We are a professional company that presents theatrical content, subject matter,
          styles and forms that are alternative to what is currently offered in our community.
          (We define a “professional” as anyone who trains and works primarily in the performing
          arts regardless of union affiliations)
        </p>
        <p>
          Our operations are motivated by the following guiding principles:
          We provide an uncensored and uncompromising voice to those in our community who
          are often considered to exist beyond the fringes of social propriety, sexual
          norms and gendered expectations.
        </p>
        <p>
          Our season is selected to entertain, enlighten, challenge and provoke. The season
          will be a combination of new work by local artists, reinterpretations of old
          works and published plays that fit our definition of outré.
        </p>
        <p>
          We make a concerted effort to employ artists who choose to live, work and study
          in the Lethbridge area, and to make their work known to communities outside of
          Lethbridge through tours and other forms of inter-community outréach
        </p>
      </div>
    </div>
  );
}

About.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(About);
