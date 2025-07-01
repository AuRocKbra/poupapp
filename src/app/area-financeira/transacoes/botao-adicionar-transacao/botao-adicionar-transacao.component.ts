import { Component, signal } from '@angular/core';
import { BotaoComponent } from '../../../compartilhados/botao/botao.component';
import { ModalComponent } from "../../../compartilhados/modal/modal.component";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-botao-adicionar-transacao',
  imports: [BotaoComponent, ModalComponent,FormsModule],
  templateUrl: './botao-adicionar-transacao.component.html',
  styleUrl: './botao-adicionar-transacao.component.css'
})
export class BotaoAdicionarTransacaoComponent {
  modalAberta = signal(false);
  
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
    console.log();
  }
}
