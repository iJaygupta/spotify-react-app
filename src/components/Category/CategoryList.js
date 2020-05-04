import React, { Component } from 'react';
import Poster from "./Card.js";
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';


export default class CategoryList extends Component {

  render() {
      console.log("from categoryList ==>>", this.props.category)
    const style = {
      display: 'flex',
      flexWrap: 'wrap'
    }

    let category = this.props.category.map(function (item) {
        item.icons[0].name = item.name
        return item.icons;
    //   return item.poster_path != null;
    }).map(function (movieItem) {
        if(movieItem.length){
            return (
                <Col xs={6} sm={4} md={3} key={movieItem[0].url} >
                  <Poster info  path={movieItem[0].url} title={movieItem[0].name} responsive />
                </Col>
              );
        }
    }); 

    return (
      // <Grid fluid={false}>
      <div>
        <Row style={style}>
          {category}
        </Row>
      </div>
      // </Grid>
    );
  }
}

