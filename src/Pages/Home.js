import { CircularProgress, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadAirlineGetApi } from '../redux/slice/airlineSlice'
import { capitalize } from '../Utils/capitalizeFirstLetter';
import HomeModal from './HomeModal';
import './style.css'

const Home = () => {
    const { airline, loading, error } = useSelector((state) => state.data);
    // console.log("airline",airline)
    const dispatch = useDispatch()
    const [modal, setModal] = useState({
        show: false,
        selectedVal: "",
        selectedContent: {}
    })
    useEffect(() => {
        dispatch(loadAirlineGetApi())
    }, [dispatch])
    const renderTable = () => {
        return (
            <>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {/* <TableCell>UserId</TableCell>
                                <TableCell>Id</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Body</TableCell> */}

                                {renderHeader()}
                            </TableRow>

                        </TableHead>
                        <TableBody>
                            <TableRow>
                                {/* {airline?.length ? airline?.map((item,indx) => {
                                    return(
                                        <>
                                        <TableCell>{item?.userId}</TableCell>
                                        <TableCell>{item?.id}</TableCell>
                                        <TableCell>{item?.title}</TableCell>
                                        <TableCell>{item?.body}</TableCell>
                                        </>
                                    )
                                }):"No data available"} */}

                                {renderBody()}
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        )
    }
    const renderHeader = () => {
        let header = airline[0]
        let item = [];
        for (let key in header) {
            item.push(key)
        };
        return item?.length ? item?.map(head => {
            let headerItem = capitalize(head);
            return (
                <>
                    <TableCell >
                        {headerItem}
                    </TableCell>
                </>
            )
        }) : null
    }


    const renderBody = () => {
        return <>{airline?.length ? airline.map((item, indx) => {
            return (
                <>
                    {Object.keys(item)?.map((key, indx) => {
                        let val;
                        val = String(item[key])
                        return (
                            <>
                                <TableCell key={indx} onClick={(event) => handleClik(event, val)}>
                                    {val}
                                </TableCell>
                            </>
                        )
                    })}
                </>
            )
        }) : <>No data available</>} </>
    }
    const handleClik = (event, selectedVal) => {
        setModal({
            ...modal,
            show: true,
            selectedVal: selectedVal,
            selectedContent: event.data
        })
    }
    // console.log("show",modal)
    return (
        <>
            {modal?.show && <HomeModal open={modal?.show} onClose={() => setModal({ ...modal, show: false })} selectedContent={modal?.selectedVal} />}
            {loading ? <CircularProgress /> : (

                <>
                    <Grid container spacing={2}>
                        <Grid item lg={12}>
                            {renderTable()}
                        </Grid>
                    </Grid>
                </>

            )}
        </>
    )
}

export default Home