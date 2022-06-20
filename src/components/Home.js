import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
    state = {
        search: '',
    }

    handleChange = ({target: { name, value }}) => {
        this.setState({ [name]: value});
    }

    render() {
        const { search } = this.state;
        return(
            <div>
                <h1>Buscar SubReddit</h1>
                <input
                  name="search"
                  type="text"
                  value={ search }
                  onChange={ this.handleChange }
                />
                <button>Pesquisar</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state,
  });

export default connect(mapStateToProps)(Home);