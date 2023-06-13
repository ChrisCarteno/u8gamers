import React from 'react'

import './roster.css'

class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="card-header">
        <h4 className="card-header--title">News</h4>
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
        <CardHeader image={''}/>
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