import React, { Component } from "react";
import {connect} from "react-redux"
import {fetchCountries, fetchRate} from "../../stores/actions/country"
import "./search-bar.css"

const lodash = require("lodash")

export class SearchBar extends Component {

  componentDidMount() {
    this.props.fetchCountries()
  }

  onChangeCountry(e){
    const countryCode = e.target.value;
    const country = lodash.find(this.props.countries, {
      code : countryCode
    })
    this.props.fetchRate(country)
console.log("function onChangeCountry",e.target.value)
  }

  selectCountries() {
    return (
      <select 
      onChange={e => this.onChangeCountry(e)}
      className=" form-control SearchBar">
        {this.props.countries.map(c => {
          return (
          <option key={c.code} value={c.code}>
          {c.name}
          </option>
          );
        })}
      </select>
    );
  }
  render() {
    return (
      <form className="form-group">
        {this.selectCountries()}
      </form>
    );
  }
}


const mapStateToProps = (store) => {
    return {
      countries : store.countryReducer.countries
    }
}

const mapDispatchToProps = {
  fetchCountries,
  fetchRate,
}

export default connect (mapStateToProps, mapDispatchToProps)(SearchBar)
