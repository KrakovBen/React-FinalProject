import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import PageHeader from '../../components/PageHeader'
import { Container, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Paper from '@mui/material/Paper'
import useUsers from '../hooks/useUsers'
import { useUser } from '../providers/UserProvider'
import ROUTES from '../../routes/routesModel'
import { Navigate } from 'react-router-dom'
import UserList from '../components/UserList'

const CRM_Page = ({}) => {
    const { user } = useUser()
    const { handleGetAllUsers, value } = useUsers()
    const { users } = value

    useEffect(()=>{
        handleGetAllUsers();
    }, [])

    if (!user?.isAdmin) return <Navigate replace to={ROUTES.CARDS} /> // NEED TO CHECK IF WORK PROPERLY

    return (
        <Container>
            <PageHeader title="CRM Page" subtitle="Manage your users"/>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table"></Table>
                <TableHead>
                    <TableRow>
                        <TableCell>User Email</TableCell>
                        <TableCell align="right">Active</TableCell>
                        <TableCell align="right">Is Admin</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <UserList users={users}/> {/* NEED TO FINISH */}
            </TableContainer>
        </Container>
    )
}

// CRM_Page.propTypes = {}

export default CRM_Page