import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import classes from './Items.module.css';
import Item from '../../components/Item/Item';
import Spinner from '../../components/UI/Spinner/Spinner';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/items';

class Items extends Component {

    UNSAFE_componentWillMount() {
        this.props.loadProducts();
    }
        
    render() {
        let items = <Spinner />
        if (this.props.isLoaded) {
            items = Object.keys(this.props.items).map(key => {
                return (
                        <Item
                            link={this.props.items[key].url} 
                            key={key}
                            name={key} 
                            source={this.props.items[key].source}
                            price={this.props.items[key].price}
                            {...this.props} />
                        )
            })
        }
        return (
            <div className={classes.Container}>
                {items}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items.items,
        isLoaded: state.items.isLoaded,
        error: state.items.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadProducts: () => dispatch(actions.initProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Items));