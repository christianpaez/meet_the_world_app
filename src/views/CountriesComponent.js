import React, { useEffect, useState } from "react";
import axios from 'axios';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Input, 
  Form,
  FormGroup,
  Label,
  Row,
  Col
} from "reactstrap";
import Lottie from 'react-lottie';
import COUNTRIES_API_URL from '../services/config';

function CountriesComponent() {

    const [countries, setCountries] = useState([]);
    const [serverLoading, setServerLoading] = useState(false);

    useEffect(() => {
      });
    
    // API request get all countries
    const getAllCountries = ()=>{
        setServerLoading(true);
        axios({
            method: 'get',
            url:`${COUNTRIES_API_URL}/all?fields=name;capital;currencies;region;flag;languages`
        })
        .then((response)=> {
            setCountries(response.data)
            console.log(response)
        })
        .catch((error)=>{
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
        })
        .finally(()=> setServerLoading(false))
    }
    //lottie loader options 
    const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: require('../animations/loader.json'),
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	};
    return(
        <Container>
         <h2 className="title">Country Searcher</h2>
            <Form>
                <Row form className = "d-flex justify-content-center">
                    <Col md={3}>
                        <FormGroup>
                            <Label className = "text-white" for="options_select">Filter Options</Label>
                            <Input type="select" name="options_select" id="options_select">
                                <option>All</option>
                                <option>Language</option>
                                <option>Continent</option>
                                <option>Name</option>
                                <option>Capital City</option>
                                <option>Calling Code</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup className = "align-middle">
                            <Button className="btn-round" color="primary" 
                                outline style = {{marginTop: "1.8rem"}}
                                onClick = {()=> getAllCountries()}>
                                <i className="fa fa-globe" />
                                Search
                            </Button>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        <Row>
            {
                countries.map((element, index)=>{
                 return(     
                    <Col md="4" key= {index}>
                        <Card className="card-profile card-plain">
                            <div className="card-avatar">
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                <img
                                alt="..."
                                src={element.flag}
                                />
                            </a>
                            </div>
                            <CardBody>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                <div className="author">
                                <CardTitle tag="h4">{element.name}</CardTitle>
                                <h6 className="card-category">Capital City: {element.capital}</h6>
                                <h6 className="card-category">Continent: {element.region}</h6>
                                </div>
                            </a>
                            <p className="card-description title-uppercase text-center">
                                Languages:{element.languages.map((element, index)=> ` ${element.iso639_1}`)}
                            </p>
                            <p className="card-description text-center">
                                Currencies:{element.currencies.map((element, index)=> ` ${element.code}`)}
                            </p>
                            </CardBody>
                            <CardFooter className="text-center">
                            <Button
                                className="btn  btn-success"
                                onClick={e => e.preventDefault()}
                            >
                                Check Details
                            </Button>
                            </CardFooter>
                        </Card>
                    </Col>
                    )
                })
            }
        </Row>
            {serverLoading && <Lottie options={defaultOptions} height={300} width={300} style={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%) translateY(-50%)',
                            top: '50%'
                        }}/>}
      </Container>
    );
}

export default CountriesComponent;
