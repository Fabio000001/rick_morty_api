import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const BlogCharacter = () => {
    const params = useParams();
    const url = `https://rickandmortyapi.com/api/character/${params.id}`;
    const { data, loading, error } = useFetch(url);

    if (loading) return (<h1>Buscando en el multiverso...</h1>);
    if (error) return (<h1>Ese personaje ya no existe...</h1>);

    return (
        <div className="card">
            <img src={data.image} className="card-img-top" alt={data.name} />
            <div className="card-body">
                <h4 className="card-title">{data.name}</h4>
                <p className="card-text">{data.status === 'Alive' ? (
                    <> Alive </>
                ) : (
                    <> Dead </>
                )}
                </p>
                <p className="card-text">
                    <span className="text-grey">Episodes: </span>
                    <span>{data.episode.length}</span>
                </p>
                <p className="card-text">
                    <span className="text-grey">Species: </span>
                    <span>{data.species}</span>
                </p>
            </div>
            <div className="card-footer"><Link className="btn btn-outline-primary" to="/blog">Volver</Link></div>
        </div>
    );
}

export default BlogCharacter;