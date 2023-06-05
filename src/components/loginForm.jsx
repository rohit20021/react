import React, { Component } from "react";
import Input from "./common/input";
import Joi, { abort } from "joi-browser";

class LoginForm extends Component {
  state = {
    account: { userEmail: "", Password: "" },
    errors: {},
  };
  schema = Joi.object({
    userEmail: Joi.string().email().required(),
    Password: Joi.string().required(),
  });
  userEmail = React.createRef();
  validate = () => {
    const result = Joi.validate(this.state.account, this.schema);
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
    //   without joi
    // if (this.state.account.userEmail.trim() === "") {
    //   errors.userEmail = "useremail is required";
    // }
    // if (this.state.account.Password.trim() === "") {
    //   errors.Password = "password is required";
    // }
    // return Object.keys(errors).length === 0 ? null : errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (errors) {
      this.setState({ errors });
    } else this.setState({ errors: {} });
    if (errors) return
    //call the server
  };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="userEmail"
            label="email address"
            value={account.userEmail.value}
            onChange={this.handleChange}
            type={"text"}
            error={errors.userEmail}
          />
          <Input
            name="Password"
            label="Password"
            value={account.Password.value}
            onChange={this.handleChange}
            type={"password"}
            error={errors.Password}
          />
          <button disabled={this.validate()} type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
