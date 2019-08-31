import React, { Component } from "react";
import { connect } from "react-redux";
import RateListItem from "../rateListItem/rate-list-item";
import "./rateList.css";

class RateList extends Component {
  render() {
    return (
      <table className="table">
        <thead className="tableThead" >
          <tr>
            <th>Pays</th>
            <th className="col-md-6">Valeur de la monnaie par rapport au $</th>
          </tr>
        </thead>
        <tbody>
          {this.props.rateList.map((pays, index) => (
            <RateListItem key={pays.code + index} rateExchange={pays} />
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    rateList: state.rateListReducer.rateList
  };
};
export default connect(mapStateToProps, undefined)(RateList);
