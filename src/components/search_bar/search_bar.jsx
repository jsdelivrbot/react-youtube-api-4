import React, { Component } from 'react';
import { initialSearchPhrase } from '../App';

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
                    onChange={(event) => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }
}

export default SearchBar;
