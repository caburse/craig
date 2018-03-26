import React from 'react';
import ReactDOM from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import './style/Shopping.css';

export default class Shopping extends React.Component {
    constructor( props ) {
        super( props )
        this.selection
        this.state = {
            source: props.match.params.source.charAt( 0 ).toUpperCase() + props.match.params.source.slice( 1 )
        }
    }

    componentDidMount() { }
    componentDidUpdate() { }
    componentWillUnmount() { }

    componentWillReceiveProps( newProps ) {
        this.setState( { source: newProps.match.params.source.charAt( 0 ).toUpperCase() + newProps.match.params.source.slice( 1 ) } )
    }

    render() {
        return (
            <div className="trim_body">
                <h1>{this.state.source}</h1>
                <p>Under Construction</p>
                <Grid className="nav_center">
                    <Row className="show-grid">
                        <Col xs={3} md={3} lg={3}><img src="http://via.placeholder.com/200x200?text=Women" /></Col>
                        <Col xs={3} md={3} lg={3}><img src="http://via.placeholder.com/200x200?text=Women" /></Col>
                        <Col xs={3} md={3} lg={3}><img src="http://via.placeholder.com/200x200?text=Women" /></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={3} md={3} lg={3}><img src="http://via.placeholder.com/200x200?text=Girls" /></Col>
                        <Col xs={3} md={3} lg={3}><img src="http://via.placeholder.com/200x200?text=Boys" /></Col>
                        <Col xs={3} md={3} lg={3}><img src="http://via.placeholder.com/200x200?text=Girls" /></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={3} md={3} lg={3}><img src="http://via.placeholder.com/200x200?text=Men" /></Col>
                        <Col xs={3} md={3} lg={3}><img src="http://via.placeholder.com/200x200?text=Men" /></Col>
                        <Col xs={3} md={3} lg={3}><img src="http://via.placeholder.com/200x200?text=Boys" /></Col>
                    </Row>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                </Grid>
            </div>
        );
    }
}