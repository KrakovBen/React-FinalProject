import React from 'react'
import PropTypes from 'prop-types'
import PageHeader from '../../components/PageHeader'
import { Container, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Paper from '@mui/material/Paper'

const CRM_Page = ({}) => {
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
            </TableContainer>
        </Container>
    )
}

// CRM_Page.propTypes = {}

export default CRM_Page