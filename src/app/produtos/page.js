import styles from './page.module.css';

// import { useState } from "react";
// Crie um componente chamado Produtos que possua o seguinte array:
// Os dados devem ser exibidos dentro de uma tabela.
// A tabela deve conter um <thead> com os títulos das colunas:ID,  Produto e Preço.
// Cada produto deve aparecer em uma linha (<tr>) dentro do <tbody>.
// O id deve estar dentro de uma célula <td>, onome deve estar dentro de outra célula <td> e o preço em outra <td>, com o formato R$ valor (utilize o toLocaleString para formatar).

export default function Produtos() {
    const produtos = [
        { id: 1, nome: "Notebook", preco: 4500 },
        { id: 2, nome: "Mouse", preco: 80 },
        { id: 3, nome: "Teclado", preco: 150 },
        { id: 4, nome: "Monitor", preco: 1200 },
        { id: 5, nome: "Impressora", preco: 900 },
        { id: 6, nome: "Cadeira Gamer", preco: 1800 },
        { id: 7, nome: "Headset", preco: 300 },
        { id: 8, nome: "Webcam", preco: 600 },
        { id: 9, nome: "HD Externo", preco: 400 },
        { id: 10, nome: "Mesa Digitalizadora", preco: 750 }
    ];
    return (
        <div>
            <h1>Lista de Produtos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                {/* crie o cabeçalho da tabela */}
                <tbody>
                    {produtos.map(p => (
                        <tr key=""></tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}