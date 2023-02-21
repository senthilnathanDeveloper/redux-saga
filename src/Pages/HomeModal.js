import { Drawer, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Modal } from 'bootstrap'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadAirlineGetApiId } from '../redux/slice/airlineSlice'

const HomeModal = ({ open, onClose, selectedContent }) => {
    console.log("selectedContent", selectedContent)
    const { airline } = useSelector((state) => state.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadAirlineGetApiId())
    }, [])
    return (
        <>
            <Drawer
                open={open}
                onClose={onClose}
                edge='left'
            >
                <Typography>{selectedContent}</Typography>
            </Drawer>
        </>
    )
}

export default HomeModal