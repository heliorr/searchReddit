import React from 'react';
import { connect } from 'react-redux';
import { searchReddit } from '../redux/actions';

class Home extends React.Component {
    state = {
        search: '',
    }

    handleChange = ({target: { name, value }}) => {
        this.setState({ [name]: value});
    }

    search = () => {
        const { search } = this.state;
        const { dispatch } = this.props;
        dispatch(searchReddit(search));
    }
    
    render() {
        const { search } = this.state;
        const { data: { data: { children } } } = this.props;
        console.log(children)
        return(
            <div>
                <h1>Buscar SubReddit</h1>
                <input
                  name="search"
                  type="text"
                  value={ search }
                  onChange={ this.handleChange }
                />
                <button onClick={ this.search }>Pesquisar</button>
                <ul>
                    {
                    children ? children.map((child) => (
                        <li>{child.data.title}</li>
                    )) : <h4>Carregando</h4>
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state,
  });

export default connect(mapStateToProps)(Home);