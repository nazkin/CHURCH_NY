import React, { useState } from "react"
import {
    Grid,
    Button,
} from "@mui/material"

import Layout from "../components/layout"

const AdminControl = () => {
    const [file, setFile] = useState()
    const [isSelected, setIsSelected] = useState(false)

    const onChangeHandler = (e) => {
        setFile(e.target.files[0])
        setIsSelected(true)
    }

    const onUploadFile = () => {
        console.log(file)
    }

    return (
        <Grid container style={{ marginTop: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Grid item md={6} style={{ marginTop: 100, display: "flex", flexDirection: "column" }}>
                <input type="file" name="file" onChange={onChangeHandler} />
                <Button onClick={onUploadFile} style={{ width: "20%", minWidth: 70, marginTop: 20, fontSize: "10px" }} variant="outlined">Upload</Button>
            </Grid>
        </Grid>
    )
}

const AdminPage = () => {
    return <Layout>
        <AdminControl />
    </Layout>
}

export default AdminPage