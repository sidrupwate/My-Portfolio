import React, { useState } from 'react';
import '../styles/Style.css';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    const handleCancelClick = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <div className='navBar'>
                <div>
                    <a className='logo' href="#">
                        <h1 style={{ fontWeight: "700", fontSize: "30px" }}>sid<span style={{ color: "red" }}>.</span>dev</h1>
                    </a>
                </div>
                <div>
                    <ul className='ul'>
                        <a className='li' href="#"><li>
                            Home
                        </li></a>
                        <a className='li' href='#about'>
                            <li>
                                About
                            </li>
                        </a>

                        <a className='li' href='#project'>
                            <li>
                                Projects
                            </li>
                        </a>
                        <a className='li' href='#contact'>
                            <li>
                                Contact
                            </li>
                        </a>
                    </ul>

                    <IconButton style={{ fontSize: "5rem" }} id='menu-stack' onClick={handleMenuClick}>
                        {menuOpen ? <CancelIcon onClick={handleCancelClick} /> : <MenuIcon />}
                    </IconButton>
                </div>
            </div>

            <Drawer anchor='right' open={menuOpen} onClose={() => setMenuOpen(false)}>
                <IconButton onClick={handleCancelClick}>
                    <CancelIcon style={{ marginLeft: "15rem" }} />
                </IconButton>
                <List id='toggleList'>
                    <a className='ulList' href='#'>
                        <ListItem id='ListItem' onClick={() => setMenuOpen(false)}>
                            <ListItemText primary='Home' />
                        </ListItem>
                    </a>
                    <a className='ulList' href='#about'>
                        <ListItem id='ListItem' onClick={() => setMenuOpen(false)}>
                            <ListItemText primary='About' />
                        </ListItem>
                    </a>
                    <a className='ulList' href='#project'>
                        <ListItem id='ListItem' onClick={() => setMenuOpen(false)}>
                            <ListItemText primary='Projects' />
                        </ListItem>
                    </a>
                    <a className='ulList' href='#contact'>
                        <ListItem id='ListItem' onClick={() => setMenuOpen(false)}>
                            <ListItemText primary='Contact' />
                        </ListItem>
                    </a>
                </List>
            </Drawer>
        </>
    );
}

export default Header;
