import { Component, signal } from '@angular/core';
import { BotaoComponent } from '../../../compartilhados/botao/botao.component';
import { ModalComponent } from "../../../compartilhados/modal/modal.component";
import {FormsModule} from "@angular/forms";
import { TipoTransacao } from '../../compartilhados/transacao.model';
import { KeyValuePipe } from '@angular/common';


@Component({
  selector: 'app-botao-adicionar-transacao',
  imports: [BotaoComponent, ModalComponent,FormsModule,KeyValuePipe],
  templateUrl: './botao-adicionar-transacao.component.html',
  styleUrl: './botao-adicionar-transacao.component.css'
})
export class BotaoAdicionarTransacaoComponent {
  modalAberta = signal(false);
  tiposTransacoes = TipoTransacao;
  novaTransacaoForm = {
    nome:'',
    tipo:'',
    valor:'',
    data:'',
    conta:''
  }
  
  abrirModal(){
      this.modalAberta.set(true);
  }

  aoSubmeter(){
    console.log(this.novaTransacaoForm);
  }
}
