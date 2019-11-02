import React from 'react';
import PokedexLoader from './PokedexLoader';
import { withRouter } from 'react-router';

class Pokedex extends React.Component {
    state = {
        isLoading: false,
        pokemon: {},
    }
    
    componentDidMount() {
        this.setState({
            isLoading: true,
        })
        this.props.name !== undefined ? this.setPokemon(this.props.name) : this.setState({isLoading: false});
    }

    UNSAFE_componentWillReceiveProps(next) {
        this.setState({
            isLoading: true,
        })
        next.name !== undefined ? this.setPokemon(next.name) : this.setState({ isLoading: false });
    }

    async setPokemon(name) {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/'+name);
            const pokemon = await res.json();
            this.setState({
                isLoading: false,
                pokemon: pokemon,
            })
            console.log(this.state.pokemon)
            window.history.replaceState('', 'Pokemon: ' + name, this.props.match.url);
        } 
        catch (err) {
            console.log(err);
            throw err;
        }
    }

    
    render() {
        return(
            <>
                <div id="pokedex-main">
                    <PokedexLoader load={this.state.isLoading} />
                        <div id="logo">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/200653/logo.png" alt="logo" />
                        </div>
                        <div id="line"></div>
                        <div id="pokedex-left">
                            <div id="left-part-top">
                                <div id="left-buttons">
                                    <div id="little_red_button-left"></div>
                                    <div id="little_green_button-left"></div>
                                    <div id="little_yellow_button-left"></div>
                                    <div id="white_around_blue">
                                        <div id="blue_button"></div>
                                    </div>
                                </div>
                                <div id="curves-pokedex-left">
                                    <div id="curve1-left"></div>
                                    <div id="curve2-left"></div>
                                </div>
                            </div>
                            <div id="left-part-middle">
                                <div id="screen-border">
                                    <div id="screen">
                                        <div id="image_pokemon_container">
                                        <img id="image" src={this.state.pokemon.sprites === undefined ? "#" : this.state.pokemon.sprites.front_default } alt="" />
                                        </div>
                                    </div>
                                    <div id="lil_red_button"></div>
                                    <div id="speakers">
                                        <div id="speaker1" className="speaker"></div>
                                        <div id="speaker2" className="speaker"></div>
                                        <div id="speaker3" className="speaker"></div>
                                    </div>
                                </div>
                            </div>
                            <div id="left-part-bottom">
                                <div id="lil_green_button"></div>
                                <div id="lil_orange_button"></div>
                                <div id="cross">
                                    <div id="left_cross" className="prev">
                                        <div id="left_arrow"></div>
                                    </div>
                                    <div id="top_cross">
                                        <div id="up_arrow"></div>
                                    </div>
                                    <div id="right_cross" className="next">
                                        <div id="right_arrow"></div>
                                    </div>
                                    <div id="mid_cross">
                                        <div id="mid_circle"></div>
                                    </div>
                                    <div id="bottom_cross">
                                        <div id="down_arrow"></div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div id="pokedex-center">
                            <div id="middle_1"></div>
                            <div id="middle_2"></div>
                        </div>

                        <div id="pokedex-right">
                            <div id="right-part-top">
                                <div id="red_bar">
                                </div>
                            </div>
                            <div id="right-part-middle">
                                <div id="screen2">
                                    <div id="name">{this.state.pokemon.name}</div>
                                    <div id="description">
                                        <p>Poids : {this.state.pokemon.weight}</p>
                                        <p>Taille : {this.state.pokemon.height}</p>
                                        <p>{this.state.pokemon.moves === undefined ? "": this.state.pokemon.moves[0].move.name},  
                                        {this.state.pokemon.moves === undefined ? "": this.state.pokemon.moves[1].move.name},  
                                        {this.state.pokemon.moves === undefined ? "": this.state.pokemon.moves[2].move.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div id="right-part-bottom">
                                <div className="mini-screen">
                                    <p id="pokeindex"># {this.state.pokemon.id}</p>

                                </div>
                                <div className="mini-screen pokedex-types">
                                {
                                    this.state.pokemon.types === undefined ? "" :
                                    this.state.pokemon.types.map((item, key) => {
                                        console.log(item)
                                        return <div key={key}><p className={"pokedex-type pokedex-type-" + item.type.name}>{item.type.name}</p></div>
                                    })
                                }
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        )
    }
}

export default withRouter(Pokedex);