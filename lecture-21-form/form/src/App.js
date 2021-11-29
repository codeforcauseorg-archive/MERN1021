import { useState } from "react";
import {Box, Typography, TextField, makeStyles, Button} from '@material-ui/core';
import axios from 'axios';

let useStyle = makeStyles({

  root:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    background: "#ccc"
  },
  formBox:{
    background: "#fff",
    margin: "10px",
    borderRadius: "10px"
  },
  text:{
    width: "600px",
    margin: "20px"
  },
  buttonBox:{
    width: "600px",
    display: "flex"
  },
  btn:{
    flexGrow: 1,
    margin: "20px"
  }
})


function App() {

  let classes = useStyle();

  let [submitted, setSubmiited] = useState(false);

  let empty = {
    name: "",
    email: "",
    address: "",
    phone: ""
  }

  let [formData, setFormData] = useState(empty);

  let handleChange = function(event){
    let updated = {...formData};
    // console.log(event.target.name, event.target.value);
    updated[event.target.name] = event.target.value;
    setFormData(updated);
  }

  let fields = [
    {
      name: "name",
      title: "Name"
    },
    {
      name: "email",
      title: "Email"
    },
    {
      name: "address",
      title: "Address"
    },
    {
      name: "phone",
      title: "Phone Number"
    }
  ]


  return (
    <div>
      <Box className={classes.root}>
        <Typography variant="h1"> 
        My Form
        </Typography>
        {fields.map(function(item, idx){
          return(
            <Box key={idx} className={classes.formBox}>
              <TextField className={classes.text} label={item.title} name={item.name} value={formData[item.name]} onChange={handleChange}></TextField>
            </Box>
          )
        })}

        <Box className = {classes.buttonBox} >
          <Button className = {classes.btn} variant="contained" color="primary" onClick={
            function(){
              setSubmiited(true)
              axios.post("http://localhost:5000/submit", formData)
              .then(function(res){
                console.log(res);
                setFormData(empty);
                // setSubmiited(false)
              })
              .catch(function(err){
                console.log(err);
              })
            }
          }>
            Submit
          </Button>

          <Button className = {classes.btn} variant="contained" color="secondary" onClick={function(){
            setFormData(empty);
          }}>
            Empty
          </Button>
        </Box>
        
      </Box>
    </div>
  );
}

export default App;
