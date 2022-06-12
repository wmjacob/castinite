import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import About from 'components/About';
import ConstructionProducts from 'components/ConstructionProducts';
import Contact from 'components/Contact';
import Faq from 'components/Faq';
import Industries from 'components/Industries';
import Home from 'components/Home';
import Layout from 'components/Layout';
import MachineCastings from 'components/MachineCastings';
import PrecisionGrouts from 'components/PrecisionGrouts';
import Products from 'components/Products';
import PumpBases from 'components/PumpBases';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products/" element={<Products />} />
          <Route path="products/precision-grout/" element={<PrecisionGrouts />} />
          <Route path="products/pump-bases/" element={<PumpBases />} />
          <Route path="products/construction/" element={<ConstructionProducts />} />
          <Route path="products/machine-casting/" element={<MachineCastings />} />
          <Route path="about/" element={<About />} />
          <Route path="industries/" element={<Industries />} />
          <Route path="contact/" element={<Contact />} />
          <Route path="faq/" element={<Faq />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
