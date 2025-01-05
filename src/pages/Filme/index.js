import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

function Filme(){
    const {id} = useParams();
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
            
            })
        }

        loadFilme();

        return () => {
            console.log('Componente desmontado');
        }
    }, [])

    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando filme...</h1>
            </div>
        );
    }

    return(
        <div className='filme-info'>
            <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title} />
        </div>
    );
}

export default Filme;