import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { initialSearchPhrase } from '../App';
import './search_bar.css';

class SearchBar extends Component {
    state = { term: initialSearchPhrase };

    onInputChange(term) {
        const { onSearchTermChange } = this.props;
        this.setState({ term });
        onSearchTermChange(term);
    }

    render() {
        const { term } = this.state;
        return (
            <div className="search-bar">
                <input
                    value={term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }
}

SearchBar.propTypes = {
    onSearchTermChange: PropTypes.func.isRequired,
};

export default SearchBar;
