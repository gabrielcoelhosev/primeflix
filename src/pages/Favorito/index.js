import { useEffect, useState } from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Favorito(){
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        const minhaLista = localStorage.getItem('@primeflix');
        setFilmes(JSON.parse(minhaLista) || []);


    }, []);

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((item) => {
            //devolve todos os itens que são diferentes do id que foi passado
            return(item.id !== id)
        })

        toast.success("Filme removido com sucésso");

        setFilmes(filtroFilmes);

        //Atualiza a lista de filmes, sem o filme que foi excluído.
        localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes));
    }

    return(
        <div className='meus-filmes'>
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}
            <ul>
                {filmes.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`} className='detalhes'>Ver detalhes</Link>
                                <button onClick={() => excluirFilme(item.id)}>
                                    Excluir
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Favorito;