import * as React from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuestionIcon from '@mui/icons-material/QuestionMark'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

import faqImage from 'media/curious-cat-cropped.jpg';


const questions = [
  {
      q: 'What is Castinite polymer composite?',
      a: ['Castinite polymer Composite is a mixture of high strength epoxy with chemical additives to release air and improve adhesion to the aggregates, and scientifically blended high purity, high strength mineral aggregate fillers.']
  },
  {
      q: 'What are some design considerations?',
      a: ['Like any casting process, draft angles are desirable on projections and recesses. Variations in wall thickness are not of concern and thick sections can be cored using inexpensive foam material, PVC pipes, cardboard tubes or other materials. Tapped holes are usually threaded inserts, so the wall thickness from the tapped hole center needs to be considered. Parts are typically cast upside down, making the bottom surface rough and allowing height dimensions to vary by about .25 inches.', 'Parts can be cast without draft and to more precise heights, at an additional cost.']
  },
  {
      q: 'What size can parts be cast?',
      a: ['CASTINITE castings usually are best when the parts have an inch or greater wall thickness and weight at least 80 lbs. Smaller components can be produced using a different resin system and formulation. The largest machine tool base every cast weighed 70,000 lbs. The maximum size part is limited only by the ability to ship the part.', 'Typical Castinite parts average between 500 and 10,000 lbs.']
  },
  {
      q: 'How precise can parts be cast?',
      a: ['Part flatness, hole location, hole diameter, and feature tolerances are all measures of precision. This precision of the cast part is determined by mold design, mold construction, and process variables.', 'With a properly designed high-quality steel mold, parts can be cast with a flatness of .0005in/f, feature tolerances of .001in/ft and hole diameters of .0005in/ft. When closer tolerances are required, or a low-cost mold is to be used, tolerances can be achieved using secondary machining, lapping, grinding or replicating processes.', 'Casting to tolerance is highly desirable as it eliminates expensive secondary operations. By eliminating secondary operations, the delivery time is expedited, reducing work \\u2013in-process inventory and allowing a quicker response to customer delivery requirements. Deliveries can be days, instead of weeks or months, as is typical for metallic castings.']
  },
  {
      q: 'Does this material creep?',
      a: ['All materials creep. Using precision control on the resin and hardener mixture, a high-quality mixture, a high quality, high strength resin system and proper part design, CASTINITE castings have one of the lowest creep rates of any construction material. Metallic parts not only creep but also distort due to internal stresses. High precision parts should, therefore, be produced from CASTINITE composite material.']
  },
  {
      q: 'What are the wall thickness considerations?',
      a: ['The standard Castinite casting mixture has aggregate up to \\u00bd\\u201d in size. The minimum section thickness should be at least three times the aggregate size or 1.5\\u201d. The thinner section can be cast, but changes in the formulation may be required.', 'Unlike metallic castings, CASTINITE polymer castings can have sections with significant variation in thickness without causing internal stresses. This often means several components can be cast as one, eliminating the precision required for stacking of components. This also reduces assembly time and inventory costs. Metallic casting required consistent cross section thickness to reduce internal stresses and distortions.']
  },
  {
      q: 'Can the material be threaded?',
      a: ['No, tapped holes are created by casting threaded inserts into position. These inserts are produced from steel, plated steel, stainless steel, plastic, and brass.', 'Tapped hole locations are determined by the mold, which means once a mold is qualified, subsequent part inspection of the tapped holes is not necessary. A part can not produce without a tapped hole and the hole location will not vary significantly.', 'Threaded inserts can be added to a finished casting by drilling a hole with a hammer drill and grouting the insert in place. Multiple holes can be precisely located using a grout template. Attaching wire harness or lubrication tubing during assembly can be accomplished with adhesive brackets.']
  },
  {
      q: 'How strong are threaded inserts?',
      a: ['With proper casting design, the insert is strong enough to allow a grade 8 bolt to be tightened to the proper torque. For extreme bolt loading, the inserts can be anchored deeper into the casting. Inserts should be kept at least one diameter from the part edge. Steel plates can even be cast below the surface to allow corrosion resistance or for a better appearance.']
  },
  {
      q: 'Do dowel pins need inserts?',
      a: ['Dowel pin holes are cast directly into the CASTINITE composite. The casting hole allows a perfect fit with a slight press fit. Locations can be held to .001in/ft. Blank steel inserts can be cast in place, if the dowel pins need to be located during final machine assembly']
  },
  {
      q: 'Can CASTINITE castings be machined?',
      a: ['CASTINITE casting can be ground using conventional aluminum oxide wheels or milled using carbide cutting tools. The ceramic aggregate tends to wear tooling very quickly, so secondary machining is not as desirable as casting to tolerance.', 'Surfaces can be lapped like granite for extreme precision.']
  },
  {
      q: '.Can the density be altered?',
      a: ['CASTINITE composite has a density of .083 ib./cu. In. Part weight can be reduced by casting foam cores internally. This creates a closed box design that provides a stiffer design than open end cores typical of metallic castings.', 'Weight reduction can be achieved by using hollow structural forms such as steel box tubing. This not only reduces the weight of the part, but it also adds stiffness. Light weight fillers can be used, but this can reduce the part\\u2019s strength', 'Where greater weight is desired heavy fillers can be used.']
  },
  {
      q: 'What can be done about the low tensile strength?',
      a: ['Where tensile loading is a concern, the section thickness should be increased or internal reinforcements can be used. Internal reinforcements can be structural rebar, threaded rod, angle iron, fiberglass rebar or any other suitable reinforcement structure.']
  },
  {
      q: 'Can CASTINITE casting be painted?',
      a: ['Parts can be painted with any commercial paint. Priming is not necessary as these parts cannot rust, but it is necessary to properly clean the surface to remove mold release from the part surface, or the paint will not adhere. Surface imperfections can be filled using standard auto body filler.', 'CASTINITE castings are typically cast black, not painted, as they can not rust or corrode and are impervious to most common solvents. It is possible to cast in other colors, but this requires significant production volume and accurate color matching is not possible.', 'The part surface finish will exactly replicate the mold surface, from high gloss to matte to textured.']
  },
  {
      q: 'Should the edge have a radius?',
      a: ['An edge with a radius is less likely to chip, but tooling to produce radius edges can be more expensive.']
  },
  {
      q: 'Is low heat transfer a problem?',
      a: ['Castinite composite is an insulator, so the part must be designed to take this into consideration. Where heat transfer is important, vent holes or internal coolant lines can easilyCastinite composite is an insulator, so the part must be designed to take this into consideration. Where heat transfer is important, vent holes or internal coolant lines can easilyCastinite composite is an insulator, so the part must be designed to take this into consideration. Where heat tranansient heat loads due to outside doors being opened or sun light coming through a window will have little effect on the base. Metallic structures tend to distort quickly due to minor heat loads.']
  },
  {
      q: 'How good is the chemical resistance?',
      a: ['The chemical resistance is excellent. The epoxy formulation offers excellent resistance to most common solvents, acids, alkalies and cutting fluids. For extreme chemical resistance, such as high-temperature acid tanks, the resin system can be altered']
  },
  {
      q: 'Is EMI shielding necessary?',
      a: ['In some instances supplemental EMI shielding is necessary. This can be achieved using an external shield, cast in internal shield or EMI paint.']
  },
  {
      q: 'What are some of the benefits of room temperature casting?',
      a: ['Various types of nonmetallic tubing can be cast in for wire ways, coolant lines, lubrication lines or air venting. Cardboard tubes or plastic foam can be used to reduce weight. Low friction way surfaces can be integrally cast.', 'Tooling can be constructed from wood, fiberglass or another low-cost materials.']
  },
  {
      q: 'What material should I make mold from?',
      a: ['The decision on the material to use to create a mold is related to the number of parts desired, the accuracy required and part configuration. Molds can be produced from steel, aluminum, wrought or cast, wood, sheet metal or fiberglass.', 'Wood is used for prototype parts for quick delivery.Even complex parts can be produced in a matter of days or weeks. Life expectancy is only one part, although, with careful handling and proper design and construction, several parts can be produced. Precise tolerances cannot be held, so Secondary machining or grouting may be necessary to obtain high precision. We have had some wood molds last many years.', 'Fiberglass molds are used for high volume, low precision parts. A combination mold, with fiberglass sections and precise steel, can be used to produce high precision parts where only one surface needs to be precise. This works well for parts with complex configurations.', 'Sheet steel molds are used for lower cost, high volume parts. Medium precision parts can be cast in a sheet steel mold, with the proper design. A combination of a precision steel base with sheet sides can provide a precision mold at a lower cost.', 'Aluminum castings are used where the part has an intricate configuration and multiple molds are required.', 'High precision parts can only be cast using a heavy duty steel mold, although combination molds, with sheet steel sides and rigid steel precision surfaces can reduce tooling cost and provide quality parts.']
  },
  {
      q: 'How much does tooling cost?',
      a: ['When designing tooling, one must consider the ease with which the part can be produced using the various tooling materials and designs and the accuracy required.', 'Mold cost includes mold design, construction and debugging. Mold design can cost $2,500 for a simple tool to $15,000 or more. The mold design belongs to Castinite and the mold belongs to the customer. The mold design affects the part quality, production time and mold life. Polymer Casting molds should only be designed by those experienced in the intricacies of the polymer casting technology.', 'Awood mold can be produced for as little as a few hundred dollars. Sheet steel and fiberglass molds can produce numerous parts and usually cost $1,000 to $ 10,000, depending upon their size and complexity. A high-quality steel mold typically cost between $15,000 and $75,000, depending upon size, complexity, and tolerances.']
  },
  {
      q: 'How long will the mold last?',
      a: ['The mold life depends on the mold design, construction, and handling. A good quality steel mold should cast hundreds of parts, with only minor maintenance. Fiberglass and sheet steel molds will also produce hundreds of parts, but improper handling can reduce their life to a few parts. Wood molds are guaranteed to produce one part, but with proper handling can often produce many parts.']
  },
  {
      q: 'How  "GREEN" (energy efficient) is the CASTINITE casting process?',
      a: ['The CASTINITE casting process uses much less energy than metallic castings. To produce a metallic casting iron ore must be mined, smelted, melted for casting, and machined to tolerance. Parts must be stress relieved and painted. CASTINITE resins use very little energy to produce and the casting process is done at room temperature. Secondary machining is eliminated as is painting. The total energy consumption is about 30% less than metallic castings.']
  },
  {
      q: 'How does the cost compare to metallic casting?',
      a: ['Typically the cost of the finished Castinite casting is 10% to 50% less. Because finished casting can take only days, instead of weeks or months to produce and can be ordered one at a time, inventory costs can be significantly lower. This ability to cast when needed and eliminate secondary operations obviously offers additional savings in financial costs, inventory control and storage space.', 'It is often possible to cast multiple pieces as one, also offering savings in part prices, inventory expenses and assembly costs.']
  },
  {
      q: 'Will a CASTINITE polymer casting outgas?',
      a: ['No, there are no solvents in the material, so it does not outgas. It has been approved for use in critical environments, such as clean rooms and as a structure holding optics for photo etching silicon wafers.']
  }
];

