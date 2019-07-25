import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../practice.css'
import Qmart from '../Images/Qmart.jpg';
import {Link} from 'react-router-dom';
import UserOrder from '../Admin/userOrder';
import { withRouter } from 'react-router-dom';

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



class ButtonAppBar extends React.Component {

  checkUser = () => {
    
    localStorage.clear();
    this.props.history.push('/');
  }

  render() {
  const { classes } = this.props;
    return (
      <div className={classes.root} id="headerui">
        <AppBar position="static" style={{ backgroundColor: 'rgb(40, 11, 226)' }} >
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              {/* <MenuIcon /> */}
              <img src={Qmart} id="qmartLogo"/>
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              {/* News */}
            </Typography>
            <Button color="inherit"><Link id='link' to='/AdminHome' className='inherit'>Home</Link></Button>
            <Button color="inherit"><Link id='link' to='/AddItem' className='inherit'>Add Item</Link></Button>          
            <Button color="inherit"><Link id='link' to='/UserOrder' className='inherit'>Customer Order</Link></Button>          
            <Button color="inherit" onClick={this.checkUser}>LogOut</Button>          
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(ButtonAppBar));
