import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

function Blog() {
    const { data, loading, error } = useFetch("https://rickandmortyapi.com/api/character");

    if (loading) return (<h1>Buscando la dimensión adecuada...</h1>);
    if (error) return (<h1>La pistola de portales no funciona...</h1>);

    return (
        <>
            <h1>Blog - Elige un personaje</h1>
            <ul className="list-group">
                {
                    data.results.map(item => {
                        return (
                            <Link key={item.id} to={`/blog/${item.id}`}>{item.name}</Link>
                        );
                    })
                }
            </ul>
        </>
    );
}

export default Blog;