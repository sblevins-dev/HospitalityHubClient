import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'



const rows = [
    {
        name: 'Frozen yoghurt',
        calories: 159,
        fat: 16.0,
        carbs: 4,
        protein: 5
    },
    {
        name: 'Frozen yoghurt',
        calories: 159,
        fat: 16.0,
        carbs: 4,
        protein: 5
    }
];


const Guests = () => {
    return (
        <Container>
            <Typography variant="h4" sx={{ marginY: 4 }}>Guests</Typography>
            <TableContainer component={Paper}>
                <Table aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert 100g serving</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat</TableCell>
                            <TableCell align="right">Carbs</TableCell>
                            <TableCell align="right">Protein</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
        </Container>
    )
}

export default Guests