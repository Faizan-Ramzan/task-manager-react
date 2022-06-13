import Button from './Button'

const Header = (props) => {

    const onClick = (e) => {
        console.log("Click");
    }

    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button color="green" text="Add" onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}

export default Header