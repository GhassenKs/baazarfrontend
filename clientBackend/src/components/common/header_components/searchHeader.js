import React, { Component,Fragment } from 'react'
import { Search } from 'react-feather';

export class SearchHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchbar: false
        }
    }
    handleSearchClick = () => {
        this.setState({
            searchbar: !this.state.searchbar
        })
    }
    render() {
        return (
            <Fragment>
            
            </Fragment>
        )
    }
}

export default SearchHeader
