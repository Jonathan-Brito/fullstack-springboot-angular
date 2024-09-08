import { Cliente } from './../modelo/Cliente';
import { Component } from '@angular/core';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  // Objeto do tipo Cliente
  cliente = new Cliente();

  // Variável para visíbilidade dos botões
  btnCadastro:boolean = true;

  // Variável para visibilidade dos botões
  tabela:boolean = true;

  // JSON de clientes
  clientes:Cliente [] = [];

  // Construtor
  constructor(private servico:ClienteService){}

  // Método de seleção
  selecionar():void{
    this.servico.selecionar()
    .subscribe(retornoLista => this.clientes = retornoLista);
  }

  // Método de cadastro
  cadastrar():void{
    this.servico.cadastrar(this.cliente)
    .subscribe(retorno => {

      // Cadastrar o cliente no vetor
      this.clientes.push(retorno);

      // Limpar formulário
      this.cliente = new Cliente();

      // Mensagem
      alert('Cliente cadastrado com sucesso!');
    });
  }

  // Método paa selecionar um cliente em específico
  selecionarCliente(posicao:number):void{

    // Selecionar cliente no vetor
    this.cliente = this.clientes[posicao];

    // Visibilidade dos botões
    this.btnCadastro = false;

    // Visibilidade da tabela
    this.tabela = false;

  }

  // Método de inicialização
  ngOnInit(){
    this.selecionar();
  }

}
