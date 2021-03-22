import React, { useState } from "react";
import plus from "../Movies/plus.png";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Col,
  FormText,
  Input,
  Label,
} from "reactstrap";


const AddMovie = (props) => {
  const [modal, setModal] = useState(false);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieRate, setMovieRate] = useState(0);
  const [imgtag, setImgTag] = useState("");
  const [movieOverview, setmovieOverview] = useState("");


  const toggle = () => {
    setModal(!modal);
    setMovieTitle("");
    setmovieOverview("")
  };
  console.log("img", imgtag);
  return (
    <div>
      <div className="plus-container">
        <img src={plus} alt="Add movie" className="plus" onClick={toggle} />
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add a movie</ModalHeader>

        <ModalBody>
          <FormGroup row>
            <Label for="exampleTitle" sm={3}>
              Movie title
            </Label>
            <Col sm={8}>
              <Input
                type="text"
                name="movie title"
                id="exampleTitle"
                placeholder="Add the movie title"
                value={movieTitle}
                onChange={(event) => setMovieTitle(event.target.value)}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleNumber" sm={3}>
              Movie rate
            </Label>
            <Col sm={8}>
              <Input
                type="number"
                name="number"
                id="exampleNumber"
                placeholder="number placeholder"
                value={movieRate}
                onChange={(event) => setMovieRate(event.target.value)}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleOverview" sm={3}>
              Overview
            </Label>
            <Col sm={8}>
              <Input
                type="text"
                name="movie overview"
                id="exampleOverview"
                placeholder="Add the movie overview"
                value={movieOverview}
                onChange={(event) => setmovieOverview(event.target.value)}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleFile" sm={3}>
              Poster
            </Label>
            <Col sm={8}>
              <Input
                type="file"
                name="file"
                id="exampleFile"
                onChange={(event) => {
                  let selectedFile = event.target.files[0];
                  var reader = new FileReader();
                  reader.onload = function (event) {
                    setImgTag(event.target.result);
                  };
                  reader.readAsDataURL(selectedFile);
                }}
              />
              <FormText color="muted">Add the movie poster here.</FormText>
            </Col>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              props.addMovie({
                poster: imgtag,
                title: movieTitle,
                rate: movieRate,
                overview: movieOverview,
              });
              toggle();
            }}
          >
            Add
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddMovie;
