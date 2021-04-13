import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Panel from "../Components/Panel/Panel";

export default function WithAuth(ComponentInside) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        redirect: false,
      };
    }

    //Call the authorization
    componentDidMount() {
      if (sessionStorage.getItem("token") == null) {
        this.setState({
          loading: false,
          redirect: true,
        });
      } else {
        fetch(`${process.env.REACT_APP_API_URL}` + "/api/authorize", {
          credentials: "include",
          headers: { "x-access-token": sessionStorage.getItem("token") },
        })
          .then((res) => {
            if (res.status === 200) {
              this.setState({ loading: false });
            } else {
              const error = new Error(res.error);
              throw error;
            }
          })
          .catch((err) => {
            console.error(err);
            this.setState({
              loading: false,
              redirect: true,
            });
          });
      }
    }

    render() {
      const { loading, redirect } = this.state;

      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/" />;
      }
      return <Panel {...this.props} />;
    }
  };
}
