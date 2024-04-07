import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box 
      flex={2} 
      p={2}
      sx={{ display: { xs: "none", sm: "block"} }}
    >
      <Box position={'fixed'} width={300} mt={2} alignItems={"center"}>
        <Typography variant='h6' fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar 
            alt="Remy Sharp" 
            src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=1380&t=st=1712261566~exp=1712262166~hmac=e20c382a4631740f07a9daa32217a408900964145862eb4bd6cb3decdf1550e3" 
          />
          <Avatar 
            alt="Brady Bunch" 
            src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671134.jpg?w=1380&t=st=1712261712~exp=1712262312~hmac=061700059d65548595cad126f0b0d42f51000390f333ce624a23fcf193e6d570" 
          />
          <Avatar 
            alt="Tom Coughlin" 
            src="https://img.freepik.com/free-photo/fun-backpacker-german-shepherd-dog-cartoon-character_183364-80975.jpg?w=900" 
          />
          <Avatar 
            alt="Bobby Cox" 
            src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=1380&t=st=1712261752~exp=1712262352~hmac=3b60c8c999600e852589f1bd36269940685c7371fdda39b45318bc408e0a9c48" 
          />
          <Avatar 
            alt="William Wordsworth" 
            src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=1380&t=st=1712261820~exp=1712262420~hmac=30a1824854cc5fd31b4874e79e7baca8bc6683110168b0d51970c1f39ddc237c" 
          />
          <Avatar 
            alt="Cindy Baker" 
            src="https://img.freepik.com/free-vector/sticker-template-with-smile-face-emoji-isolated_1308-58705.jpg?w=1380&t=st=1712261882~exp=1712262482~hmac=bd898b0416fe19c9f2474bef0d30aa8c1a052634071b87419e97c9a21e7484c1" 
          />
          <Avatar 
            alt="Agnes Walker" 
            src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436190.jpg?w=1380&t=st=1712261880~exp=1712262480~hmac=ed49d7e6e925941d754c33ec167358d0278d81b0addb584b358e46ab9413374a" 
          />
          <Avatar 
            alt="Trevor Henderson" 
            src="" 
          />
        </AvatarGroup>

        <Typography variant='h6' fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img 
              src="https://mui.com/static/images/image-list/breakfast.jpg" 
              alt="" 
            />
          </ImageListItem>

          <ImageListItem>
            <img 
              src="https://mui.com/static/images/image-list/camera.jpg" 
              alt="" 
            />
          </ImageListItem>

          <ImageListItem>
            <img 
              src="https://mui.com/static/images/image-list/burgers.jpg" 
              alt="" 
            />
          </ImageListItem>
        </ImageList>

        <Typography variant='h6' fontWeight={100}>
          Latest Converstions
        </Typography>

        <Box mt={-0.5}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
             />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Rightbar