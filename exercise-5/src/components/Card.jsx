export default function Card({props}){
    return(
        <div className="card">
            <img src={props.src} alt="" />
            <h2>{props.name}</h2>
            <h3>{props.role}</h3>
            <h3>Win: {props.win}</h3>
        </div>
    )
}