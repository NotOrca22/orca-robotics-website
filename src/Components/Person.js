const Person = ({name, desc, pic}) => {
    return (
        <div class="memberCard">
            <div class="info">
                <h1>{name}</h1>
                <p>{desc}</p>
            </div>
            <div>
                <img class="image" src={pic}></img>
            </div>
        </div>
    )
}

export default Person