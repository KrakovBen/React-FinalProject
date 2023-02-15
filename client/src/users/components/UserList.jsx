import React from 'react'
import PropTypes from 'prop-types'
import { IconButton, TableBody, TableCell, TableRow } from '@mui/material'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove'

const UserList = ({ users, onDelete, onBusiness }) => {
    console.log(users);
    return (
        <TableBody>
            {users.map((row) => (
                <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">{row.email}</TableCell>
                    <TableCell align="right">STATUS</TableCell>
                    <TableCell align="right">
                        <IconButton aria-label="admin">
                            <AdminPanelSettingsIcon/>
                        </IconButton>
                    </TableCell>

                    <TableCell align="right">
                        <IconButton aria-label="delete">
                            <PersonRemoveIcon/>
                        </IconButton>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}

// UserList.propTypes = {}

export default UserList