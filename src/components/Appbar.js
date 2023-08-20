import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { Typography, Link as MuiLink, Select, MenuItem, Button } from '@mui/material';

import { Link } from 'react-router-dom';

function Appbar(props) {
    const { LinksProperites } = props;
    
    return ( 
        <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          {/* TODO: add the current user logo & name */} 
            Hi user
          </Typography>
          <nav>
            {LinksProperites.map(({ name, path }) => (
                <Button
                variant="button"
                key={name + " _link_ " + path}
                color="text.primary"
                sx={{ my: 1, mx: 1, padding: 0.5 }}
                >
                <Link to={path}>{name}</Link>
                </Button>
            ))}
          </nav>
          <Select variant="outlined" defaultValue={"none"} sx={{ my: 1, mx: 1.5 }}>
            <MenuItem value={"none"} disabled>
                Select a user
            </MenuItem>
            <MenuItem value={"sarahedo"}>Sarah Edo</MenuItem>
            <MenuItem value={"tylermcginnis"}>Tyler McGinnis</MenuItem>
            <MenuItem value={"johndoe"}>John Doe</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>
     );
}

export default Appbar;