import React, { Component } from 'react';
import './Nav.css';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

class Nav extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Typography className={classes.header} variant="h3">MUSHROOM MASHUP</Typography>
        </AppBar>
      </div>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'hsl(0, 100%, 50%)',
  },
  header: {
    color: '#fff',
    margin: '.5em'
  }
}

export default withStyles(styles)(Nav);
