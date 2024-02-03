import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="Dasboard">
        <h3>Dashboard</h3>
        {/* {isLoading && (
            <div className="text-center">
              <Loading />
            </div>
          )}
          {!isLoading && drinks.length > 0 && (
            <CocktailList drinks={this.state.drinks} />
          )} */}
      </div>
    );
  }
}

export default Dashboard;
