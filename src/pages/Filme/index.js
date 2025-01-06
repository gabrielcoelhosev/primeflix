import {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './filme-info.css';

import api from '../../services/api';

function Filme(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: 'bd41cb06251ca2044a09c7f1238d37fc',
                    language: 'pt-BR'
                }
            })
            .then((response) =>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(() => {
                navigate('/', { replace: true});
            })
        }

        loadFilme();

        return () => {
            console.log('Componente desmontado');
        }
    }, [navigate, id]);

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeflix");

        let filmesSalvos = JSON.parse(minhaLista) || [];
    

        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);

        if(hasFilme){
            alert('Você já possui esse filme salvo');
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        alert("Filme salvo com sucesso!"); 
    }

    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando filme...</h1>
            </div>
        );
    }

    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10 </strong>

            <div className='area-buttons'>
                <button onClick={salvarFilme}>Salvar</button>
                <button><a target='black' rel='external' href={`https://youtube.com/results?search_querry=${filme.title} Trailer`}>Trailer</a></button>
            </div>

        </div>
    );
}

export default Filme;