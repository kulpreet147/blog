function Child(props) {
    let data = "Kulpreet Singh"
    return(
        <div>
            <h1>Child Component</h1>
            <h1>User name is {props.name}</h1>
            <button onClick={() => props.alert(data)}>Click me</button>
        </div>
    )

}

export default Child;