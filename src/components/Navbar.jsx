import styled from '@emotion/styled'
import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar) ({
  display: "flex",
  justifyContent: "space-between"
});

const Search = styled("div") (({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "5px",
  width: "40%",
}));

const Icons = styled(Box) (({ theme }) => ({
  alignItems: "center",
  gap: "10px",
}));

const UserBox = styled(Box) (({ theme }) => ({
  alignItems: "center",
  gap: "10px",
}))

const Navbar = () => {

  const [open, setOpen] = useState(false)


  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display: {xs:"none", sm:"block"}}}>
          DEMO
        </Typography>
        <Pets sx={{display: {xs:"block", sm:"none"}}}/>
        <Search><InputBase placeholder='search...'/></Search>
        <Icons sx = {{ display: {xs:"none", sm:"flex"}}}>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar 
          sx = {{width: 30, height: 30, alignItems: "center"}} 
          src='https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1200'
          onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox 
        sx = {{ display: {xs:"flex", sm:"none"}}}
        onClick={(e) => setOpen(true)}
        >
          <Avatar sx = {{width: 30, height: 30, alignItems: "center"}} src='https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1200'/>
          <Typography variant='span'>Kelly</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar