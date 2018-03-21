import React from 'react';
import ReactDOM from 'react-dom'


export default class Shopping extends React.Component {
  constructor( props ) {
    super( props )
    this.selection
    this.state = {
      source: props.match.params.source.charAt( 0 ).toUpperCase() + props.match.params.source.slice( 1 )
    }
  }

  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  componentWillReceiveProps( newProps ) {
    this.setState( { source: newProps.match.params.source.charAt( 0 ).toUpperCase() + newProps.match.params.source.slice( 1 ) } )
  }

  render() {
    return (
      <div className="trim_body">
        <h1>{this.state.source}</h1>
        <p>Under Construction</p>
      </div>
    );
  }
}