import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Cookies  from 'universal-cookie';
import { onUserLogin } from '../actions';
import { Button, Form, FormGroup, Input } from 'reactstrap'

const cookies = new Cookies();

class LoginReact extends Component {

    componentWillReceiveProps(newProps) {
        if(newProps.username !== '') {
            cookies.set('dataUser', newProps.username, { path: '/' })// path:'/' gunanya agar cookie bisa di get di setiap page
        }   
    }

    onBtnLoginClick = () => {
        var username = this.refs.username.value;
        var password = this.refs.password.value;
        this.props.onUserLogin({username, password})
    }
    
        render () {

            if(this.props.username === "") {

                if(this.props.error) {
                    var alert = <p align='center' style={{ fontSize: '14px' }}
                    className='alert alert-danger'>{this.props.error}</p>
                }

                var load;
                if(this.props.loading) {
                    load = <i className="fa fa-spinner fa-spin" style={{ fontSize: '25px' }}/>
                } else {
                    load =  
                    <Button color="primary"  onClick={this.onBtnLoginClick}> Login </Button>
                   
                }

                return (
                    
                    <div className="container">
                        <div className="signup-content">
                        
                            <Form style={{ margin: '0 auto', paddingTop: "20px"}} className="col-4">
                            <h2 align="center" className="form-title">Login Account</h2>
                            <br></br>
                            <FormGroup>
                                <Input ref="username" type="text" className="form-input" name="username" id="exampleUsername" placeholder="Your username" required/>
                            </FormGroup>
                            <FormGroup>
                                <Input ref="password" type="password" className="form-input" name="password" id="examplePassword" placeholder="Your password" required/>
                            </FormGroup>
                            
                            {alert}
                            {load}
                            
                            </Form>
                        
                        
                        </div>
                    </div>
                );
            }
        
        return <Redirect to="/"/>
        
    }
}


const mapStateToProps = (state) => {
    return { username: state.auth.username, error: state.auth.error };
}   

export default connect(mapStateToProps, { onUserLogin })(LoginReact);