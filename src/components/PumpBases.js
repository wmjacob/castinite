import * as React from 'react';

import ProductDetails from 'components/ProductDetails';
import pbImage1 from 'media/pb1.jpeg';
import pbImage2 from 'media/pb2.jpeg';
import pbImage3 from 'media/pb3.jpeg';
import pbImage4 from 'media/pb4.jpeg';

const products = [
  {
    title: 'Special Features Available',
    description: `
        Special shapes with low cost tooling
        Raised motor mounts
        Hidden tapped holes
        Custom colors
        Special surfaces coatings
    `,
    imageSrc: pbImage1,
    imageAlt: 'Special Features Available',
  },
  {
    title: 'Dampens Vibration',
    description: `
        Quick turnaround
        Low cost
        Highest quality available
        Customized to your needs
        The most experiences polymer casting people
        Licensed professional engineer to help you.
    `,
    imageSrc: pbImage2,
    imageAlt: 'Dampens Vibration',
  },
  {
    title: 'Chemical Resistant Pump Bases',
    description: `
        SUPERIOR VIBRATION DAMPENING
        DAMPENS 47 TIMES FASTER THAN STEEL
        11 TIMES FASTER THAN CAST IRON
        REDUCED VIBRATION INCREASES BEARING AND SEAL LIFE
        REDUCES LOOSENING OF FITTINGS
        REDUCES NOISE
    `,
    imageSrc: pbImage3,
    imageAlt: 'Chemical Resistant Pump Bases',
  },
  {
    title: 'Polymer concrete pump bases',
    description: 'Ceramic mineral casting for excellent chemical resistance, Raised drip prevention edge, Two threaded grout holes, leading to grout troughs, Thru inserts, tapped at the bottom for easy stilting, eliminates the dangerous and expensive stilt bars, Can be cast in any color, Can have a custom logo, Flat to .002 inches per foot, Standard cpvc fitting, EZ-Flo catch basin, Can be cast with an extreme chemical resistant surface, Grout troughs',
    imageSrc: pbImage4,
    imageAlt: 'Polymer concrete pump bases',
  },
];

export default function PumpBases() {
  return (
    <ProductDetails
      title={'Pump Bases'}
      body={[
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet nisi sit amet libero consectetur, id dapibus urna viverra. Suspendisse et ligula ac sem facilisis pulvinar sed eget enim. Nam id metus diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin metus tortor, pellentesque sodales congue vulputate, euismod eu mi. Etiam volutpat varius neque, et pretium nulla tempor sed. Curabitur posuere pulvinar posuere. Vivamus finibus blandit ligula, pharetra pellentesque sapien dapibus id. Nunc at euismod dui. Integer varius ultricies dignissim. Phasellus eleifend interdum metus quis convallis. Morbi in elit et justo malesuada condimentum at in erat. Aliquam fermentum turpis sed sapien tincidunt suscipit non ac est.',
      ]}
      products={products}
    />
  )
}
