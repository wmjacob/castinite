import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar'
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import MenuIcon from '@mui/icons-material/Menu';
import PublicIcon from '@mui/icons-material/Public';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { Outlet, useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about/' },
  { label: 'Products', path: '/products/' },
  { label: 'Industries', path: '/industries/' },
  { label: 'FAQs', path: '/faq' },
  { label: 'Contact Us', path: '/contact' },
];

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function Layout() {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography onClick={() => navigate('/')} variant="h6" sx={{ cursor: 'pointer', flexGrow: 1, alignItems: 'center', display: 'flex', fontWeight: 'bold' }}>
            <PublicIcon fontSize="large" /> Castinite
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Button onClick={() => navigate('contact/')}  sx={{ color: '#fff', textTransform: 'none', ...(open && { display: 'none' }) }}>Contact Us</Button>
            <IconButton onClick={handleDrawerOpen} type="button" sx={{ p: '10px', ...(open && { display: 'none' }) }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Tooltip title="Open Menu" sx={{ ...(open && { display: 'none' }) }}>
              <IconButton
                id="menu-button"
                onClick={handleDrawerOpen}
                size="small"
                aria-controls={open ? 'settings-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <MenuIcon sx={{ width: 32, height: 32 }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
        <Box pt={3} pb={1} pl={1} pr={1} sx={{ backgroundColor: '#444', color: '#fff' }}>
          <Box pb={5}>
            {navItems.map((item, index) => item.hideFooter ? undefined : (
              <Button onClick={() => navigate(item.path)} key={index}>{item.label}</Button>
            ))}
          </Box>
          <Container fixed>
            <Typography variant="h6" sx={{ flexGrow: 1, alignItems: 'center', display: 'flex', fontWeight: 'bold' }}>
              <PublicIcon fontSize="large" />&nbsp;Castinite
            </Typography>
            <Grid pt={1} pl={1} pb={5} container>
              <Grid item xs={12} sm={4}>
                <Typography variant="body1">High&nbsp;Quality, Low&nbsp;Cost, Guaranteed</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Button onClick={() => navigate('contact/')}>
                  <Typography variant="body1" sx={{ color: '#fff', textTransform: 'none' }}>
                    Get a Quote
                  </Typography>
                </Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography variant="body1">Follow us</Typography>
                  <Box>
                    <IconButton type="button" aria-label="facebook">
                      <FacebookIcon />
                    </IconButton>
                    <IconButton type="button" aria-label="instagram">
                      <InstagramIcon />
                    </IconButton>
                    <IconButton type="button" aria-label="twitter">
                      <TwitterIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="body2">
                Copyright © 2022 Castinite
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Typography variant="body2" sx={{ color: '#fff', textTransform: 'none' }}>
                  Back to Top
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'end' }}>
              <Button>
                <Typography variant="body2" sx={{ color: '#fff', textTransform: 'none' }}>
                  Privacy Policy
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon sx={{ color: '#43a047' }} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Autocomplete
          disablePortal
          id="search"
          options={navItems}
          renderInput={(params) => <TextField {...params} label="Search" />}
        />
        <List>
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => navigate(item.path)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
