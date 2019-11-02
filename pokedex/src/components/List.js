import React from 'react';
import Loader from './Loader';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class List extends React.Component {

    state = {
        isLoading: false,
        data: [],
        filteredData: [],
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });
        this.getPokemons();
    }

    UNSAFE_componentWillReceiveProps(next) {
        if (this.props.data !== next.data) {
            if (!(next.data === undefined)) {
                this.filterList(next.data);
                window.history.replaceState('', 'Recherche: ' + next.data, '/search/' + next.data);
            }
        }
    }

    getPokemons = this.getPokemons.bind(this);

    async getPokemons() {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
            const data = await res.json();
            this.setState({ data: data.results, isLoading: false });
            this.props.data !== undefined && this.filterList(this.props.data);
        }
        catch (err) {
            console.log(err)
            throw err
        }
    }

    filterList(name) {
        this.setState({
            isLoading: true
        })
        const filteredPokemons = this.state.data.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()))
        this.setState({ filteredData: filteredPokemons, isLoading: false });
    }


    render() {
        return(
            <>
                {this.state.isLoading ? <Loader /> : 
                    <div className="collection">
                        {this.state.filteredData.map((item, key) => {
                            return (<Link key={key} to={"/pokemon/" + item.name} className="collection-item">{item.name}</Link>);
                        })}
                    </div>
                }
            </>
        )
    }
}


export default withRouter(List);