export default function Faq() {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52),rgba(0, 0, 0, 0.73)),url("${faqImage}")`, height: "570px" }}>
        <Typography sx={{ color: '#fff', textAlign: 'center', textTransform: 'uppercase' }} variant="h1">FAQ</Typography>
      </Box>
      <Box p={3} sx={{ backgroundColor: '#fff', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <Avatar sx={{ bgcolor: '#43a047' }}>
          <QuestionIcon />
        </Avatar>
        <Typography pt={3} sx={{ textAlign: 'center' }} variant="h4" color="text.secondary">How can we help you?</Typography>
      </Box>
      <Box p={5}>
        <Container maxWidth="lg">
          {questions.map(question => (
            <Accordion key={question.q}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="body1">{question.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {question.a.map((answer, index) => (
                  <Typography variant="body2" mb={index === question.a.length - 1 ? 0 : 1} key={answer}>
                    {answer}
                  </Typography>
                ))}
              </AccordionDetails>
              <Box mb={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button onClick={() => navigate('contact/')} >Get a Quote</Button>
              </Box>
            </Accordion>
          ))}
        </Container>
      </Box>
      <Box p={3} sx={{ backgroundColor: '#fff', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <Typography mb={2} sx={{ textAlign: 'center' }} color="text.secondary" variant="h6">Don't see your question?</Typography>
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
