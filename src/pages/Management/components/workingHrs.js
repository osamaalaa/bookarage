import React, { useContext, useEffect } from "react";
import { Button, Checkbox } from "semantic-ui-react";
import arrowDate from "../../../assets/images/arrow-ic.svg";
import StateContext from "../../../component/context/stateContext";

const WorkingHrsComponent = ({ workingHrs }) => {
  const { setShowModal } = useContext(StateContext);

  useEffect(() => {
    let isMounted = true;
    if (!isMounted) return;
    
    return () => {
      isMounted = false;
    };
  }, [workingHrs]);

  const handleOnClick = () => {
    setShowModal({ modalName: "success", data: null });
  };
  return (
    <div className="workingHrs-container">
      <div className="page-title">
        <p>Working Hours</p>
       
      </div>

      <div className="workinghrs-list-title">
        <p>Days</p>
        <p>Shop Status</p>
      </div>

      <div className="workingHrs-lists">
        <ul>
          <li>
            <div className="list-day">
              <p>Sunday</p>
              <div className="list-action">
                <p>Opened</p>
                <Checkbox toggle />
              </div>
            </div>

            <div className="list-hrs-content">
              <div className="working-from-content">
                <p>Working From</p>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="To"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="AM"
                  >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
              </div>

              <div className="working-to-content">
                <p>
                  <span>Working</span> To
                </p>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="To"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="AM"
                  >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="list-day">
              <p>Monday</p>
              <div className="list-action">
                <p>Closed</p>
                <Checkbox toggle />
              </div>
            </div>

            <div className="list-hrs-content">
              <div className="working-from-content">
                <p>Working From</p>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="To"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="AM"
                  >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
              </div>

              <div className="working-to-content">
                <p>
                  <span>Working</span> To
                </p>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="To"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="AM"
                  >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="list-day">
              <p>Tuesday</p>
              <div className="list-action">
                <p>Closed</p>
                <Checkbox toggle />
              </div>
            </div>

            <div className="list-hrs-content">
              <div className="working-from-content">
                <p>Working From</p>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="To"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="AM"
                  >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
              </div>

              <div className="working-to-content">
                <p>
                  <span>Working</span> To
                </p>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="To"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="AM"
                  >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="list-day">
              <p>Wednesday</p>
              <div className="list-action">
                <p>Closed</p>
                <Checkbox toggle />
              </div>
            </div>

            <div className="list-hrs-content">
              <div className="working-from-content">
                <p>Working From</p>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="To"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="AM"
                  >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
              </div>

              <div className="working-to-content">
                <p>
                  <span>Working</span> To
                </p>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="To"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="AM"
                  >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="list-day">
              <p>Thursday</p>
              <div className="list-action">
                <p>Closed</p>
                <Checkbox toggle />
              </div>
            </div>

            <div className="list-hrs-content">
              <div className="working-from-content">
                <p>Working From</p>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="To"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="AM"
                  >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
              </div>

              <div className="working-to-content">
                <p>
                  <span>Working</span> To
                </p>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="To"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="AM"
                  >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="list-day">
              <p>Friday</p>
              <div className="list-action">
                <p>Closed</p>
                <Checkbox toggle />
              </div>
            </div>

            <div className="list-hrs-content">
              <div className="working-from-content">
                <p>Working From</p>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="To"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="AM"
                  >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
              </div>

              <div className="working-to-content">
                <p>
                  <span>Working</span> To
                </p>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="To"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="AM"
                  >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="list-day">
              <p>Saturday</p>
              <div className="list-action">
                <p>Closed</p>
                <Checkbox toggle />
              </div>
            </div>

            <div className="list-hrs-content">
              <div className="working-from-content">
                <p>Working From</p>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="To"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="AM"
                  >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
              </div>

              <div className="working-to-content">
                <p>
                  <span>Working</span> To
                </p>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="To"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
                <div className="date-filter-input ml-3">
                  <select
                    className="date-input"
                    // onChange={(e, { value }) =>
                    //   setDate({ ...date, to: value })
                    // }
                    placeholder="AM"
                  >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                  <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="working-action-btn">
        <Button content="Save" onClick={handleOnClick} />
      </div>
    </div>
  );
};

export default WorkingHrsComponent;
