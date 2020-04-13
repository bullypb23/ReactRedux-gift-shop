import React, { Component, Suspense } from 'react';
import './App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import NavigationItems from './components/Navigation/NavigationItems';
import HomePage from './hoc/HomePage';
import Product from './containers/Product/Product';
import Basket from './containers/Basket/Basket';
import Footer from './components/Footer/Footer';
import Spinner from './components/UI/Spinner/Spinner';

import towel from './assets/towel.png';
import pillow from './assets/pillow.png';
import blanket from './assets/blanket.png';

import { connect } from 'react-redux';
import * as actions from './store/actions/basket';

const asyncContact = React.lazy(() => import('./containers/Contact/Contact'));

class App extends Component {
	state = {
		isItemAdded: false
	};
	
    buttonClickedHandler = (product) => {
        this.setState({
			isItemAdded: true,
		});
		this.props.onProductAdded(product);
		this.props.history.push('/korpa')
	}
	
	removeItem = (id) => {
		this.props.onProductRemove(id);
		if (this.props.basket.length === 0) {
			this.setState({
				isItemAdded: false
			});
			this.props.history.push('/');
		}
	}

	render() {
		return (
			<div className="App">
				<NavigationItems addedItem={this.state.isItemAdded} />
				<Switch>
					<Suspense fallback={<Spinner />}>
						<Route exact path='/' component={HomePage} />
						{/* <Route path='/prijava' component={Login} />	 */}
						{this.state.isItemAdded ? <Route path='/korpa' render={() => <Basket products={this.props.basket} removeItem={this.removeItem} totalPrice={this.props.price} />} /> : null}	
						<Route path='/peskir' render={() => <Product name='Peskir' price='1000' source={towel} buttonClick={this.buttonClickedHandler} />} />
						<Route path='/jastuk' render={() => <Product name='Jastuk' price='1000' source={pillow} buttonClick={this.buttonClickedHandler} />} />
						<Route path='/cebe' render={() => <Product name='Cebe' price='2000' source={blanket} buttonClick={this.buttonClickedHandler} />} />
						<Route path='/kontakt' component={asyncContact} />
						<Redirect to='/' />
					</Suspense>
				</Switch>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		basket: state.basket.basket,
		price: state.basket.totalPrice
	}
}

const mapDispatchToProps = dispatch => {
	return {
		// onProductAdded: (product) => dispatch({type: actionTypes.ADD_PRODUCT, product: product}),
		// onProductRemove: (id) => dispatch({type: actionTypes.REMOVE_PRODUCT, id: id})
		onProductAdded: (product) => dispatch(actions.productAdded(product)),
		onProductRemove: (id) => dispatch(actions.productRemoved(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
