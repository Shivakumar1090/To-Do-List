import React,{useState} from "react";
import { Box,Typography,Button,Divider } from "@mui/material";
import axios from "axios";
import CheckIcon from '@mui/icons-material/Check';

const DOMAIN = "http://localhost:5000";

const Card = ({cardData}) => {
    const [complete,setComplete] = useState(cardData.completed);

    const deleteHandler =(id) => {
        console.log(id);
        try{
            axios.delete(`${DOMAIN}/${id}`)
            .then(resp => {
                window.alert("deleted");
                window.location.href = "/";
            })
            .catch(err => {
                window.alert("Not Delted some error occured");
            })
        } catch(err){
            console.log("network error");
        }
    }

    const updateHandler = (data) => {
        const {completed , _id} = data;
        const update_todo = {
            completed : !completed,
        }
        try{
            axios.put(`${DOMAIN}/${_id}` , update_todo)
            .then(resp => {
                window.alert("updated");
                window.location.href = "/";
            })
            .catch(err => {
                window.alert("Not updated some error occured");
            })
        } catch(err){
            console.log("network error");
        }
    }

    return ( 
        <Box style={complete ? completedCard : card} >
            <Box padding='20px 10px 20px 20px' display='flex' justifyContent='space-between'>
                <Box>
                    <Typography>{cardData.title}</Typography>   
                </Box>
                <Box>
                    {
                        cardData.completed && <CheckIcon  style={{ background: '#7ab530' ,borderRadius: '50%' , padding: '1px' ,fontSize: '20px'}}/>
                    }
                </Box>
            </Box>
            
            <Divider style={{background:'#5c5c5c' , height: '0.1px'}}/>
           
            <Box padding='20px' display='flex' justifyContent='space-between' >
                {
                    complete ? (
                        <Button 
                            size="small" 
                            onClick={()=>updateHandler(cardData)}
                            style={{backgroundColor: '#202020',color: '#fff',minWidth: '100px' ,paddingRight: '10px'}}
                        >Mark as Incomplete</Button>
                        
                    ) : (
                        <Button 
                            size="small" 
                            onClick={()=>updateHandler(cardData)}
                            style={{backgroundColor: '#c620a7',color: '#fff',minWidth: '100px' , paddingLeft: '20px' ,paddingRight: '20px'}}
                        >Mark as complete</Button>
                    )
                }

                 <Button 
                    size="small" 
                    onClick={() => deleteHandler(cardData._id)}
                    style={{color: '#afafaf',minWidth: '100px'}}
                >Delete</Button>
            </Box>
        </Box>
     );
}

const card ={
    backgroundColor: '#2f2f2f',
    borderRadius: '10px',
    boxShadow: '0px 0px 16px rgba(0,0,0,0.80)',
}

const completedCard = {
    backgroundColor: '#202020',
    borderRadius: '10px',
    border: '1px solid #7ab530',
}
 
export default Card;
