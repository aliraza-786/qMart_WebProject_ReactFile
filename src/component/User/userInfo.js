import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Header from '../header';
import Footer from '../Footer' ;

export default class userInfo extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Grid container>
                <Box
                    boxShadow={3}
                    bgcolor="background.paper"
                    m={6}
                    p={5}
                    style={{ width: '80rem', height: '30rem' }}
                >
                    <form >
                        <h3>Customer Informtion</h3>
                        <div class="form-group">
                            <input type="text" className="form-control" id="" placeholder="Enter Full Name" name="name" required />
                        </div>
                        <div className="form-group">
                            <input type="tel" pattern="/^+92(7\d|8\d|9\d)\d{9}$/" min="0" max="9" className="form-control" id="" aria-describedby="emailHelp" placeholder="Phone# : 0300-1234567" required
                                name="phone" />
                        </div>
                        <div class="form-group">
                            <input type="text" className="form-control" id="" placeholder="Enter Full Address" name="address" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Order Now</button>
                    </form>
                </Box>
            </Grid>
            <Footer/>
        </div>
    )
  }
}
