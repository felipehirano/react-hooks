import React, { useState, useEffect } from 'react';

export default function useEffectDidMountHook() {

    const [repositories, setRepositories] = useState([]);

    // useEffect recebe 2 parâmetros, o primeiro é o corpo dele e o segundo são as variáveis que quando alteradas chamam o corpo dela.
    // como aqui é para testar o didMount, então o segundo parâmetro fica vazio, pois será executado, apenas 1 vez.

    useEffect(async() => {
        const response = await fetch('https://api.github.com/users/felipehirano/repos');
        const data = await response.json();

        setRepositories(data);

    }, [])

    return(
        <>
            <ul>
                {
                    repositories.map( repo => (
                        <li key={repo.id}>{repo.name}</li>
                    ))
                }
            </ul>
        </>
    )
}