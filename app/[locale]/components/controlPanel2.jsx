import { Divider, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Fragment } from 'react'

import PeopleIcon from '@mui/icons-material/People';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { purple, red, yellow } from '@mui/material/colors';
import CreateIcon from '@mui/icons-material/Create';

export default function ControlPanel2({ setSection }) {

    return (
        <Fragment>
            <ListItemButton onClick={() => setSection('Works')}>
                <ListItemIcon>
                    <DashboardIcon color='primary' />
                </ListItemIcon>
                <ListItemText primary="Works" />
            </ListItemButton>

            <ListItemButton onClick={() => setSection('Exhibitions')} >
                <ListItemIcon>
                    <AdminPanelSettingsIcon sx={{ color: purple[500] }} />
                </ListItemIcon>
                <ListItemText primary="Exhibitions" />
            </ListItemButton>

            <ListItemButton onClick={() => setSection('Bio')}>
                <ListItemIcon>
                    <PeopleIcon color='success' />
                </ListItemIcon>
                <ListItemText primary="Bio" />
            </ListItemButton>

            <ListItemButton onClick={() => setSection('Contact')}>
                <ListItemIcon>
                    <PeopleOutlineIcon sx={{ color: red[500] }} />
                </ListItemIcon>
                <ListItemText primary="Contact" />
            </ListItemButton>

            <ListItemButton onClick={() => setSection('Texts')}>
                <ListItemIcon>
                    <LibraryBooksIcon color='success' />
                </ListItemIcon>
                <ListItemText primary="Texts" />
            </ListItemButton>

       
            <Divider sx={{ margin: '5px 0 5px 0' }} />
        </Fragment>
    )
}