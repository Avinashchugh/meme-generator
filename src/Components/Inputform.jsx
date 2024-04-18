import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FcFrame } from "react-icons/fc";
import memesData from "../memesData";


const Inputform = () => {
  // const [memeImage,setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")
  const [meme , setMeme] = useState({
    topText: "",
    buttomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    const getMemeImage=()=>{
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url
      }))
    }
    const handleChange = (event)=>{
      const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
  return (
    <div className="py-5">
      <Row className="gy-3 mx-5">
        <Col md={6}>
          <Form.Label htmlFor="cc-name">Top Text</Form.Label>
          <Form.Control
            type="text"
            id="cc-name"
            placeholder=""
            required
            value={meme.topText}
            name="topText"
            onChange={handleChange}
          />
        </Col>
        <Col md={6}>
          <Form.Label htmlFor="cc-number">Buttom Text</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={meme.buttomText}
            name="buttomText"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <hr className="my-4" />
      <Button className="button mx-5" onClick={getMemeImage}>
        Get a new Meme image
        <span className="mx-1">
          <FcFrame />
        </span>
      </Button>
      <div className="meme">
        <img src={meme.randomImage} className="memeimage" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.buttomText}</h2>
      </div>
    </div>
  );
};

export default Inputform;
