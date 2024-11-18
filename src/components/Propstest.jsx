function Propstest(props) {
    const handleClick = () => {
        alert('Alert')
    }
    return(
        <>
            <h1>Hello {props.name}</h1>
            <button onClick={handleClick}>
                Button
            </button>
        </>
    )
}

export default Propstest;