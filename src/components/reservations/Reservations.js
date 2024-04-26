import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../context/MyContext';

const Reservations = () => {

    const { roomList } = useContext(MyContext);
    const [reservationList, setReservationList] = useState([]);

    useEffect(() => {
        let tempList = roomList.filter(room => room.status == 'reserved');

        setReservationList(tempList)
    }, [])

    return (
        <Container>
            <Typography variant="h4" sx={{ marginY: 4 }}>Reservations</Typography>
            <TableContainer component={Paper} sx={{ minHeight: '700px' }}>
                <Table aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Room</TableCell>
                            <TableCell align="right">Beds</TableCell>
                            <TableCell align="right">Floor Number</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {roomList.length >= 1 && reservationList.map(room => (
                            <TableRow key={room.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {room.roomNumber}
                                </TableCell>
                                <TableCell align="right">{room.beds}</TableCell>
                                <TableCell align="right">{room.floorNumber}</TableCell>
                                <TableCell align="right">{room.status}</TableCell>
                                <TableCell align="right">{room.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
        </Container>
    )
}

export default Reservations