import { Icon } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { _getUsersTransactions } from "../../services/axiosRequests";
import moment from "moment";

const WalletBalanceView = (props) => {
  const [withdrawHistory, setWithdrawHistory] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    if (!isMounted) return;
    const providerId = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );
    _getUsersTransactions(providerId.SERVICE_PROVIDER_ID).then((res) => {
      if (res.message && /invalid/.test(res.message)) {
        history.push("/login");
        localStorage.removeItem("user");
      } else {
        setWithdrawHistory(res);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [history]);

  return (
    <Fragment>
      <div className="wallet-view-links-container">
        <div className="main-link">
          <Icon>account_balance_wallet</Icon>
          <p>Wallet</p>
        </div>
        <Icon>arrow_forward_ios</Icon>
        <div className="sub-link">
          <p>Withdraw History</p>
        </div>
      </div>

      <div className="wallet-withdrawal-history-content">
        <div className="withdrawal-title">
          <p>Amount</p>
          <p>Withdraw Date</p>
        </div>
        <div className="withdrawal-content">
          {withdrawHistory.length > 0 &&
            withdrawHistory.map((withdraw, i) => (
              <div className="withdrawal-data-content" key={i}>
                <p>{withdraw.WITHDRAW_AMOUNT} AED</p>
                <p>
                  {moment(withdraw.WITHDRAW_DATE).format("DD MMM YYYY")}{" "}
                  <span>
                    {moment(withdraw.WITHDRAW_DATE).format("hh:mm A")}
                  </span>
                </p>
              </div>
            ))}

          {/* <div className="withdrawal-data-content">
            <p>9,675 AED</p>
            <p>
              28 Jul 2020 <span>06:40 PM</span>
            </p>
          </div>
          <div className="withdrawal-data-content">
            <p>9,675 AED</p>
            <p>
              28 Jul 2020 <span>06:40 PM</span>
            </p>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
};

export default WalletBalanceView;
