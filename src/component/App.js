import React from 'react';
import SearchBar from './SearchBar';
import unsplah from '../api/unsplash';


class App extends React.Component {
    state = { images: [] };
   
    onSearchSubmit = async term => {
        const response = await unsplah.get('/search/photos', {
            params: { query: term }
        });

        console.log(term);
        this.setState({ images: response.data.results });
    }

    render() {
        return(
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={ this.onSearchSubmit } />
                Found: { this.state.images.length } images
            </div>
        )
    }
}

export default App;