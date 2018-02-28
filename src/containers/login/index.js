import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './index.css';
import { toggleLoginForgotPage, fillEmailText, fillPasswordText, postLoginFormData } from '../../modules/login';

const Login = props => (
  <div className="col-sm-12">
    { props.isLoginPage ? (// login page
      <div className="login-form">
        <form>
          <h2 className="text-center">Sign In</h2>
          <div className="form-group">
            <input
              onChange={props.fillEmailText}
              type="text"
              className="form-control"
              placeholder="Username"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              onChange={props.fillPasswordText}
              className="form-control"
              placeholder="Password"
              required="required"
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              onClick={() => props.postLoginFormData(props.email, props.password)}
              className="btn btn-primary btn-block"
            >Log in
            </button>
          </div>
          <div className="clearfix">
            <button type="button" onClick={props.toggleLoginForgotPage} className="pull-right btn btn-link">Forgot Password?</button>
          </div>
        </form>
        <p className="text-center"><a href="#">Create an Account</a></p>
      </div>) : ( //  forgot page
        <div className="login-form">
          <form>
            <h2 className="text-center">Forgot Password</h2>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username or Email"
                required="required"
              />
            </div>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-primary btn-block"
              >Recover My Password
              </button>
            </div>
            <div className="clearfix">
              <button type="button" onClick={props.toggleLoginForgotPage} className="pull-right btn btn-link">Go Back</button>
            </div>
          </form>
        </div>
        )
        }
  </div>
);

Login.propTypes = {
  isLoginPage: PropTypes.bool.isRequired,
  toggleLoginForgotPage: PropTypes.func.isRequired,
  fillEmailText: PropTypes.func.isRequired,
  fillPasswordText: PropTypes.func.isRequired,
  postLoginFormData: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
};

Login.defaultProps = {
  email: '',
  password: '',
};

const mapStateToProps = state => ({
  isLoginPage: state.login.isLoginPage,
  email: state.login.email,
  password: state.login.password,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleLoginForgotPage,
  fillEmailText,
  fillPasswordText,
  postLoginFormData,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
