import * as React from 'react';

import ProductDetails from 'components/ProductDetails';
import cpImage1 from 'media/cp1.jpeg';
import cpImage2 from 'media/cp2.jpeg';
import cpImage3 from 'media/cp3.jpeg';
import cpImage5 from 'media/cp5.jpeg';
import cpImage6 from 'media/cp6.jpeg';
import cpImage7 from 'media/cp7.jpeg';
import cpImage8 from 'media/cp8.jpeg';
import cpImage9 from 'media/cp9.jpeg';

const products = [
    {
        title: 'Polymer Composite Bridge Rail Cover',
        description: 'Twenty years after installation the results show the bridge rails to be in excellent condition. Installation costs and time are greatly reduced using these polymer composite covers. This shows a section of the polymer cover over the existing concrete railing. To repair this bridge railing covers were placed over, instead of demolishing it. The Delaware District ODOT crew completed installation in only three days. Today the bridge is still in excellent condition. The polymer covers protect the underling concrete railing from salts and freeze thaw cycles. Because they are in sections, the bridge is allowed to flex without cracking the railing.',
        imageSrc: cpImage1,
        imageAlt: 'Polymer Composite Bridge Rail Cover',
      },
      {
        title: 'North Field Road',
        description: 'North Randall – Cuyahoha County Miles Road at North Field Road Concrete pillar and pipe railing',
        imageSrc: cpImage2,
        imageAlt: 'North Field Road',
      },
      {
        title: 'Polymer Covers',
        description: 'The polymer covers were filled with concrete. The polymer covers were used as permanent forms. The covers protect the concrete from salts and freeze thaw problems.',
        imageSrc: cpImage3,
        imageAlt: 'One Piece CMM Casting',
      },
      {
        title: 'CHAGRIN FALLS BRIDGE OVER THE CHAGRIN RIVER',
        description: `
            Polymer Covers were used as permanent forms. Work was performed by a local contractor. Complete construction of both sides took 5 days.
            EASY QUICK INSTALLATION
            LOW COST
            LONG LIFE
            EPOXY POLYMER SHELL
            NO FREEZE THAW PROBLEMS
            PROTECTS REBAR
            CAN BE REFLECTIVE
        `,
        imageSrc: cpImage5,
        imageAlt: 'CHAGRIN FALLS BRIDGE OVER THE CHAGRIN RIVER',
      },
      {
        title: 'Complete construction',
        description: 'Polymer Covers were used as permanent forms. Work was performed by a local contractor. Complete construction of both sides took 5 days.',
        imageSrc: cpImage6,
        imageAlt: 'Complete construction',
      },
      {
        title: 'Complete Construction Clips',
        description: 'Clips were cast into the bottom edge to anchor the front of the cover.',
        imageSrc: cpImage7,
        imageAlt: 'Complete Construction Clips',
      },
      {
        title: 'Work was performed',
        description: 'Work was performed with top of arms cast to 0.001″ flatness and coplanarity. Base has foam cast in to reduce weight.',
        imageSrc: cpImage8,
        imageAlt: 'Work was performed',
      },
      {
        title: 'Additional Image',
        description: 'Work was performed with top of arms cast to 0.001″ flatness and coplanarity. Base has foam cast in to reduce weight.',
        imageSrc: cpImage9,
        imageAlt: 'Additional Image',
      },
];

export default function ConstructionProducts() {
  return (
    <ProductDetails
      title={'Construction Products'}
      subtitle={'Low Cost Polymer Parapet Cover'}
      body={([
        'Low cost repair to existing parapets versus the current methods, Much longer life than concrete, No need to paint the parapets, Parapets can be made decorative, resembling stone or brick, Can be made reflective, Utilizes polymer technology, Will allow municipalities to do much more repair work with less funds',
      ])}
      products={products}
    />
  )
}
