import React, { Component } from 'react';

import classes from './Person.css';
import withClass2 from '../../../hoc/withClass2nd';

class Person extends Component {
  constructor( props ) {
    super(props);
    console.log('[Person.js] Inside Constructor()', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
  }

  componentWillUnmount() {
    console.log('[Person.js] Inside componentWillUnmount()');
  }

  render () {
    console.log('[Person.js] Inside render()');
    return (
      <React.Fragment>
        <p onClick={this.props.click} >I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </React.Fragment>
    )
  }
}

export default withClass2(Person, classes.Person);