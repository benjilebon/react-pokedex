import React from 'react';
import Filter from './Filter'
import M from 'materialize-css';
import List from './List';


class Sidebar extends React.Component {
    
    state = {
        value: '',
    }

    UNSAFE_componentWillMount() {
        this.props.search !== undefined && this.setState({ value: this.props.search });
    }

    componentDidMount() {
        M.AutoInit();
    }


    handleSubmit = (ev) => {
        ev.preventDefault();
        const { value } = ev.currentTarget.filter;


        this.setState({
            value: value,
        })
    }

    handleChange = (val) => {
        this.setState({
            value: val.currentTarget.value,
        })
    }


    render() {
        return(
            <>
                <div id="sidebar">
                    <div id="filter">
                        <Filter dynamicFilter={this.handleChange} filter={ this.handleSubmit } value={ this.state.value }/>
                    </div>
                    <div className="pokemons-list">
                        <List data={this.state.value}/>
                    </div>
                </div>
            </>
        )
    }
};

export default Sidebar;
