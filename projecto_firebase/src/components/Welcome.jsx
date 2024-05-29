import IndexMenu from "../pages/IndexMenu"

const Welcome = (props) => {
    const { username } = props;

    return (
        <div>
            <h1> Hola, {username} !</h1>
            <p> Pel·licules per a l'estiu </p>
            <IndexMenu></IndexMenu>
        </div>
    );
};

export default Welcome;