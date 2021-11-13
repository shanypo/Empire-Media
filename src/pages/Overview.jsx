import { loadBitcoinData } from "../store/action/bitcoinAction";
import { connect } from "react-redux";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const _Overview = ({ bitcoinData }) => {
  if (!bitcoinData)
    return <div className="page-loading-screen">Loading...</div>;

  return (
    <div className="overview">
      <AreaChart
        className="bitcoin-chart"
        width={1300}
        height={400}
        data={bitcoinData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="4 7" />
        <XAxis dataKey="Date" />
        <YAxis dataKey="Close" />
        <Tooltip />
        <Area type="monotone" dataKey="Close" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bitcoinData: state.bitcoinModule.bitcoinData,
  };
};

const mapDispatchToProps = {
  loadBitcoinData,
};
export const Overview = connect(mapStateToProps, mapDispatchToProps)(_Overview);
