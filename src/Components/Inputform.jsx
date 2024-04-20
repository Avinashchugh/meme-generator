import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const Inputform = () => {
  const [meme, setMeme] = useState({
    topText: "",
    buttomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = React.useState([])
  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>setAllMemes(data.data.memes))
  },[])
  const getMemeImage = () => {
    
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };
  return (
    <div className="py-5">
      <Row className="gy-3 mx-5">
        <Col md={6}>
          <Form.Label htmlFor="cc-name">Top Text</Form.Label>
          <Form.Control
            type="text"
            id="cc-name"
            placeholder="Write TopText"
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
            placeholder="Write BottomText"
            value={meme.buttomText}
            name="buttomText"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <hr className="my-4" />
      <Button className="button mx-5" onClick={getMemeImage}>
        <span className="imgIcon">
        <lord-icon
          src="https://cdn.lordicon.com/bzqvamqv.json"
          trigger="hover" 
          style={{ width: "50px", height: "30px" }}
        ></lord-icon>
        Get a new Meme image
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
