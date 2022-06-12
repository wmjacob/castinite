import * as React from 'react';

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import PublicIcon from '@mui/icons-material/Public';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';

import { useNavigate } from 'react-router-dom';

import aboutUsImage from 'media/about-us.jpg';
import terryImage from 'media/terry.jpeg';


export default function About() {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundSize: 'cover', backgroundImage: `linear-gradient(to top, rgba(245, 246, 252, 0.52),rgba(0, 0, 0, 0.73)),url(${aboutUsImage})`, height: "500px" }}>
        <Typography sx={{ color: '#fff', textAlign: 'center', textTransform: 'uppercase' }} variant="h1">About Us</Typography>
      </Box>
      <Box p={3} sx={{ backgroundColor: '#fff' }}>
        <Container maxWidth="md" sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <Typography mb={2} color="text.secondary" variant="body1">Precision Polymer Casting was originally started in 1994 by Terry Capuano, PE, who started the solid cast epoxy machine base casting industry in the US in 1988. He developed the polymer casting technology, production techniques, resin systems and aggregate blends used industry-wide today.</Typography>
          <Typography mb={2} color="text.secondary" variant="body1">PPC’s philosophy is to expand the industry conversion to epoxy polymer castings by developing innovative production techniques to keep the costs low, provided unique castings to extremely close tolerances and by providing in-house, dedicated customer representatives.</Typography>
          <Avatar sx={{ bgcolor: '#43a047', width: 48, height: 48 }}><PublicIcon fontSize="large" /></Avatar>
        </Container>
      </Box>
      <Box p={3}>
        <Container maxWidth="md">
          <Box mb={3} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar src={terryImage}  sx={{ width: 112, height: 112 }} />
              <Typography mt={1} variant="body2">Terry Caputo</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar sx={{ width: 112, height: 112 }} />
              <Typography mt={1} variant="body2">Chris Gabrielson</Typography>
            </Box>
          </Box>
          <Typography mt={1} variant="body1">In 2000, Mr. Capuano sold PPC to ITW. After the sale, customers needs were not as well observed and pricing was increased significantly, causing problems for customers.</Typography>
          <Typography mt={1} variant="body1">In 2009, Terry joined with Chris Gabrielson, who also Started in Polymer casting in 1988, to restart PPC to better serve customers. They developed the latest generation epoxy casting technology called CASTINITE.</Typography>
          <Typography color="primary" mt={2} variant="h4" sx={{ textAlign: 'center' }}>Most experienced</Typography>
          <Typography mt={2} variant="body1">Now the two most experienced people in this industry are ready to serve your needs. We are open to casting products for machine tools, chemical pump bases, chip equipment, medical equipment, highway construction, railroad ties, synthetic granite statues and whatever makes sense.</Typography>
          <Typography mt={1} variant="body1">PPC can achieve extremely close tolerances by casting to tolerance in high precision tooling, replicating surfaces or grouting components into position.</Typography>
          <Typography color="primary" mt={2} variant="h4" sx={{ textAlign: 'center' }}>Fraction of the cost</Typography>
          <Typography mt={2} variant="body1">Chris can design and build low cost temporary tooling for a fraction of the cost of others and have it repeatedly produce good castings for years. Some of his molds have produced parts to amazing tolerances.</Typography>
          <Typography mt={1} variant="body1">We also produce ALIGNIT epoxy-based grouts for replicating precise surfaces, grouting components in place, creating low friction way surfaces and setting machine foundations and pump bases.</Typography>
        </Container>
      </Box>
      <Divider variant="middle" />
      <Box p={3} sx={{ backgroundColor: '#', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <Typography mb={2} sx={{ textAlign: 'center' }} variant="h6">What's different when you work with us?</Typography>
        <Typography mb={2} variant="body1">No one is more dedicated to meeting customer’s needs and holding costs.</Typography>
        <Fab
          color="primary"
          variant="extended"
          onClick={() => navigate('contact/')}
        >
          Contact Us
        </Fab>
      </Box>
    </>
  )
}
