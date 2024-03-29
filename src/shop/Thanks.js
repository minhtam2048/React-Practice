import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Thanks extends Component {
    render() {
        return <div>
            <div className="col bg-dark text-white">
                <div className="navbar-brand">SHOPEE</div>
            </div>
            <div className="m-2 text-center">
                <h2>Thank you for using our service</h2>
                <p>Your orders is #{ this.props.order ? this.props.order.id : 0 }</p>
                <p>We will ship you as soon as possible</p>
                <Link to="/shop" className="btn btn-primary">Return to Store</Link>
            </div>
        </div>
    }   
}
