import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import api from '../../api/axiosConfig';
import { MyContext } from '../../context/MyContext';

const Guests = () => {

    const { guestList, setGuestList } = useContext(MyContext);

    const getGuests = async () => {
        const resp = await api.get('/guests');
        setGuestList(resp.data);
    }

    useEffect(() => {
        if (guestList.length <= 0) {
            getGuests();
        }
    }, [])

    return (
        <Container>
            <Typography variant="h4" sx={{ marginY: 4 }}>Guests</Typography>
            <TableContainer component={Paper} sx={{ minHeight: '700px'}}>
                <Table aria-label='simple table' >
                    <TableHead>
                        <TableRow>
                            <TableCell>Guest Name</TableCell>
                            <TableCell align="right">Room Number</TableCell>
                            <TableCell align="right">Additional Guests</TableCell>
                            <TableCell align="right">Check In Time</TableCell>
                            <TableCell align="right">Check Out Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {guestList.map(guest => (
                            <TableRow key={guest.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {guest.firstName + " " + guest.lastName}
                                </TableCell>
                                <TableCell align="right">{guest.roomNum ? guest.roomNum : "Not Assigned"}</TableCell>
                                <TableCell align="right">{guest.additionalGuests}</TableCell>
                                <TableCell align="right">{guest.checkIn ? guest.checkIn : "N/A"}</TableCell>
                                <TableCell align="right">{guest.checkOut ? guest.checkIn : "N/A"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
        </Container>
    )
}

export default Guests