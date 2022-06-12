import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import ProductDetails from 'components/ProductDetails';
import PrecisionGroutsTable from 'components/PrecisionGroutsTable';
import grout1Image from 'media/grout1.jpeg';
import alignMachineImage from 'media/align-machine-components.jpeg';
import easyPrecisionImage from 'media/easy-precision.jpeg';
import towerConstructionImage from 'media/tower-construction-starts.jpeg';
import castPolymerTowerImage from 'media/cast-polymer-towers.jpeg';
import precisionGroutsImage from 'media/precision-grouts.jpg';


const products = [
  {
    title: 'Alignit™ Precision Grouts & Fillers',
    description: 'Come to the experts. Low cost precision. Repair worn or pitted surfaces. Machine components can be precisely positioned and permanently secured using ALIGNIT grouts.',
    imageSrc: grout1Image,
    imageAlt: 'Alignit™ Precision Grouts & Fillers',
  },
  {
    title: 'Easy Precision Alignment',
    description: 'Create precise surfaces repair ways adhesive low friction surfaces fill weldments dampens vibrations',
    imageSrc: easyPrecisionImage,
    imageAlt: 'Easy Precision Alignment',
  },
  {
    title: 'Align machine components',
    description: 'ALIGNMENT Quick and easy Reduces lead times Align machine components Excellent chemical resistance Eliminate secondary machining More reliable than shims ow cost versus scraping or grinding SURFACE REPLICATION Create intricate surface configurations Quickly create very precise surfaces Low cost repair of worn or pitted surfaces Low friction formulations Long service life Machinable FILLIT™ FILLER MATERIALS',
    imageSrc: alignMachineImage,
    imageAlt: 'Align machine components',
  },
  {
    title: 'Alignit Grouts',
    description: 'ALIGNIT GROUTS ALIGNIT L Liquid for 1mm to 3 mm gaps ALIGNIT P Paste for 1 mm to 3 mm gaps ALIGNIT LT Liquid for 3 mm to 6 mm gaps ALIGNIT PT Paste for 3 mm to 6 mm gaps ALIGNIT LF Low friction way surface FILLIT Polymer Concrete filler for machine bases. Comes in 5 gallon pails',
    imageSrc: precisionGroutsImage,
    imageAlt: 'Alignit Grouts',
  },
  {
    title: 'Castinite Cast Polymer Towers',
    description: 'QUALITY PRODUCTS Precision Polymer Casting, LLC makes a complete line of precision grouting materials. We will gladly customize the color or formulation to meet your specific needs. The following can be customized to meet your needs. CUSTOM COLOR JOB SPECIFIC PACKAGING CURE RATE VISCOSITY',
    imageSrc: castPolymerTowerImage,
    imageAlt: 'Castinite Cast Polymer Towers',
  },
  {
    title: 'Proper Tower Construction',
    description: 'Proper tower construction starts with a solid, correctly aligned base. A poorly constructed base could mean catastrophic failure of the wind turbine. Towers are constantly subjected to variable dynamic stresses. ALIGNIT precision grouts assure 100% contact and correct alignment of the tower base initially and over time. Chaffing and deterioration of the tower flange seat is not likely, as 100% contact is assured. Considering the cost of a tower failure, the cost of proper installation is minor',
    imageSrc: towerConstructionImage,
    imageAlt: 'Proper Tower Construction',
  },
];

export default function PrecisionGrouts() {
  return (
    <ProductDetails
      title={'Precision Grouts'}
      subtitle={'Alignit™ Epoxy Grout Specifications'}
      body={[
        'Alignit polymer grouts are two-component polymer systems used in machine construction. These grouts are used for precise alignment of machine components, the creation of precise surfaces, to dampen vibration and/or noise attenuations. Alignit grouts consist of a black resin and a white hardener. This helps assure the proper blending of the two components, which is essential to achieving the material’s maximum properties.',
        'Alignit grouts are available in liquid or paste form. Working times are typically 30 minutes and cures within 24 hours. All properties can be customized to meet the application requirements.',
        'Safety equipment should be worn for mixing. Proper safety equipment includes gloves, approved safety glasses, and a dust mask. Contact with the skin should be removed immediately. Alignit grouts are adhesive by nature so mixing should be done on surfaces that can be easily cleaned or on a disposable cover. Clothes should be protected against the grouts; it cannot be removed once it cures.',
      ]}
      products={products}
      footer={(
        <>
          <Box p={3}>
            <Container fixed sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Paper sx={{ width: '100%' }}>
                <Box p={3}>
                  <Typography mb={1} variant="h4" color="text.secondary">
                    Mechanical Properties
                  </Typography>
                  <PrecisionGroutsTable />
                </Box>
                <Divider variant="middle" />
                <Box p={3}>
                  <Typography mb={1} variant="h4" color="text.secondary">
                    Why Use Alignit Grouts
                  </Typography>
                  <List>
                    {[
                      'Easy Precision Alignment',
                      'Cures quickly',
                      'Quick turnaround',
                      'Premeasured containers',
                      'High strength',
                      'Non-porous',
                      'Unaffected by freeze/thaw cycling',
                      'Strong bonding to concrete and steel',
                      'Holds alignment over time',
                      'Dampens vibration',
                    ].map(item => (
                      <ListItem key={item} >
                        <Typography variant="body1" color="text.secondary">
                          ◦&nbsp;{item}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Divider variant="middle" />
                <Box p={3} sx={{ backgroundColor: '#fff' }}>
                  <Typography mb={2} variant="h4" color="text.secondary">
                    Long Term Solution
                  </Typography>
                  <Typography mb={1} variant="body1" color="text.secondary">
                    Unlike concrete, Alignit precision grouts are nonporous, This means they are not subject to deterioration from freeze/thaw cycling and the compressive strength is 3 times that of conventional concrete.
                  </Typography>
                  <Typography mb={1} variant="body1" color="text.secondary">
                    ALIGNIT grouts are made with high strength epoxy resin and high purity quartz aggregate. They adhere extremely well to steel and concrete.
                  </Typography>
                </Box>
              </Paper>
            </Container>
          </Box>
        </>
      )}
    />
  )
}
