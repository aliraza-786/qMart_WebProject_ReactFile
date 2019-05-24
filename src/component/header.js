import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './practice.css'
import Qmart from './Images/Qmart.jpg';

import {BrowserRouter , Router , Link} from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root} id="headerui">
      <AppBar position="static" >
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            {/* <MenuIcon /> */}
             <img src={Qmart} id="qmartLogo"/>
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {/* News */}
          </Typography>
          {/* <Button color="inherit"><Link id='link' to='/' className='inherit'>Shop</Link></Button>
          <Button color="inherit"><Link id='link' to='/' className='inherit'>My Cart</Link></Button>
          <Button color="inherit"><Link id='link' to='/' className='inherit'>shopping_cart</Link></Button> */}
          <Button color="inherit"><Link id='link' to='/' className='inherit'>Home</Link></Button>
          <Button color="inherit"><Link id='link' to='/MyCart' className='inherit'>MyCart</Link></Button>
          <Button color="inherit"><Link id='link' to='/AddItems' className='inherit'>Add New Item</Link></Button>          
          <Button color="inherit"><Link id='link' to='/LogInForm' className='inherit'>Admin</Link></Button>          
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
