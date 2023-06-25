const LogOut = ({hidden}) => {
    return(<h1 className={`${hidden ? 'noOverflow' : ''}`}>You have successfully logged out.</h1>)
}

export default LogOut;