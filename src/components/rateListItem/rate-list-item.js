import React, { Component } from 'react'
import ReactChartKick, {AreaChart} from "react-chartkick"
import Chart from "chart.js"
import "./rate-list-item.css"

ReactChartKick.addAdapter(Chart)

export default class RateListItem extends Component {



    
    render() {


        const {name, flag, rates, currencyCode} = this.props.rateExchange

        return (
            <tr className="area" >
            <td>
                {name}<br/>
                <img src={flag} height="60" width="100" alt="" />
            </td>
            <td>
            <AreaChart
            data={formatData(rates, currencyCode)}
            xtitle="Date"
            ytitle={currencyCode}/>
            </td>

            </tr>
        )
    }
}

function formatData(rates, currencyCode) {
    return Object.keys(rates).map(date => {
      return [date, rates[date][currencyCode]];
    });
  }
