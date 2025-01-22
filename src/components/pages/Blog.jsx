import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

function Blog() {
    const { data, loading, error } = useFetch("https://rickandmortyapi.com/api/character");

    if (loading) return <div>Cargando...</div>
    if (error) return <div>Error</div>

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