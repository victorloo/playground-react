import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass2 from '../../../hoc/withClass2nd';

class Person extends Component {
  constructor( props ) {
    super(props);
    console.log('[Person.js] Inside Constructor()', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
    if (this.props.position === 0) {
      this.inputElement.current.focus(); 
    }
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
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </React.Fragment>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass2(Person, classes.Person);