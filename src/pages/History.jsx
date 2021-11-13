import { connect } from "react-redux";
import { DataPreview } from "../cmp/DataPreview";
import { loadBitcoinData } from "../store/action/bitcoinAction";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

const _History = ({ bitcoinData }) => {
  if (!bitcoinData)
    return <div className="page-loading-screen">Loading...</div>;

  return (
    <div className="history">
      <div className="bitcoin-price-table">
        <div className="table-titles grid">
          <p>
            Date
            <div className="flex column align-center">
              <MdArrowDropUp />
              <MdArrowDropDown />
            </div>
          </p>

          <p>
            High
            <div className="flex column align-center">
              <MdArrowDropUp />
              <MdArrowDropDown />
            </div>
          </p>
          <p>
            Low
            <div className="flex column align-center">
              <MdArrowDropUp />
              <MdArrowDropDown />
            </div>
          </p>
          <p>
            Open
            <div className="flex column align-center">
              <MdArrowDropUp />
              <MdArrowDropDown />
            </div>
          </p>
          <p>
            Close
            <div className="flex column align-center">
              <MdArrowDropUp />
              <MdArrowDropDown />
            </div>
          </p>
        </div>
        {bitcoinData.map((data, idx) => (
          <DataPreview data={data} key={idx} />
        ))}
      </div>
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
export const History = connect(mapStateToProps, mapDispatchToProps)(_History);
