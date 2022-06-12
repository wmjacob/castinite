import * as React from 'react';

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Fab from '@mui/material/Fab';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { useNavigate } from 'react-router-dom';

import productImage from 'media/products.jpg';


const productLinks = [
  { path: 'machine-casting/', label: 'Machine Castings', avatar: 'MC' },
  { path: 'pump-bases/', label: 'Pump Bases', avatar: 'PB' },
  { path: 'precision-grout/', label: 'Precision Grouts', avatar: 'PG' },
  { path: 'construction/', label: 'Custruction Products', avatar: 'CP' },
];

export default function Products() {
  const navigate = useNavigate();
  return (
    <>
      <Box p={4} sx={{ backgroundSize: 'cover', backgroundPosition: 'bottom', backgroundImage: `linear-gradient(to top, rgba(245, 246, 252, 0.52),rgba(0, 0, 0, 0.9)),url("${productImage}")` }}>
        <Container maxWidth="md" sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <Typography mb={2} sx={{ color: '#fff', textAlign: 'center', textTransform: 'uppercase' }} variant="h2">Products</Typography>
          <Typography mb={3} sx={{ color: '#fff', textAlign: 'center' }} variant="bod1">Precision Polymer Casting, LLC provides CASTINITE high precision polymer concrete castings and precision machine grouts and fillers for the machine tool, instrumentation, semi-conductor and other industries. CASTINITE castings are created using the third generation of Cast to ToleranceTM ( CTTTM) manufacturing technology. Enhancements to this manufacturing process include a climate controlled environment and segregated raw materials. In addition, castings are created with an improved quality of epoxy resin and hardener, mixed with proprietary additives. We use the highest quality mineral aggregates found in the industry.</Typography>
          <Fab
            color="secondary"
            variant="extended"
            onClick={() => navigate('contact/')}
          >
            Contact Us
          </Fab>
        </Container>
      </Box>
      <Box p={4}>
        <Container maxWidth="lg">
          <Paper>
            <List>
              {productLinks.map((item, index) => (
                <ListItem key={item.label} disablePadding secondaryAction={
                  <IconButton edge="end">
                    <ChevronRightIcon sx={{ color: '#43a047' }}/>
                  </IconButton>
                }>
                    <ListItemButton onClick={() => navigate(item.path)}>
                      <ListItemIcon>
                        <Avatar sx={{ bgcolor: '#43a047' }}>
                          {item.avatar}
                        </Avatar>
                      </ListItemIcon>
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Container>
      </Box>
    </>
  )
}
