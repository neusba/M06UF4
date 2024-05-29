import { Link } from "react-router-dom";



const Card = ({link, text}) => {
    return (
        <>
        <Link to = {link}>{text}</Link>
        </>
    )
}

export default Card;