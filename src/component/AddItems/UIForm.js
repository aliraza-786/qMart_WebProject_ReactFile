import Header from '../header';

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import BoxShadow from './BoxShadow';

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 20,
    padding: 20,
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    flexBasis: 200,
  },
}));

function InputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

//   const handleClickShowPassword = () => {
//     setValues({ ...values, showPassword: !values.showPassword });
//   };

  return (
      <div>
          <Header/>
          {/* <BoxShadow/> */}
    <div className={classes.root}>    
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="adornment-amount">ITEM ID</InputLabel>
        <Input
        //   id="adornment-amount"
        //   value={values.amount}
        //   onChange={handleChange('amount')}
          startAdornment={<InputAdornment position="start"></InputAdornment>}
        />
      </FormControl>

      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="adornment-amount">ITEM NAME</InputLabel>
        <Input
          startAdornment={<InputAdornment position="start"></InputAdornment>}
        />
      </FormControl>

      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="adornment-amount">ITEM DESCRIPTION</InputLabel>
        <Input
          startAdornment={<InputAdornment position="start"></InputAdornment>}
        />
      </FormControl>

      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="adornment-amount">ITEM PRICE</InputLabel>
        <Input
          startAdornment={<InputAdornment position="start"></InputAdornment>}
        />
      </FormControl>

      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="adornment-amount">ITEM IMAGE</InputLabel>
        <Input
          startAdornment={<InputAdornment position="start"></InputAdornment>}
        />
      </FormControl>
    </div>
    </div>
  );
}

export default InputAdornments;