import {useState } from "react";
import {useSelector } from "react-redux"
import CardComponent from "../../components/card";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'


export default function Rooms() {
    

let ROOMS = useSelector((data) => {
  return data.rooms;
});

let [currentPage, setCurrnetPage] = useState(0);
let pageSize = 6;

function GetLength() {
  let pages = [];
  for (let y = 0; y < ROOMS.length / pageSize; y++) {
    pages[y] = y;
  }
  return pages;
}

let [priceVal, setPriceval] = useState(0);

function ChangeVal(v) {
  setPriceval(v.target.value);
}

let [check, setCheck] = useState("");
function CheckBox(v) {
  console.log(v.target.checked);

  if (v.target.checked == true) {
    setCheck(v.target.value);
  } else {
    setCheck("");
  }
}

function ItemRooms() {
  let ItemRoom = ROOMS.filter((info) => {
    if (priceVal < 10) {
      return info;
    } else {
      return info.price < priceVal;
    }
  });

  let checklist = ItemRoom.filter((fo) => {
    if (check !== "") {
      return fo.service.includes(check);
    } else {
      return fo;
    }
  });

  return checklist
    .slice(currentPage * pageSize, pageSize * currentPage + pageSize)
    .map((data, index) => {
      return <CardComponent  key={index}  Room={data}></CardComponent>;
    });
}


return (
  <div className="container-fluid">
    <div className="row header two">
      <div className="overlay center_box">
        <div className="big_title">
          <div>
            <img src="../../line1.png"></img>
          </div>
          <h1 className="bg_title">Rooms List </h1>
          <div>
            <img src="../../line3.png"></img>
          </div>
        </div>
      </div>
    </div>

    <div className="row wholeContainer">
      <div className="col-lg-4">
        <div className="sidebar">
          <div className="range">
            <h3>Max & price per Night $ {priceVal}</h3>
            <input
              type="range"
              max="200"
              onChange={ChangeVal}
              min="0"
              value={priceVal}
            ></input>
          </div>

          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Service
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div className="check">
                    <input
                      type="checkbox"
                      onChange={CheckBox}
                      value="mini-bar"
                      id="po"
                    ></input>
                    <label htmlFor="po">mini-bar</label>
                  </div>
                  <div className="check">
                    <input
                      type="checkbox"
                      onChange={CheckBox}
                      value="phone"
                      id="po"
                    ></input>
                    <label htmlFor="po">phone</label>
                  </div>
                  <div className="check">
                    <input
                      type="checkbox"
                      onChange={CheckBox}
                      value="car-rental"
                      id="po"
                    ></input>
                    <label htmlFor="po">car-rental</label>
                  </div>
                  <div className="check">
                    <input
                      type="checkbox"
                      onChange={CheckBox}
                      value="wifi"
                      id="po"
                    ></input>
                    <label htmlFor="po">Wifi</label>
                  </div>
                  <div className="check">
                    <input
                      type="checkbox"
                      onChange={CheckBox}
                      value="breakfast"
                      id="po"
                    ></input>
                    <label htmlFor="po">breakfast</label>
                  </div>
                  <div className="check">
                    <input
                      type="checkbox"
                      onChange={CheckBox}
                      value="writing-desk"
                      id="po"
                    ></input>
                    <label htmlFor="po">writing desk</label>
                  </div>
                  <div className="check">
                    <input
                      type="checkbox"
                      onChange={CheckBox}
                      value="non-smoking-room"
                      id="po"
                    ></input>
                    <label htmlFor="po">non-smoking-room</label>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>

      <div className="col-lg-8 ">
        <div className="rooms m">{ItemRooms()}</div>

        <nav aria-label="Page navigation">
          <ul class="pagination">
            {GetLength() &&
              GetLength().map((page, index) => {
                return (
                  <li key={index} onClick={() => setCurrnetPage(index)}>
                    <a
                      className={
                        index == currentPage ? "DOCOLOR ActiveIt" : "DOCOLOR"
                      }
                    >
                      {page + 1}
                    </a>
                  </li>
                );
              })}
          </ul>
        </nav>
      </div>
    </div>
  </div>
);

}