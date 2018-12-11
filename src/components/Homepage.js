import React, { Component } from 'react'
import Carousel from './Carousel'
import { connect } from "react-redux";
// import axios from 'axios';

class Homepage extends Component {
    // state = { listProduct: [] }

    // componentDidMount() {
    //     var kacrutPromise = axios.get('http://localhost:1971/popok')
    //     kacrutPromise.then((res) => {
    //         // console.log(res.data)
    //         this.setState({ listProduct: res.data })
    //     }).catch((err) => {
    //         console.log()
    //     })
    // }
    // renderListProduct = () => {
    //     var listJSXProduct = this.state.listProduct.map((item) => {
    //         return (
    //             <div>
    //                 <h3>{item.nama}</h3>
    //                 <p>{item.description}</p>
    //             </div>
    //         )
    //     })
    //     return listJSXProduct;
    // }
    render () {
        
        return (
            <div>
                <Carousel/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username
    };
}

export default connect(mapStateToProps)(Homepage);