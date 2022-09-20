export const Lista = ({nome, usuario,id, descricao, data_inclusao, palavras_chave}) =>{
    return (
        <div className="Lista">
            <div className="oda">
           <h1> Nome:{nome} </h1>
           <p>Usuario: {usuario} </p>
           <p> Descrição: {descricao} </p>
           <p>Data Inclusão: {data_inclusao} </p>
           <p>Palavra Chave: {palavras_chave} </p>
        </div>
        </div>
    )
}