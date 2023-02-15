import React from 'react'
import { Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import UserList from '../components/UserList'
import PropTypes from 'prop-types'
import Error from '../../components/Error'
import Spinner from '../../components/Spinner'

const CRM_Feedback = ({ isLoading, error, users }) => {
    if (isLoading) return <Spinner />
    if (error) return <Error errorMessage={error} />

    if (users && !users.length) return (
        <Typography>
          Oops... it seems there are no business cards to display
        </Typography>
    )

    if (users && !!users.length) return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>User Email</TableCell>
                    <TableCell align="right">Active</TableCell>
                    <TableCell align="right">Admin</TableCell>
                    <TableCell align="right">Delete</TableCell>
                </TableRow>
            </TableHead>
            <UserList users={users}/>
        </Table>
    </TableContainer>
    )
}

// CRM_Feedback.propTypes = {}

export default CRM_Feedback