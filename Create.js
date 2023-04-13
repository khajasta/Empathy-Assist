import { Alert, Grid, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import React, { Component, useState, useRef,useEffect } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import storage from "./index.js";
import { Redirect } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar.js";
import { FaSpinner } from "react-icons/fa";
import Facial from "./Facial.js";

export default function Create() {
  const paperStyle = {
    padding: "20px",
    height: "85vh",
    width: 800,
    margin: "0px auto",
    backgroundColor:'#D8BFD8',
  };
  const [file, setFile] = useState("");
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [positive, setPositive] = useState(false);
  const [negative, setNegative] = useState(false);
  const [neutral, setneutral] = useState(false);
  const [facial, setFacial] = useState(false);
  var [emotion, setEmotion] = useState("");
  const[myvideolink,setLink]=useState("");
  const[filename,setFilename]=useState("");
  const getEmail = localStorage.getItem("EmailData");
  const localfilename=useRef();
  const [fpositive, setFPositive] = useState(false);
  const [fnegative, setFNegative] = useState(false);
  const [fneutral, setFNeutral] = useState(false);
  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    localStorage.setItem('localfilename',e.target.files[0].name);
    console.log('localfilename',localfilename);

  };
  const handleUpload = () => {
    console.log(file);
    if (file) {
      const videoRef = ref(storage, `videos/${getEmail}/${file.name}`);
      const uploadTask = uploadBytesResumable(videoRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(`Video uploaded successfully: ${downloadURL}`);
            alert("Video Uploaded Successfully");
            setProgress(0);
            setIsLoading(true);
            fetch(`${"http://localhost:5000/api"}/upload`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
              },
              body: JSON.stringify({ downloadURL, getEmail,filename }),
            })
              .then((response) => response.json())
              .then((data) => {
                setIsLoading(false);
                if (data == "Positive") {
                  console.log("Positive");
                  setPositive(true);
                } else if (data == "Negative") {
                  console.log("Negative");
                  setNegative(true);
                } else {
                  console.log("Neutral");
                  setneutral(true);
                }
              })
              .catch((error) => {
                // handle errors here
              });
          });
        }
      );
    }
  };
  
  if (positive) {
    // this.props.history.push('/Positive', { state: file.name});
    // console.log('filename in create',file.name)
    return <Redirect to={{ pathname: '/Positive', data:file.name }}/>;
  } else if (negative) {
    return <Redirect to="/Negative" data={file.name}/>;
  } else if (neutral) {
    return <Redirect to="/Neutral" data={file.name}/>;
  }
  if (isLoading) {

    return (
      <div
        style={{
          width: "1350px",
          height: "790px",
          backgroundColor: "white",
          justifyContent: "center",
      
        }}
      >
        
        
        <img
          src={require("../images/loading.jpg")}
          alt=""
          style={{ width: "200px", height: "120px" }}
        />
        <h3>Processing your video</h3>
      </div>
    );
  }
  const handleUploadVideo = () => {
    console.log(file);
    if (file) {
      const videoRef = ref(storage, `videos/${getEmail}/${file.name}`);
      const uploadTask = uploadBytesResumable(videoRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(`Video uploaded successfully: ${downloadURL}`);
            setLink('${downloadURL}');
            alert("Video Uploaded Successfully");
            setIsLoading(true);
            fetch(`${"http://localhost:5000/api"}/face`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
              },
              body: JSON.stringify({ downloadURL }),
            })
              .then((response) => response.json())
              .then((data) => {
                setIsLoading(false);
                if (data == "Happy") {
                  console.log("Positive");
                  setFPositive(true);
                } else if (data == "Angry") {
                  console.log("Negative");
                  setFNegative(true);
                } else {
                  console.log("Neutral");
                  setFNeutral(true);
                }
                
              })
              .catch((error) => {
                // handle errors here
              });
          });
        }
      );
    }
  };
  
  if (fpositive) {
    // this.props.history.push('/Positive', { state: file.name});
    // console.log('filename in create',file.name)
    return <Redirect to={{ pathname: '/Facialp', data:file.name }}/>;
  } else if (fnegative) {
    return <Redirect to="/Facial" data={file.name}/>;
  } else if (fneutral) {
    return <Redirect to="/Facialne" data={file.name}/>;
  }
  
  if (facial) {
    return <Redirect to="/Facial" data={emotion} />;
  }
  


  return (
    
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid style={{ display: "block" }}>
            <img
              src={require("../images/purpleupload.png")}
              alt="Upload"
              style={{ width: "200px", height: "170px" }}
            />
            <br />
            <Button
              variant="contained"
              component="label"
              style={{
                backgroundColor: "#DA70D6",
                textDecorationColor: "ButtonShadow",
                width: "190px",
              }}
            >
              <input
                type="file"
                id="video"
                name="video"
                onChange={handleChange}
              ></input>
            </Button>
            <br />
            <progress value={progress} max="100" />
            <br />
          </Grid>
          <Grid style={{ width: "800px",display:'inline-block',marginTop:'30px' }}>
            <div style={{ display: "block", height: "20vh" }}>
              <img
                src={require("../images/speechanalysis.png")}
                alt=""
                style={{ width: "200px", height: "130px",marginRight:'160px' }}
              />
                <img
                src={require("../images/facialfinal.jpg")}
                alt=""
                style={{ width: "200px", height: "130px" }}
              />
             
                </div>
                
            <div
              style={{ display: "block", marginTop: "10px", height: "20vh" }}
            >
                <Button
                type="submit"
                onClick={handleUpload}
                variant="contained"
                component="label"
                style={{
                  backgroundColor: "#DA70D6",
                  width: "190px",
                  height: "30px",
                  marginTop: "20px",
                  marginRight:'169px',
                  textDecorationColor: "ButtonShadow",
                }}
              >
                <i> Speech Analysis</i>
              </Button>
              <Button
                type="submit"
                onClick={handleUploadVideo}
                variant="contained"
                component="label"
                style={{
                  backgroundColor: "#DA70D6",
                  width: "190px",
                  height: "30px",
                  marginTop: "20px",
                  textDecorationColor: "ButtonShadow",
                }}
              >
                <i> Facial Recognition</i>
              </Button>
          
            </div>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
