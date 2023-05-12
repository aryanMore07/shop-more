import React from 'react';
import './navbar.css';
import Badge from '@mui/material/Badge';
import { Favorite, ShoppingCart } from '@mui/icons-material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar-div'>
            <ul >
                <li>
                    <p>shopMore</p>
                </li>
                <li>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        className='input-box'
                    >
                        <TextField id="outlined-basic"  className='input-box' label="Search input" variant="outlined" />
                    </Box>
                </li>
                <li>
                    <div className='components'>
                        <NavLink className='btn btn-primary'>Login</NavLink>
                        <Badge className='mui-icons' badgeContent={4} color="primary">
                            <Favorite className='icon' color="action" />
                        </Badge>
                        <Badge className='mui-icons' badgeContent={4} color="primary">
                            <ShoppingCart className='icon' color="action" />
                        </Badge>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
