import React,{useState,useEffect} from "react";
import { Box,Typography,InputBase,Button } from "@mui/material";
import '../App.css'
import axios from "axios";

const DOMAIN = "http://localhost:5000";

const Input = () => {
    const [title, setTitle] = useState("");

    const handleSubmit =() => {
        if(title.length > 0){
            const new_todo = {
                title: title,
            }    
            axios.post(`${DOMAIN}` , new_todo)
                .then(resp => {
                    window.alert("saved");
                    window.location.href="/"
                })
                .catch(err => {
                    window.alert("some error happened");
                })
            setTitle("");
        } else window.alert("todo is empty");
    }

    return ( 
        <Box marginTop='20px' paddingLeft='3rem'>
            <Typography variant="h7">Add new Item into list</Typography>
            <Box marginTop='20px'>
                <InputBase 
                    placeholder="Enter the task here"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    style={{backgroundColor: '#2f2f2f',minWidth: '30%' , color: '#ddd',padding: '3px',borderRadius: '5px',marginRight: '50px' }}
                />
                <Button 
                    size="medium" 
                    onClick={handleSubmit}
                    style={{backgroundColor: '#c620a7',color: '#fff',minWidth: '100px'}}
                >Submit</Button>
            </Box>
        </Box>
     );
}
 
export default Input;