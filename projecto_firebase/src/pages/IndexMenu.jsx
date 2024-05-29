import Card from '../components/Card'
import './IndexMenu.css'

const IndexMenu = () => {

    return (
        <>
        <div className="linkPelis">
            <Card link="/movies/list" text="Llista de pel·lícules"></Card>
            <Card link="/movies/add" text="Afegir una pel·lícula"></Card>
        </div>
        </>
    )
}

export default IndexMenu;