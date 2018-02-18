import React, { Component } from 'react';     // importing React (saving it as a 'React' variable from 'react' (inside node_modules)), also destructuring Component from React for syntax sugar
                                                                        
// creating a class based component SearchBar and extending its methods with React.Component methods
// all JS classes has a special function Constructor - its a one and only functio called automaticly each time a new instance of the class is created
// super(props) is a function called becouse we use extends Component, its for calling a function for parent ???????????
// each class based component has its own state object, each time a state obj changes it couses whole component to rerender and also forces all of its children to rerender aswell
// whenever user enters text into the input first it updates the state of the component by onChange function, that couses the entire component to rerender, its now a controlled component that takes the value of the input from the state, not directly from the input text
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
    return (
      <div>
        <input
          value={this.state.term} 
          onChange={event => this.setState({ term: event.target.value})} />
      </div>
    );
  }
}

export default SearchBar;
