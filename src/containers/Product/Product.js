import React, { Component } from 'react';
import classes from './Product.module.css';
import { Link } from 'react-router-dom';

import pillow from '../../assets/pillow1.png';
import towel from '../../assets/towel1.png';
import blanket from '../../assets/blanket1.png';

import mini from '../../assets/mini-mouse.png';
import lion from '../../assets/lion-cub1.png';
import superman from '../../assets/superman.png';
import panda from '../../assets/panda.png';
import crown from '../../assets/crown.png';
import teddy from '../../assets/teddy.png';
import ball from '../../assets/ball.png';
import kitty from '../../assets/hello-kitty.png';

import * as actions from '../../store/actions/product';
import { connect } from 'react-redux';

import ProductBanner from '../../components/ProductUI/ProductBanner/ProductBanner';
import ProductDetails from '../../components/ProductUI/ProductDetails/ProductDetails';
import ProductButton from '../../components/ProductUI/ProductButton/ProductButton';

class Product extends Component {
    
    componentDidMount() {
        const price = this.props.price;
        const productName = this.props.name;
        this.props.initProduct(price, productName);
    }

    imgRef = React.createRef();
    nameRef = React.createRef();
    stickerRef = React.createRef();

    colorClickedHandler = (color) => {
        this.props.onColorAdded(color);
    }

    inputChangeHandler = (event) => {
        this.nameRef.current.textContent = event.target.value;
        this.props.onNameAdded(event);
    }

    stickerClickedHandler = (name) => {
        switch (name) {
            case ('mini maus'):
                this.stickerRef.current.setAttribute('src', mini);
                this.stickerRef.current.style.display = 'block';
                break;
            case ('lion'):
                this.stickerRef.current.setAttribute('src', lion);
                this.stickerRef.current.style.display = 'block';
                break;
            case ('superman'):
                this.stickerRef.current.setAttribute('src', superman);
                this.stickerRef.current.style.display = 'block';
                break;
            case ('panda'):
                this.stickerRef.current.setAttribute('src', panda);
                this.stickerRef.current.style.display = 'block';
                break;
            case ('kruna'):
                this.stickerRef.current.setAttribute('src', crown);
                this.stickerRef.current.style.display = 'block';
                break;
            case ('meda'):
                this.stickerRef.current.setAttribute('src', teddy);
                this.stickerRef.current.style.display = 'block';
                break;
            case ('lopta'):
                this.stickerRef.current.setAttribute('src', ball);
                this.stickerRef.current.style.display = 'block';
                break;
            case ('hello kitty'):
                this.stickerRef.current.setAttribute('src', kitty);
                this.stickerRef.current.style.display = 'block';
                break;
            default: 
                this.stickerRef.current.style.display = 'none';
                break;
        }
        this.props.onStickerAdded(name);
    }
    
    render() {
        return (
            <React.Fragment>
                <ProductBanner name={this.props.name} />
                <div className={classes.Content}>
                    <div className={classes.Icons}>
                        {this.props.name === 'Jastuk' ? null : <div className={classes.Icon}><Link to="/jastuk"><img src={pillow} alt="Jastuk" /></Link></div>}
                        {this.props.name === 'Cebe' ? null : <div className={classes.Icon}><Link to="/cebe"><img src={blanket} alt="Cebe" /></Link></div>}
                        {this.props.name === 'Peskir' ? null : <div className={classes.Icon}><Link to="/peskir"><img src={towel} alt="Peskir" /></Link></div>}
                    </div>
                    <div className={classes.ProductImage}>
                        <div>
                            {/* <div className={classes.SvgContainer}>
                                <Pillow color={this.state.product.color} /> */}
                                <img src={this.props.source} alt="Product" ref={this.imgRef} />
                            {/* </div> */}
                            <h3 ref={this.nameRef}>Stefan</h3>
                            <img alt="Sticker" ref={this.stickerRef} />
                        </div>
                        <div>
                            <h2>Cena: {this.props.price} RSD</h2>
                        </div>
                    </div>
                    <ProductDetails 
                        colorClick={this.colorClickedHandler} 
                        selectedColor={this.props.product.color}
                        changed={this.inputChangeHandler} 
                        stickerClick={this.stickerClickedHandler} />
                </div>
                <ProductButton buttonClick={() => this.props.buttonClick(this.props.product)} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        product: state.product.product
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initProduct: (price, productName) => dispatch(actions.loadProduct(price, productName)),
        onColorAdded: (color) => dispatch(actions.colorAdded(color)),
        onNameAdded: (event) => dispatch(actions.nameAdded(event)),
        onStickerAdded: (name) => dispatch(actions.stickerAdded(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);