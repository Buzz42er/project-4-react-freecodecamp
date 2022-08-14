import React from "react"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    /*
    Challenge:
    1. Display the correct text in the badge based on the logic above
    2. Only display the badge if badgeText has a value
    */
    
    return (

        //if card={card}
        // <div className="card">
        //     {badgeText && <div className="cardBadge">{badgeText}</div>}
        //     <img src={require(`../images/${props.card.coverImg}`)} className="card--image"  alt=""/>
        //     <div className="card--stats">
        //         <img src={require("../images/star.png")} className="card--star" alt="" />
        //         <span>{props.card.stats.rating}</span>
        //         <span className="gray">({props.card.stats.reviewCount}) • </span>
        //         <span className="gray">{props.card.location}</span>
        //     </div>
        //     <p className="card--title">{props.card.title}</p>
        //     <p className="card--price"><span className="bold">From ${props.card.price}</span> / person</p>
        // </div>

        //if {...card}
        <div className="card">
            {badgeText && <div className="cardBadge">{badgeText}</div>}
            <img src={require(`../images/${props.coverImg}`)} className="card--image"  alt=""/>
            <div className="card--stats">
                <img src={require("../images/star.png")} className="card--star" alt="" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>

    )
}