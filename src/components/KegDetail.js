import React from "react";
import PropTypes from "prop-types";

function KegDetail(props)
{
  const { keg, onClickingDelete, onClickingSell } = props;

  let pints;
  let sell;
  if (keg.pints > 0)
  {
    pints = <h4>Pints: {keg.pints}</h4>;
    sell = <button onClick={() => onClickingSell()}>Sell</button>
  } else
  {
    pints = <h4><strong>All Gone</strong></h4>;
  };

  return (
    <React.Fragment>
      <h2>Keg Detail</h2>
      <h3>{keg.name} - <em>produced by: </em>{keg.brand}</h3>
      <h4><em>{keg.alcohol} abv</em></h4>
      <p><em>$ {keg.price}</em></p>
      <p>{pints}</p>{sell}
      <button onClick={() => onClickingDelete(keg.id)}>Remove Keg</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingSell: PropTypes.func
};

export default KegDetail;