export async function buscarPessoas(setPessoas) {
    try{
        const response = await fetch('/api/pessoas');
        if (!response.ok) {
            throw new Error('Falha em buscar pessoas');
        }
        const pessoas = await response.json();
        setPessoas(pessoas);
    }catch (e) {
        console.error('Erro ao buscar pessoas', e);
    }
}