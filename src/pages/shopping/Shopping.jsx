import React from 'react';
import ReactDOM from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ImageData from './ImageData.jsx';
import './style/Shopping.css';

export default class Shopping extends React.Component {
  constructor( props ) {
    super( props )
    let id = props.match.params.source.charAt( 0 ).toUpperCase() + props.match.params.source.slice( 1 )

    this.state = {
      images: this.buildRows( ImageData.filter( id ) ),
      source: id,
      type: props.match.params.type
    }
  }

  componentDidMount() { }
  componentDidUpdate() { }
  componentWillUnmount() { }

  buildRows(products) {
    
    let rows = [];
    let cols = [];
    for ( let i = 0; i < products.length; i += 3 ) {
      for ( let j = 0; j < 3; j++ ) {
        if ( ( i + j ) < products.length ) {
          cols.push(
            <Col xs={3} md={3} lg={3}><img src={products[i + j].url} /></Col>
          );
        }
      }
      rows.push(
        <Row className="show-grid">
          {cols}
        </Row>
      );
      cols = []
    }
    return rows;
  }
  
  componentWillReceiveProps( newProps ) {
    var id = newProps.match.params.source.charAt( 0 ).toUpperCase() + newProps.match.params.source.slice( 1 );

    this.setState( {
      images: this.buildRows( ImageData.filter( id, newProps.match.params.type ) ),
      source: id,
      type: newProps.match.params.type
    } )
  }

  render() {
    return (
      <div className="trim_body">
        <h1>{this.state.source}</h1>
        <Grid className="nav_center">
          {this.state.images}
        </Grid>
      </div>
    );
  }
}