import React, { Component } from 'react';
import { connect } from 'react-redux'
import { onUserRegister} from '../actions';
import Cookies  from 'universal-cookie';
import { Redirect } from 'react-router-dom';



const cookies = new Cookies();

class Register extends Component {

    componentWillReceiveProps(newProps) {
        if(newProps.username !== '') {
            cookies.set('dataUser', newProps.username, { path: '/' })// path:'/' gunanya agar cookie bisa di get di setiap page
        }   
    }

    onBtnRegisterClick = () => {
        var username = this.refs.username.value;
        var email = this.refs.email.value;
        var phone = this.refs.phone.value;
        var password = this.refs.password.value;

        this.props.onUserRegister({ username, email, password, phone });

    }
    render() {

        if(this.props.username === "") {

            if(this.props.error) {
                var alert = <p align='center' style={{ fontSize: '14px' }}
                className='alert alert-danger'>{this.props.error}</p>
            }

            var load;
            if(this.props.loading) {
                load = <i className="fa fa-spinner fa-spin" style={{ fontSize: '14px' }}/>
            } else {
                load =  
                <input type="button" className="btn btn--radius btn--green" defaultValue="Sign Up" onClick={this.onBtnRegisterClick} />
               
            }

            return (
                
                <div className="wrapper wrapper--w680">
                  <div className="card card-1">
                    <div className="card-heading" />
                    <div className="card-body">
                      <h2 className="title">Register</h2>
                      <form method="POST">
                        <div className="input-group">
                          <input className="input--style-1" ref="username" type="text" name="name" id="name" placeholder="Your username" required />
                        </div>
                        <div className="input-group">
                          <input className="input--style-1" ref="email" type="email" name="email" id="email" placeholder="Your email" required />
                        </div>
                        <div className="input-group">
                          <input className="input--style-1" ref="phone" type="number" name="phone_number" id="phone_number" placeholder="Your phone number" required />
                        </div>
                        <div className="input-group">
                          <input className="input--style-1" ref ="password" type="text" name="password" id="password" placeholder="Your password" required />
                        </div>
                        <div>
                            {alert}
                        </div>
                        <div className="p-t-20">
                          {/* <button className="btn btn--radius btn--green" type="submit">Submit</button> */}
                          {load}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

        )
        }return <Redirect to="/"/>
    }
}
const mapStateToProps = (state) => {
    return { username: state.auth.username, error: state.auth.error, loading: state.auth.loading };
}

export default connect(mapStateToProps, { onUserRegister })(Register);