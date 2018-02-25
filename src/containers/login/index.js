import React from 'react';
import './index.css';
import {isForgotPage, isLoginPage} from "../../modules/login";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

export class Login extends React.Component {
  render() {
    return (
      <div className="col-sm-12">
        { isLoginPage ? (
          <div className="login-form">
            <form>
              <h2 className="text-center">Sign In</h2>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Username" required="required"/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" required="required"/>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">Log in</button>
              </div>
              <div className="clearfix">
                <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
                <a onClick={isForgotPage} className="pull-right">Forgot Password?</a>
              </div>
            </form>
            <p className="text-center"><a href="#">Create an Account</a></p>
          </div>) : (
            <span>aslikov</span>
        )
        }
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoginPage: state.login.IS_LOGIN_PAGE,
  isForgotPage: state.login.IS_FORGOT_PAGE
});
const mapDispatchToProps = dispatch => bindActionCreators({
  isLoginPage,
  isForgotPage,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
