import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Button } from "semantic-ui-react";
import featuredImg from "../../../../assets/images/offerPage/featured.png";
import normalImg from "../../../../assets/images/offerPage/normal.png";
import { _getOffersType } from "../../../../services/offersRequests";

const OffersItems = ({ offerType }) => {
  const [offerTypes, setOfferTypes] = useState([]);
  const history = useHistory();
  useEffect(() => {
    let isMounted = new AbortController();
    _getOffersType().then((res) => {
      if (!res.success) {
        history.push("/login");
        return;
      }
     
      setOfferTypes(res.result);
    });
    return () => {
      isMounted.abort();
    };
  }, []);
  return (
    <div className="offers-items">
      <ul>
        {offerTypes.length > 0 &&
          offerTypes.map((offer, i) => (
            <li key={i}>
              <div
                className="offer-card"
                onClick={() => offerType(offer.OFFER_TYPE_ID)}
              >
                <div className="offer-img">
                  <img
                    src={offer.OFFER_TYPE_ID === 1 ? featuredImg : normalImg}
                    width="100"
                    alt="Featured image"
                  />
                </div>
                <div className="offer-content">
                  <div className="offer-title">
                    <p>{offer.OFFER_TYPE_NAME}</p>
                    {offer.OFFER_TYPE_ID === 1 && (
                      <p className="promote-text">20X More Views</p>
                    )}
                  </div>
                  <div className="offer-desc">
                    <p>{offer.OFFER_TYPE_DESCRIPTION}</p>
                  </div>
                  <div className="offer-price">
                    <div className="offer-cost">
                      <p>Cost</p>
                      <p>{offer.OFFER_TYPE_COST}</p>
                    </div>
                    <div className="offer-action-btn">
                      <Button
                        content="Create Offer"
                        icon="angle right"
                        labelPosition="right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        {/* <li>
          <div className="offer-card" onClick={() => offerType("featured")}>
            <div className="offer-img">
              <img src={featuredImg} width="100" alt="Featured image" />
            </div>
            <div className="offer-content">
              <div className="offer-title">
                <p>FEATURED OFFER</p>
                <p className="promote-text">20X More Views</p>
              </div>
              <div className="offer-desc">
                <p>Offers will be visible at the application start page</p>
              </div>
              <div className="offer-price">
                <div className="offer-cost">
                  <p>Cost</p>
                  <p>10 AED / Day</p>
                </div>
                <div className="offer-action-btn">
                  <Button
                    content="Create Offer"
                    icon="angle right"
                    labelPosition="right"
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="offer-card" onClick={() => offerType("normal")}>
            <div className="offer-img">
              <img src={normalImg} width="100" alt="normal image" />
            </div>
            <div className="offer-content">
              <div className="offer-title">
                <p>NORMAL OFFER</p>
              </div>
              <div className="offer-desc">
                <p>Offers will be visible at the application start page</p>
              </div>
              <div className="offer-price">
                <div className="offer-cost">
                  <p>Cost</p>
                  <p>Free</p>
                </div>
                <div className="offer-action-btn">
                  <Button
                    content="Create Offer"
                    icon="angle right"
                    labelPosition="right"
                  />
                </div>
              </div>
            </div>
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default OffersItems;