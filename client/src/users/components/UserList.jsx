import React from 'react'
import PropTypes from 'prop-types'
import { IconButton, TableBody, TableCell, TableRow } from '@mui/material'
import WorkIcon from '@mui/icons-material/Work';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove'

const UserList = ({ users, onDelete, onBusiness }) => {

    return (
        <TableBody>
            {users.map((row) => (
                <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">{row.email}</TableCell>
                    <TableCell align="right">STATUS</TableCell>
                    <TableCell align="right">
                        <IconButton aria-label="admin">
                            <WorkIcon color={row.isBusiness ? "secondary" : "inherit"}/>
                        </IconButton>
                    </TableCell>

                    <TableCell align="right">
                        <IconButton aria-label="delete">
                            <PersonRemoveIcon color={"error"}/>
                        </IconButton>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}

// UserList.propTypes = {}

export default UserList