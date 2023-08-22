import { useEffect, useState } from 'react';
import { Typography, Select, MenuItem, Button, Toolbar, AppBar } from '@mui/material';
import { setAuthedUser } from '../actions/authedUser';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import authedUser from '../reducers/authedUser';

function Appbar(props) {
    const { LinksProperites, users, authedUser } = props;
    const [currAuthedUser, setcurrAuthedUser] = useState("");
    const navitgate = useNavigate();
    
    useEffect(() => {
      setcurrAuthedUser(props.authedUser);
    }, [props.authedUser])


    const onSignIn = (uid) => {
      props.dispatch(setAuthedUser(uid));
      const currLink = window.location.pathname;

      // if (!currLink.match(/\/questions\/.*/)) {
      //   navitgate("/");
      // }

    }

    return ( 
        <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} >{authedUser ? users[authedUser].name:"----"}</Typography>
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
          <Select name='selectAUser' variant="outlined" value={currAuthedUser ? currAuthedUser:"none"} sx={{ my: 1, mx: 1.5 }}>
          <MenuItem 
            onClick={() => props.dispatch(setAuthedUser(null))} 
            sx={{color:currAuthedUser && "red", fontWeight:800}} 
            value={"none"} disabled={!currAuthedUser}>{!currAuthedUser ? "Select a user":"LOGOUT"}</MenuItem>

          {users && Object.keys(users).map((uid) => (
            <MenuItem 
            sx={uid === currAuthedUser ? ({color:"green", fontWeight:800}):({})} 
            key={uid+"signIn_select_item_list"} 
            value={uid} 
            onClick={() => onSignIn(uid)}
            >{users[uid].name}</MenuItem>
          ))}

          </Select>
        </Toolbar>
      </AppBar>
     );
}

const mapStateToProps = ({authedUser, users},props) => {
    return {
        LinksProperites: props.LinksProperites,
        authedUser,
        users,
    }
}

export default connect(mapStateToProps)(Appbar);