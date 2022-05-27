import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar'
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import MenuIcon from '@mui/icons-material/Menu';
import PublicIcon from '@mui/icons-material/Public';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Fab from '@mui/material/Fab'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
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

const drawerWidth = 240;
const navItems = ['Home', 'About Us', 'Producs', 'Industries', 'FAQs', 'Contact Us'];
const heroItems = [
  { src: 'hero1.jpg', caption: <>Industry Leading<br />Experience</> },
  { src: 'hero2.jpg', caption: <>International<br />Leading Experience</> },
  { src: 'hero3.jpg', caption: <>Low Cost<br/>Solutions</> },
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

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [heroIndex, setHeroIndex] = React.useState(0);
  const heroItem = heroItems[heroIndex];
  const handleChange = (event) => {
    setHeroIndex((event.target).value);
  };
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
        <Typography variant="h6" sx={{ flexGrow: 1, alignItems: 'center', display: 'flex', fontWeight: 'bold' }}>
            <PublicIcon fontSize="large" /> Castinite
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Button  sx={{ color: '#fff', textTransform: 'none', ...(open && { display: 'none' }) }}>Contact Us</Button>
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
        <Box pt={15} sx={{ backgroundImage: `linear-gradient(to top, rgba(245, 246, 252, 0.52), rgba(0, 0, 0, 0.73)),url('${heroItem.src}')`, backgroundPosition: 'center', transition: 'background-image 5s ease-in-out', minHeight: '600px', backgroundSize: 'cover', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }} >
          <Container maxWidth="sm">
            <Typography sx={{ color: '#fff', textAlign: 'center', textTransform: 'uppercase' }} variant="h2">{heroItem.caption}</Typography>
          </Container>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Fab
              color="secondary"
              variant="extended"
            >
              Get A Quote
            </Fab>
            <FormControl>
              <RadioGroup
                aria-label="Select Image"
                name="image-selector"
                value={heroIndex}
                onChange={handleChange}
                sx={{ display: 'flex', flexDirection: 'row', color: '#fff' }}
              >
                {Object.keys(heroItems).map(index => {
                  const sx = index === heroItems.length - 1 ? { marginRight: 0 } : {};
                  return <FormControlLabel key={index} sx={sx} value={index} control={<Radio />} label="" />;
                })}
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        <Box sx={{ p: 3 }}>
          {/* <Typography variant="body1">Precision Polymer Casting, LLC provides Castinite high precision polymer concrete castings and precision machine grouts and fillers for the machine tool, instrumentation, semi-conductor and other industries. Castinite castings are created using the third generation of Cast to Tolerance™ ( CTT™) manufacturing technology. Enhancements to this manufacturing process include a climate controlled environment and segregated raw materials. In addition, castings are created with an improved quality of epoxy resin and hardener, mixed with proprietary additives. We use the highest quality mineral aggregates found in the industry.</Typography> */}
          <Typography mb={3} sx={{ textAlign: 'center', textTransform: 'none' }} variant="h4">Precision&nbsp;Polymer Casting&nbsp;Professionals</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={3}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  alt="machine castings"
                  height="200"
                  image="/machine-casting.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Machine Castings
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  CASTINITE castings are created using the third generation of Cast to Tolerance&#8482; (CTT&#8482;) manufacturing technology. Enhancements to this manufacturing process include a climate controlled environment and segregated raw materials. In addition, castings are created with an improved quality of epoxy resin and hardener, mixed with proprietary additives. We use the highest quality mineral aggregates found in the industry.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  alt="pump bases"
                  height="200"
                  image="/pump-base.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Pump Bases
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Aenean at elementum ligula, eget pellentesque ipsum. Nunc mauris erat, aliquet at fermentum ut, facilisis ac libero. Morbi lobortis congue est in aliquet. Proin ac interdum mauris, non facilisis sem.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  alt="precision grouts"
                  height="200"
                  image="/precision-grouts.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Precision Grouts
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Vestibulum efficitur tellus suscipit sem tincidunt eleifend. Etiam efficitur, dolor suscipit fermentum ultricies, metus massa varius arcu, sit amet consequat purus augue eu mi. In hac habitasse platea dictumst.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  alt="Rail Ties"
                  height="200"
                  image="/rail-ties.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Rail Ties
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Cras quis accumsan lectus. Nunc ac auctor sem. Ut risus diam, sodales ac ullamcorper quis, eleifend ut felis. Sed mauris libero, pellentesque et lacinia in, lobortis ut urna.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Divider variant="middle" />
        <Box pt={3}>
          <Container fixed>
            <Typography align="center" gutterBottom sx={{ textTransform: 'none' }} variant="h4">Expert&nbsp;Engineers In&nbsp;House</Typography>
            <Typography align="center" gutterBottom variant="body1">The most experienced people in this industry are ready to serve your needs.</Typography>
            <Typography align="center" variant="body1">They can design and build low cost temporary tooling for a fraction of the cost of others and have it repeatedly produce good castings for years. Some of his molds have produced parts to amazing tolerances.</Typography>
          </Container>
        </Box>
        <Box m={3} sx={{ display: 'flex', 'justifyContent': 'center' }}>
          <Fab
            color="secondary"
            variant="extended"
            sx={{
            }}
          >
            Contact Us
          </Fab>
        </Box>
        <Divider variant="middle" />
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={3}>
              <Box p={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: '#43a047', width: 56, height: 56 }}>
                  <PrecisionManufacturingIcon />
                </Avatar>
                <Typography mt={1} align="center" gutterBottom variant="h5">
                  Products
                </Typography>
                <Typography align="center" variant="body2">
                  We cast products for machine tools, chemical pump bases, chip equipment, medical equipment, highway construction, railroad ties, synthetic granite statues and whatever makes sense.
                </Typography>
                <Button>Explore</Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Box p={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: '#43a047', width: 56, height: 56 }}>
                  <LocalAtmIcon />
                </Avatar>
                <Typography mt={1} align="center" gutterBottom variant="h5">
                  Low Cost
                </Typography>
                <Typography align="center" variant="body2">
                  Our philosophy is to expand the industry conversion to epoxy polymer castings by developing innovative production techniques to keep the costs low.
                </Typography>
                <Button>Get A Quote</Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Box p={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: '#43a047', width: 56, height: 56 }}>
                  <DesignServicesIcon />
                </Avatar>
                <Typography mt={1} align="center" gutterBottom variant="h5">
                  Services
                </Typography>
                <Typography align="center" variant="body2">
                  We can achieve extremely close tolerances by casting to tolerance in high precision tooling, replicating surfaces or grouting components into position.
                </Typography>
                <Button>Learn More</Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Box p={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: '#43a047', width: 56, height: 56 }}>
                  <HeadsetMicIcon />
                </Avatar>
                <Typography mt={1} align="center" gutterBottom variant="h5">
                  Customer Service
                </Typography>
                <Typography align="center" variant="body2">
                  No one is more dedicated to meeting customer’s needs and holding costs. Let us help you save money and improve your machine's performance.
                </Typography>
                <Button>Contact Us</Button>
              </Box>
            </Grid>
        </Grid>
        <Box pt={3} pb={1} pl={1} pr={1} sx={{ backgroundColor: '#444', color: '#fff' }}>
          <Box pb={5}>
            {navItems.map((item, index) => item === 'Contact Us' ? undefined : <Button key={index}>{item}</Button>)}
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
                <Button>
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
          {navItems.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
