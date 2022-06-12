import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(product, description, uses, hardness, compressiveStrength, tensileStrength, mod, adhesion) {
  return { product, description, uses, hardness, compressiveStrength, tensileStrength, mod, adhesion };
}

const rows = [
  createData('ALIGNIT "L"',	'Low viscosity, two part epoxy	Precision machine alignment.', 'Fills gaps 1mm to 3mm, structural adhesive.', '85-89', '22', '2,200',	'925',	'2,400'),
  createData('ALIGNIT "P"', 'Paste, gray two part epoxy', 'Precision machine alignment. Fills gaps 1mm to 3mm. Good for vertical and overhead use. Adhesive.', '87-90', '23', '2,400', '900', '2,300'),
  createData('ALIGNIT "LT"', 'Low viscosity, two part epoxy', 'Precision machine alignment. Fills gaps 3 mm to 6 mm', '87-90', '23', '2,400', '915', '2,300'),
  createData('ALIGNIT "PT"', 'Paste. Gray Two part epoxy', 'Precision machine alignment. Fills gaps 3 mm to 6 mm', '88-91', '24', '2,500', '925', '2,400'),
  createData('FILLIT TM', 'Black. 40 lb. aggregate bags 2-part epoxy', 'Filler for weldments and castings. Adds mass, stability and and vibration dampening', '85-90', '18', '2,000', '4500', '2,000'),
];

export default function PrecisionGroutsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 'max-content' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Uses</TableCell>
            <TableCell align="right">Hardness (Shore&nbsp;D)</TableCell>
            <TableCell align="right">Compressive Strength&nbsp;(KSI)</TableCell>
            <TableCell align="right">Tensile Strenth&nbsp;(PSI)</TableCell>
            <TableCell align="right">Mod&nbsp;(KSI)</TableCell>
            <TableCell align="right">Adhesion&nbsp;(PSI)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.product}
              </TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.uses}</TableCell>
              <TableCell align="right">{row.hardness}</TableCell>
              <TableCell align="right">{row.compressiveStrength}</TableCell>
              <TableCell align="right">{row.tensileStrength}</TableCell>
              <TableCell align="right">{row.mod}</TableCell>
              <TableCell align="right">{row.adhesion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
