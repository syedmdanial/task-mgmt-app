import React, { Component } from "react";
import WrapperCard from "../components/shared/Cards/WrapperCard";
import Loading from "../components/shared/Loading";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      isLoading: false,
    };
  }

  componentDidMount() {}

  render() {
    const { isLoading, task } = this.state;
    return (
      <div className="Dashboard">
        <WrapperCard
          header={{
            exist: false,
          }}  
        >
          {isLoading && (
            <div className="text-center">
              <Loading />
            </div>
          )}
          {!isLoading && task.length === 0 && (
            <div className="d-flex justify-content-center align-items-center text-center">
              <div className="row">
                <div className="col-12 mb-3">
                  <span>You have no task</span>
                </div>
                <div className="col-12">
                  <button type="button" className="btn btn-block">
                    + New task
                  </button>
                </div>
              </div>
            </div>
          )}
          {!isLoading && task.length > 0 && (
            <h5>Here's your task</h5>
          )}
        </WrapperCard>
      </div>
    );
  }
}

export default Dashboard;
