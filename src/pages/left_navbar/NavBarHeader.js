import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StyledNavIcon from './styled_nav_components/NavIcon.styled';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FlexRowContainer from '../../components/styles/FlexRowContainer.styled';
import { Link as RouterLink } from 'react-router-dom';

function NavBarHeader(props) {
    const { open, handleDrawerClose, handleDrawerOpen } = props;

    const closeMenuIconIfOpened = () => {
        return (
            <ListItemButton onClick={handleDrawerClose} sx={{ position: 'absolute', left: '180px', top: '5px', borderRadius: '50%', width: '17%' }}>
                <ChevronLeftIcon sx={{ position: 'relative', left: '-8px'}}/>
            </ListItemButton>
        )
    }

    return (
            <ListItem disablePadding sx={{ display: 'block' }}>
                    <RouterLink to={'/'} style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}>

                {/* <FlexRowContainer> */}
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5
                            }}
                            >

                            <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                            }}
                            >
                                <StyledNavIcon>
                                    <LocalPoliceIcon />
                                    {open || 'Grammar'}
                                </StyledNavIcon>
                            </ListItemIcon>

                            <ListItemText primary="Grammar" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </RouterLink>

                {/* </FlexRowContainer>         */}


                <Divider />
                {open && closeMenuIconIfOpened()}
            </ListItem>
    )
}

export default NavBarHeader