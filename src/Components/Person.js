const Person = ({name, desc, pic}) => {
    return (
        <div className="memberCard">
            <div className="info">
                <h1>{name}</h1>
                <p>{desc}</p>
            </div>
            <div>
                <img className="imagee" alt="" src={pic}></img>
            </div>
        </div>
    )
}

export default Person