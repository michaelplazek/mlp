import React from 'react';
import { Link } from 'react-router-dom'
import { Grid, AppBar, Button } from '@material-ui/core';


import { routes } from '../../config/routes';

const Header = () => (
  <AppBar position="static">
    <Grid container direction="row" justify='center'>
      <Grid item sm={4}>
        <Grid container direction="row">
          {routes.map(item =>
            <Grid
              item={true}
              sm={3}
              xm={12}
              key={item.label}
            >
              <Button variant="flat" size="large">
                <Link to={item.path} >
                  {item.label}
                  </Link>
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  </AppBar>
);

export default  Header;
