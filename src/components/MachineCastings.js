import * as React from 'react';

import ProductDetails from 'components/ProductDetails';
import mcImage1 from 'media/mc1.jpeg';
import mcImage2 from 'media/mc2.jpeg';
import mcImage3 from 'media/mc3.jpeg';
import mcImage4 from 'media/mc4.jpeg';
import mcImage5 from 'media/mc5.jpeg';
import mcImage6 from 'media/mc6.jpeg';
import mcImage7 from 'media/mc7.jpeg';
import mcImage8 from 'media/mc8.jpeg';
import mcImage9 from 'media/mc9.jpeg';
import mcImage10 from 'media/mc10.jpeg';
import mcImage11 from 'media/mc11.jpeg';
import mcImage12 from 'media/mc12.jpeg';
import mcImage13 from 'media/mc13.jpeg';
import mcImage14 from 'media/mc14.jpeg';
import mcImage15 from 'media/mc15.jpeg';
import mcImage16 from 'media/mc16.jpeg';
import mcImage17 from 'media/mc17.jpeg';
import mcImage18 from 'media/mc18.jpeg';
import mcImage19 from 'media/mc19.jpeg';

const products = [
  {
    title: 'Casting for a medium size CMM.',
    description: 'Casting for a medium size CMM. Top rails cast to 0.001 flatness. Foam cores cast in to reduce weight.',
    imageSrc: mcImage1,
    imageAlt: 'Casting for a medium size CMM.',
  },
  {
    title: 'Computer Chip Bonding Base',
    description: 'Casting for a computer chip bonding machine to allow higher bonding rates with greater accuracy. Semiconductor Industry.',
    imageSrc: mcImage2,
    imageAlt: 'Computer Chip Bonding Base',
  },
  {
    title: 'One Piece CMM Casting',
    description: 'One piece casting for a small CMM cast in grey color with a steel plate incorporated into the casting.Top rails cast to 0.001″ flatness.',
    imageSrc: mcImage3,
    imageAlt: 'One Piece CMM Casting',
  },
  {
    title: 'CASTINITE Casting with Steel Rails',
    description: 'CASTINITE base for a screen printing machine with foam cores to lighten the weight and steel rails grouted in to tolerance. Semiconductor Industry.',
    imageSrc: mcImage4,
    imageAlt: 'CASTINITE Casting with Steel Rails',
  },
  {
    title: 'Inspection Base Casting',
    description: 'Cast in natural color and cast to tolerance. The aluminium sleeve is cast-in flat with the surface during the process.',
    imageSrc: mcImage5,
    imageAlt: 'Inspection Base Casting',
  },
  {
    title: '180 deg. Small drum for film image setter',
    description: '180 deg. Small drum for film image setter. Cast to precise tolerance with vacuum grooves.',
    imageSrc: mcImage6,
    imageAlt: '180 deg. Small drum for film image setter',
  },
  {
    title: 'CASTINITE base for a laser inspection machine',
    description: 'CASTINITE base for a laser inspection machine with sand filled center to add to dampening.',
    imageSrc: mcImage7,
    imageAlt: 'CASTINITE base for a laser inspection machine',
  },
  {
    title: 'Casting for a large CMM',
    description: 'Casting for a large CMM with top of arms cast to 0.001″ flatness and coplanarity. Base has foam cast in to reduce weight.',
    imageSrc: mcImage8,
    imageAlt: 'Casting for a large CMM',
  },
  {
    title: 'Impossible 270 deg. Internal Drum',
    description: 'Casting with 270 degree core cast to .001 TIR and 45 vacuum grooves with 1.0 mm diameter individual outlets. It is impossible to cast a part with a 18″ diameter, going 270 degrees and 45 vacuum grooves to 0.001″ TIR, 68 inches, but we did it.',
    imageSrc: mcImage9,
    imageAlt: 'Impossible 270 deg. Internal Drum',
  },
  {
    title: 'Polymer Composite Grinder Cross Ways',
    description: `
      Surface grinder cross way
      polymer casting, 82 inches long with a flat and “V” way
      BENEFITS

      Way surfaces cast into base using a low friction Polymer material
      Oil passages and oil lines cast in place
      Excellent vibration dampening
      Excellent chemical resistance
      Improved surface finish
      Vibration dampening improves wheel life and part finish
      Sound deadening provides quiet operation
    `,
    imageSrc: mcImage10,
    imageAlt: 'Polymer Composite Grinder Cross Ways',
  },
  {
    title: 'POLYMER COMPOSITE CNC KNEE MI 11',
    description: `
      Job Shop ™ 3 axis CNC Knee mill
      Prototype knee mill produced using low cost tooling
      Castinite casting includes base, overarm, saddle, knee, and jack stand
      Base and overarm produced using steel molds; ways surfaces grouted to tolerance
      Knee ways were steel angle segments
      BENEFITS

      Vibration dampening provides longer tool life and better machined finish
      Excellent sound deadening for quieter operation
      No Secondary machining required
      Three month lead time to produce first parts
      Low cost tooling and parts
      Excellent surface finish
    `,
    imageSrc: mcImage11,
    imageAlt: 'POLYMER COMPOSITE CNC KNEE MI 11',
  },
  {
    title: 'POLYMER COMPOSITE PRECISION LASER SCANNER',
    description: `
      Laser scanner base for film imprinting for high definition color
      Castinite base replacing cast iron;40L X 36D X 24W 18′ diameter recess
      Radial surface cast to .002 TTR
      All surfaces cast flat and coplanar within .002
      110 taped holes cast in place
      48 vaccum grooves cast in
      48 1.0mm diameter vacuum holes cast in place
      BENEFITS

      70% Lower cost
      Cast to tolerance reducing production time
      Will not rust or corrode
      Vibration dampening provides better imaging
      Higher production rate than cast iron therefore less W.I.P
      Approximate tooling cost $30,000
    `,
    imageSrc: mcImage12,
    imageAlt: 'POLYMER COMPOSITE PRECISION LASER SCANNER',
  },
  {
    title: 'WELDMENT REPLACEMENT',
    description: `
      Castinite Base 48″ X 28″ X 24″ with open bottom for coolant reservoir
      Bed mill base replaced a steel weldment
      Casting includes coolant troughs and precise mounting pads
      PVC fittings cast through for the coolant drain
      Cover fasteners cast in place
      BENEFITS

      Vibration dampening improves machined finish and increases tool life
      Sound deadening for quieter operation
      Chemical resistant, even to aggressive coolants
      Will not rust or corrode
      No secondary machining required
      Mounting pads cast to .001 coplanar
      Lower cost than weldment
      Improved stability
      Low cost mold, $5,500
    `,
    imageSrc: mcImage13,
    imageAlt: 'WELDMENT REPLACEMENT',
  },
  {
    title: 'CAST IRON REPLACEMENT',
    description: `
      Casting Polymer casting 48″ X 20″ X 20″
      Balancing machine base cast with steel T-slots
      Foam core center with internal ribbing
      Smooth as cast surface finish
      BENEFITS

      Damping improves balancing accuracy
      Foam core reduces weight and cost
      Steel T-slots cast into the top
      Steel bar cast in for gear rack
      Lower Cost
      Much better surface finish, ready for painting
      Low cost steel mold, $7,500
    `,
    imageSrc: mcImage14,
    imageAlt: 'CAST IRON REPLACEMENT',
  },
  {
    title: 'STAINLESS STEEL REPLACEMENT',
    description: `
      Pump bases are used to mount a pump and motor for chemical pumping
      Mounting surface flat to .0030″
      Stainless steel threads cast in place
      Plastic fitting for catch basin cast in place
      BENEFITS

      Excellent chemical resistance
      Vibration dampening for longer pump life
      Sound deadening for quieter operation
      Low cost than stainless steel
      No machining required
      Catch basin cast in place
      Will not rust or corrode
      Heavy duty construction
      Can cast any size and shape
      Low cost tooling
    `,
    imageSrc: mcImage15,
    imageAlt: 'STAINLESS STEEL REPLACEMENT',
  },
  {
    title: 'CASTINITE Lathe Bed Casting',
    description: `
      Travel X axis 38″, Z axis 10″
      Travel rate X=1000 IPM, Z=500IPM
      Spindle speed to 6,000 rpm
      Turning diameter 10″
      Castinite polymer base 72″X48″X24″ ; 3500lbs
      Steel way mounting surfaces cast in place
      Wire ducting cast in place
      Motor and ball screw mounting plate cast in place
      BENEFITS

      Way surfaces cast into base using a low friction Polymer material
      Oil passages and oil lines cast in place
      Excellent vibration dampening
      Excellent chemical resistance
      Improved surface finish
      Vibration dampening improves wheel life and part finish
      Sound deadening provides quiet operation
    `,
    imageSrc: mcImage16,
    imageAlt: 'CASTINITE Lathe Bed Casting',
  },
  {
    title: 'Chip Engraving Base for $4.5 Million Machine',
    description: `
      This base is the heart of one of the world’s most accurate hi-tech precision optical instruments in production today.
      Part cost $23,000-Mold cost $125,000
      215 threaded inserts cast to + .005 TIR
      Hole diameters cast to + .0005/- .0000
      Datums cast flat & coplanar within .0005
      Selected over aluminum for improved vibration dampening, lower linear expansion & lower cost
      Greatly reduced lead time from 24 weeks to 8 weeks
      BENEFITS

      Excellent vibration dampening increases tool life
      Sound deadening for quieter operation
      Lower Cost
      Quicker production to finished part
      Not affected by cutting fluids
      Will not rust or corrode
    `,
    imageSrc: mcImage17,
    imageAlt: 'Chip Engraving Base for $4.5 Million Machine',
  },
  {
    title: 'Optical Scanner Base',
    description: `
      High defination film imaging base with 2,000 rpm rotating drum.
      CASTINITE Polymer base 70″L X 39″W X 8″H
      Linear ways mounted directly to base
      Linear motor mounted directly to base
      Bearing blocks grouted onto base to .001 alignment
      EMI Shielding cast in
      Foam coring for reduced weight
      150 corrosion resistant inserts cast in
      PVC ducting cast in
      BENEFITS

      Significant cost savings vs aluminum casting
      Lower thermal expansion rate
      Shorter production time
      Superior surface finish
      Vibration dampening for improved image quality
      Quieter operation
      Will not rust or corrode
      Steel production mold cost $15,000
    `,
    imageSrc: mcImage18,
    imageAlt: 'Optical Scanner Base',
  },
  {
    title: 'High Speed Large Machining Center',
    description: `
      Overall size 135″ X 162″ with 120″ column
      Total Cast Weight 70,000 lbs
      Column mounting to base using CASTINITE grout
      Coolant trough cast into base with PVC pipe drains
      Wire ways cast into base
      Cast using wood molds
    `,
    imageSrc: mcImage19,
    imageAlt: 'High Speed Large Machining Center',
  },

];

export default function MachineCastings() {
  return (
    <ProductDetails
      title={'Machine Castings'}
      subtitle={'Alignit™ Epoxy Grout Specifications'}
      body={[
        'Polymer Castings take on metals CASTINITE epoxy/quartz composites can often be precisely cast to size without secondary machining. This 18-in-diameter semicircular drum has an ascast accuracy of 0.001-in.TIR.',
      ]}
      products={products}
    />
  )
}
