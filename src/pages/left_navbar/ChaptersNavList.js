import React, { useState } from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import { Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { Link as RouterLink } from 'react-router-dom';

export default function ChaptersNavList(props) {
    const { open, handleDrawerClose, handleDrawerOpen } = props;
    const [isChapter1Open, setIsChapter1Open] = useState(false);
    const [isChapter2Open, setIsChapter2Open] = useState(false);
    const [isChapter3Open, setIsChapter3Open] = useState(false);

    const handleAccordionClick = (isChapterOpen, setIsChapterOpen) => {
        setIsChapterOpen(!isChapterOpen);
      };
    

    const navListItems = [{
        listItemText: 'Chapter 1',
        listItemIcon: <EditIcon />,
        isChapterOpen: isChapter1Open,
        setIsChapterOpen: setIsChapter1Open,
        levels: [{
            levelName: '1: Nouns',
            levelPath: '/chapter/1/level/1',
        }, {
            levelName: '2: Find the Noun',
            levelPath: '/chapter/1/level/2',
        }],
    }, {
        listItemText: 'Chapter 2',
        listItemIcon: <EditIcon />,
        isChapterOpen: isChapter2Open,
        setIsChapterOpen: setIsChapter2Open,
        levels: [{
            levelName: '1: Verbs',
            levelPath: '/chapter/2/level/1',
        }, {
            levelName: '2: Find the Verb',
            levelPath: '/chapter/2/level/2',
        }],
    }, {
        listItemText: 'Chapter 3',
        listItemIcon: <EditIcon />,
        isChapterOpen: isChapter3Open,
        setIsChapterOpen: setIsChapter3Open,
        levels: [{
            levelName: '1: Pronouns',
            levelPath: '/chapter/3/level/1',
        }, {
            levelName: '2: Find the Prooun',
            levelPath: '/chapter/3/level/2',
        }],
    }]

  return (
    <List>
        {navListItems.map((listItem) => (

            //Maps through each chapter
            <ListItem key={listItem.listItemText} disablePadding sx={{ display: 'block' }}>
                <ListItemButton onClick={() => handleAccordionClick(listItem.isChapterOpen, listItem.setIsChapterOpen)}>
                    <ListItemIcon>
                        <EditIcon />
                    </ListItemIcon>
                    <ListItemText primary={`${listItem.listItemText}`} />
                    {listItem.isChapterOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                
                {listItem.levels.map((level) => (
                    
                    //Maps through each level in each chapter
                    <Collapse key={level.levelName} in={listItem.isChapterOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <RouterLink to={`${level.levelPath}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <HistoryEduIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={`${level.levelName}`} />
                                </ListItemButton>
                            </RouterLink>
                        </List>
                    </Collapse>   
                ))}
            </ListItem>
        ))}
    </List>
  )
}