import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ClassIcon from '@mui/icons-material/Class';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StyledNavIcon from './styled_nav_components/NavIcon.styled';
import { Link as RouterLink } from 'react-router-dom';

export default function NavBarList(props) {
    const { open, handleDrawerClose, handleDrawerOpen } = props;

    const navListItems = [{
        listItemText: 'Chapters',
        listItemIcon: <ClassIcon />,
        listItemPath: '',
        hasOwnMenu: true,
    }, {
        listItemText: 'Account',
        listItemIcon: <AccountCircleIcon />,
        listItemPath: '/account',
        hasOwnMenu: false,
    }]

    const handleChaptersOpen = () => {
        handleDrawerOpen();

    }

  return (
    <List>
        {navListItems.map((listItem) => (
            <ListItem key={listItem.listItemText} disablePadding sx={{ display: 'block' }}>

                {/* Only routes somewhere if it doesn't have its own menu. i.e. Chapters will not cause a reroute since it opens another menu */}
                <RouterLink
                    to={listItem.hasOwnMenu || `${listItem.listItemPath}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >

                    <ListItemButton
                        sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                        }}
                        onClick={listItem.hasOwnMenu ? handleChaptersOpen : handleDrawerClose}
                    >

                        <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                        >
                            <StyledNavIcon>
                                {listItem.listItemIcon}
                                {open || `${listItem.listItemText}`}
                            </StyledNavIcon>
                        </ListItemIcon>

                        <ListItemText primary={listItem.listItemText} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                    
                </RouterLink>
            </ListItem>
        ))}
    </List>
  )
}