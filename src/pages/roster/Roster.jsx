import React from 'react'
import './roster.css'
import { Link } from 'react-router-dom';

import FrannyImg from '../../images/Franny.png'
import GoonerImage from '../../images/GoonerRIkcy.png'
import JoelTank from '../../images/JoelTank.png'
import uCHuy from '../../images/u8CHuy.png'
import PabloMinerals from '../../images/PabloMinerals.png'
import PETERDAYS from '../../images/PETERDAYS.jpg'
import ROACHATA from '../../images/ROACHATA.jpg'
import NateDog from '../../images/NateDog.jpg'

class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    return (
      <img src={image} alt="Logoooo" className="card-header"/>
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
    <div className='roster-container'>
      <h1 className='roster-title'>Roster</h1>
      <div className="roster-main__header-container">
        <Link to={`/roster/franny`} className="article-link">
          <Card image={FrannyImg} signDate={"March 20th 2014"} title={"Franny Duran"} text={"one of the great gamers of all time"}/>
        </Link>
        <Link to={`/roster/gooner`} className="article-link">
          <Card image={GoonerImage} signDate={"March 20th 2014"} title={"Gooner"} text={"Ricardo Calderon is an up and coming Fortnite gamer."}/>
        </Link>
          <Link to={`/roster/joel`} className="article-link">
        <Card image={JoelTank} signDate={"March 20th 2014"} title={"Joel Tank"} text={"one of the great gamers of all time"}/>
          </Link>
        <Link to={`/roster/chuy`} className="article-link">
          <Card image={uCHuy} signDate={"March 20th 2014"} title={"u8CHuy"} text={"one of the great gamers of all time"}/>
        </Link>
        <Link to={`/roster/pablo`} className="article-link">
          <Card image={PabloMinerals} signDate={"March 20th 2014"} title={"Pminerals"} text={"one of the great gamers of all time"}/>
        </Link>
        <Link to={`/roster/peter`} className="article-link">
          <Card image={PETERDAYS} signDate={"March 20th 2014"} title={"PETERDAYZ"} text={"one of the great gamers of all time"}/>
        </Link>
        <Link to={`/roster/roach`} className="article-link">
          <Card image={ROACHATA} signDate={"March 20th 2014"} title={"ROACHATA"} text={"one of the great gamers of all time"}/>
        </Link>
        <Link to={`/roster/nate`} className="article-link nateDawg">
          <Card image={NateDog} signDate={"March 20th 2014"} title={"nateDAWG"} text={"one of the great gamers of all time"}/>
        </Link>
      </div>
    </div>
  )
}
// who is making waves in the gaming community. With his exceptional skills and dedication to the game, Ricardo has quickly gained recognition as a rising talent in the Fortnite scene. Known for his strategic gameplay, lightning-fast reflexes, and remarkable aim, Ricardo showcases an impressive level of proficiency in both solo and team-based game modes. As he continues to hone his skills and compete in various tournaments, all eyes are on Ricardo as he aims to solidify his name among the top Fortnite players in the world. With his passion for the game and unwavering determination, Ricardo Calderon is undoubtedly a force to be reckoned with in the Fortnite gaming sphere.
export default Roster
