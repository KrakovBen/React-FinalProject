import React from 'react'
import PropTypes from 'prop-types'
import { IconButton, TableBody, TableCell, TableRow } from '@mui/material'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const UserList = ({ users, onDelete, onBusiness }) => {
    return (
        <TableBody>
            {users.map((row) => (
                <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">{row.email}</TableCell>
                    <TableCell align="right">
                        <IconButton aria-label="admin">
                            <AdminPanelSettingsIcon/>
                        </IconButton>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}

// UserList.propTypes = {}

export default UserList