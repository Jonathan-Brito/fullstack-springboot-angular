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

  // JSON de clientes
  clientes:Cliente [] = [];

  // Construtor
  constructor(private servico:ClienteService){}

  // Método de seleção
  selecionar():void{
    this.servico.selecionar()
    .subscribe(retornoLista => this.clientes = retornoLista);
  }

  // Método de inicialização
  ngOnInit(){
    this.selecionar();
  }

}
