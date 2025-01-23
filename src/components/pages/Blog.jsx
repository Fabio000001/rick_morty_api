import { useFetch } from '../../hooks/useFetch';
import { Link, useSearchParams } from 'react-router-dom';

function Blog() {
    let [searchParams, setSearchParams] = useSearchParams();
    const { data, loading, error } = useFetch("https://rickandmortyapi.com/api/character");

    const handleChange = (e) => {
        setSearchParams({ [e.target.name]: e.target.value });
    };

    if (loading) return (<h1>Buscando la dimensión adecuada...</h1>);
    if (error) return (<h1>La pistola de portales no funciona...</h1>);

    return (
        <>
            <h1>Blog - Elige un personaje</h1>
            <input type="text" name="filter" onChange={handleChange} className="form-control my-3" alt='Buscador' value={searchParams.get("filter") || ""}></input>
            <ul className="list-group">
                {
                    data.results.filter(item => item.name.includes(searchParams.get("filter") || ""))
                        .map(item => {
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