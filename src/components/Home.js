import * as React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box'
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab'
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

import hero1Image from 'media/hero1.jpg';
import hero2Image from 'media/hero2.jpg';
import hero3Image from 'media/hero3.jpg';
import machineCastingImage from 'media/machine-casting.jpg';
import pumpBaseImage from 'media/pump-base.png';
import precisionGroutsImage from 'media/precision-grouts.jpg';
import railTiesImage from 'media/rail-ties.png';

const heroItems = [
  { src: hero1Image, caption: <>Industry Leading<br />Experience</> },
  { src: hero2Image, caption: <>Inter&#8203;national<br />Service</> },
  { src: hero3Image, caption: <>Low Cost<br/>Solutions</> },
];


export default function Home() {
  const [heroIndex, setHeroIndex] = React.useState(0);
  const heroItem = heroItems[heroIndex];
  const handleChange = (event) => {
    setHeroIndex((event.target).value);
  };
  const navigate = useNavigate();

  return (
    <>
      <Box pt={15} sx={{ backgroundImage: `linear-gradient(to top, rgba(245, 246, 252, 0.52), rgba(0, 0, 0, 0.73)),url('${heroItem.src}')`, backgroundPosition: 'center', transition: 'background-image 5s ease-in-out', minHeight: '600px', backgroundSize: 'cover', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }} >
        <Container maxWidth="sm">
          <Typography sx={{ display: { xs: 'none', 'md': 'block' }, color: '#fff', textAlign: 'center', textTransform: 'uppercase' }} variant="h2">{heroItem.caption}</Typography>
          <Typography sx={{ display: { md: 'none' }, color: '#fff', textAlign: 'center', textTransform: 'uppercase' }} variant="h3">{heroItem.caption}</Typography>
        </Container>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Fab
          color="secondary"
          variant="extended"
          onClick={() => navigate('contact/')}
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
        <Typography mb={3} sx={{ textAlign: 'center', textTransform: 'none' }} variant="h4">Precision Polymer Casting Professionals</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              alt="machine castings"
              height="200"
              image={machineCastingImage}
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
              image={pumpBaseImage}
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
              image={precisionGroutsImage}
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
              image={railTiesImage}
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
          <Button onClick={() => navigate('products/')}>Explore</Button>
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
          <Button onClick={() => navigate('contact/')}>Get A Quote</Button>
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
          <Button onClick={() => navigate('contact/')}>Contact Us</Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
