import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import useClientes from "../hooks/useClientes"

export default function Home() {

  const { selecionarCliente, excluirCliente, cliente, clientes, novoCliente, salvarCliente, tabelaVisivel, exibirTabela} = useClientes()

  return (
    <div className="flex h-screen justify-center items-center text-white">
      <Layout titulo="Cadastro simples">
        {tabelaVisivel ? (
          <>
            <div className={`flex justify-end`}>
              <Botao className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente}></Tabela>
          </>
        ) : (
          <Formulario clienteMudou={salvarCliente} cliente={cliente} cancelado={() => exibirTabela}></Formulario>
        )}
      </Layout>
    </div>
  )
}
