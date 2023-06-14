import React from 'react'
import './roster.css'

import FrannyImg from '../../images/Franny.png'
import GoonerImage from '../../images/GoonerRIkcy.png'
import JoelTank from '../../images/JoelTank.png'
import NateDog from '../../images/NateDog.jpg'
import PabloMinerals from '../../images/PabloMinerals.png'
import PETERDAYS from '../../images/PETERDAYS.jpg'
import ROACHATA from '../../images/ROACHATA.jpg'
import u8CHuy from '../../images/u8CHuy.png'

class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = { 
        backgroundImage: 'url(' + "../images/Franny.png" + ')',
    };
    return (
      <header style={style} id={image} className="card-header">
        <h4 className="card-header--title">News</h4>
        <img src={FrannyImg} alt="Logo" />
      </header>
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
        <CardHeader image=''/>
        <CardBody signDate={"March 20 2015"} title={'Ronky Kong'} text={'Ronky Is one of the greatest smash players in Coachella Valley Scene'}/>
      </article>
    )
  }
}
function Roster() {
  return (
    <div>
      <div className="container main__header-container">
      <div className="container main__header-container">
        </div>
          <h4>#GetGooeyWithIt</h4>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Roster