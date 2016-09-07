import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Shows.css';

const title = 'Season 16/17';

function Shows(props, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>For our 2016/17 season we are presenting a “Stripped Down” season featuring three plays that explore our natural bodies and their relationship to the natural world, art, ourselves and each other. It is a daring season that, like all our seasons before, will draw crowds from a variety of demographics from across Southern Alberta. Theatre Outré’s productions typically sell out to audiences from the local queer, arts, and student communities.</p>
        <h2>Montparnasse</h2>
        <p>In our Stripped Down Season this coming year, we are presenting three exciting plays that explore themes of human sexuality and survival, starting with the Alberta premiereof Montparnasse by Erin Shields and Maev Beaty. This play tells the story of an unrequited love between two female art models in 1920s Paris. It is a romantic and beautiful love story about art and soul.</p>
        <h2>The Curing Room</h2>
        <p>Secondly we present, as a co-production with Calgary’s Theatre Basement, the North American premiereof The Curing Room by David Ian Lee. Based on actual events, it is an historical retelling of seven Soviet soldiers locked naked in a monastery basement in Poland during the height second World War. It is a provocative story about our animal nature as human beings</p>
        <h2>Tab & Landon</h2>
        <p>And finally, Outré will present the world premiere production of Tab & Landon by Jay Whitehead, which explores the relationship between twin brothers in the 1970s as they enter that decade’s popular adult film industry.</p>
        <h2>Pretty, Witty & GAY! 2017</h2>
        <p>TBA</p>
      </div>
    </div>
  );
}

Shows.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Shows);
