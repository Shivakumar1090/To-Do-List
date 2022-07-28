import React,{useState,useEffect} from "react";
import { Box,Container,Grid,Typography } from "@mui/material";
import Card from "./card";
import axios from "axios";
import CheckIcon from '@mui/icons-material/Check';


const DOMAIN = "http://localhost:5000";

const List = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        axios.get(`${DOMAIN}`)
            .then((resp) => {
                setData(resp.data);
                console.log(resp.data);
            }) 
            .catch((err) => {
                console.log(err);
            });
    },[])

    var num = 1;

    return ( 
        <Box marginTop='2rem'>
            <Typography variant="h7" paddingLeft='3rem'>Added tasks in to-do list</Typography>
            <Box  sx={{ flexGrow: 1 ,marginTop: '2rem'}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                    {data.map(cardData => {
                        return(
                            <Grid item  xs={1} sm={4} md={4}>
                                <Box display='flex'>
                                    <Typography padding='20px'>{num > 0 ? num++ : 0}.</Typography>
                                    <Card cardData={cardData}/>
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </Box>
     );
}
 
export default List;