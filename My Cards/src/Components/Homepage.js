import { Layout, Menu, Breadcrumb } from "antd";
// import "../App.css";
import "./home.css";
import { Link } from "react-router-dom";
import { Image } from 'antd';
import { connect } from "react-redux";
import { carded, named, change } from "../actions";
import { Card, Col, Row, Avatar } from "antd";
import dp1 from '../dp1.jpg';
import dp2 from '../dp2.jpg';
import dp3 from '../dp3.jpg';
import { ArrowLeftOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import user from "../user.webp";
import "antd/dist/antd.css";
import card from '../images/card.png'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Item from "antd/lib/list/Item";


const { Meta } = Card;
const { Header, Content, Footer } = Layout;

const gridStyle = {
  width: "25%",
  textAlign: "center",
};
class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      cards: [
        
      ],
    };
  }
  // send=()=>{
  //   this.props.carded({
  //     name: "Patricia Lebsack",
  //     username: "Karianne",
  //     image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", email: "Julianne.OConner@kory.org",
  //     address: {
  //       street: "Hoeger Mall",
  //       suite: "Apt. 692",
  //       city: "South Elvis",
  //       zipcode: "53919-4257",
  //       geo: {
  //         lat: "29.4572",
  //         lng: "-164.2990",
  //       },
  //     },
  //     phone: "493-170-9623 x156",
  //     website: "kale.biz",
  //     company: {
  //       name: "Robel-Corkery",
  //       catchPhrase: "Multi-tiered zero tolerance productivity",
  //       bs: "transition cutting-edge web services",
  //     },
  //   },)
  // }
  naming=(value)=>{
    this.props.named(value);
    console.log("value",value);
  }

  render() {
    // this.send();
    let redcards=this.props.cardetails;
    console.log('got red cards', redcards);
    const filtered = this.state.cards.filter(
      (item) => item.name === this.state.name
    );
    console.log("cards", redcards[redcards.length-1]);
    // let cards={1:'Cat',2:'diffuse', 3:'shuffle', 4:'explode',5:'Cat',6:'Cat',7:'Cat',8:'Cat',9:'diffuse',0:'Cat'}
    
    // // if (this.state.id !== "") {
    // //   card = this.state.cards[this.state.id];
    // //   console.log("card", card);
    // // }
    // console.log("index", this.state.id);
    return (
      <div className="site-card-border-less-wrapper">
        <ul className='list'>
        {redcards.map((item, index) =>(
          <li key={index} onClick={()=> this.props.change(index)}>
<img alt="example" src={item.show ? item.images : card}
// {card}
// {redcards[item].images}
 />
<p>{item.name}</p>
          </li>
        ))}

        </ul>
        {/* <Col  className="row">
          {redcards.map((item, index) =>
          (
            // <Link to={`/homepage/${index+1}`}>
              <Col
                className="item"
                key={index}
                onClick={() => this.naming(index)}
              >
                <Card
                  hoverable
                  style={{ width: 250 }}
                  cover={<img alt="example" src={item.images[0]} />}
                >
                  <Meta title={item.name}  />
                </Card>
              </Col>
          ))}
        </Col>  */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let cardetails = state.cards.cardetails;
  console.log("cards recieved", cardetails);
  return {
    cardetails
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // carded: (payload) => dispatch(carded(payload)),
    // named: (payload) => dispatch(named(payload)),
    change:(payload) => dispatch(change(payload)),

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

