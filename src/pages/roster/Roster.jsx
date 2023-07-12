import React from 'react'
import './roster.css'

import FrannyImg from '../../images/Franny.png'
import GoonerImage from '../../images/GoonerRIkcy.png'
import JoelTank from '../../images/JoelTank.png'
import u8CHuy from '../../images/u8CHuy.png'
import PabloMinerals from '../../images/PabloMinerals.png'
import PETERDAYS from '../../images/PETERDAYS.jpg'
import ROACHATA from '../../images/ROACHATA.jpg'
import NateDog from '../../images/NateDog.jpg'

class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    return (
      <div id={image} className="card-header">
        <img src={image} alt="Logoooo"/>
      </div>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    )
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <p className="date">{this.props.signDate}</p>

        <h2>{this.props.title}</h2>

        <p className="body-content">{this.props.text}</p>
        <Button />
      </div>
    )
  }
}

class Card extends React.Component {
  render() {
    return (
      <article className="cardGamer">
        <CardHeader image={this.props.image}/>
        <CardBody signDate={this.props.signDate} title={this.props.title} text={this.props.text}/>
      </article>
    )
  }
}
function Roster() {
  return (
    <div>
      <div className="container main__header-container">
        <Card image={FrannyImg} signDate={"March 20th 2014"} title={"Franny Duran"} text={"one of the great gamers of all time"}/>
        <Card image={GoonerImage} signDate={"March 20th 2014"} title={"Gooner"} text={"Ricardo Calderon is an up and coming Fortnite gamer who is making waves in the gaming community. With his exceptional skills and dedication to the game, Ricardo has quickly gained recognition as a rising talent in the Fortnite scene. Known for his strategic gameplay, lightning-fast reflexes, and remarkable aim, Ricardo showcases an impressive level of proficiency in both solo and team-based game modes. As he continues to hone his skills and compete in various tournaments, all eyes are on Ricardo as he aims to solidify his name among the top Fortnite players in the world. With his passion for the game and unwavering determination, Ricardo Calderon is undoubtedly a force to be reckoned with in the Fortnite gaming sphere."}/>
        <Card image={JoelTank} signDate={"March 20th 2014"} title={"JoelTank"} text={"one of the great gamers of all time"}/>
        <Card image={u8CHuy} signDate={"March 20th 2014"} title={"u8CHuy"} text={"one of the great gamers of all time"}/>
        <Card image={PabloMinerals} signDate={"March 20th 2014"} title={"PabloMinerals"} text={"one of the great gamers of all time"}/>
        <Card image={PETERDAYS} signDate={"March 20th 2014"} title={"PETERDAYS"} text={"one of the great gamers of all time"}/>
        <Card image={ROACHATA} signDate={"March 20th 2014"} title={"ROACHATA"} text={"one of the great gamers of all time"}/>
        <Card image={NateDog} signDate={"March 20th 2014"} title={"NateDog"} text={"one of the great gamers of all time"}/>
      </div>
    </div>
  )
}

export default Roster
