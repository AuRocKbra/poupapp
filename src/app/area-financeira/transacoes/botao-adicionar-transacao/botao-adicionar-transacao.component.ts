import { Component, input, output, signal } from '@angular/core';
import { BotaoComponent } from '../../../compartilhados/botao/botao.component';
import { ModalComponent } from "../../../compartilhados/modal/modal.component";
import {FormsModule} from "@angular/forms";
import { TipoTransacao, Transacao } from '../../compartilhados/transacao.model';
import { KeyValuePipe } from '@angular/common';
import { Conta } from '../../compartilhados/conta.model';


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
  transacaoCriada = output<Transacao>();
  contas = input.required<Conta[]>();
  abrirModal(){
      this.modalAberta.set(true);
      console.log(this.contas())
  }

  aoSubmeter(){
    const novaTransacao = new Transacao(
      this.novaTransacaoForm.nome,
      this.novaTransacaoForm.tipo as TipoTransacao,
      Number(this.novaTransacaoForm.valor),
      this.novaTransacaoForm.data,
      this.novaTransacaoForm.conta
    );
    this.transacaoCriada.emit(novaTransacao);
    this.modalAberta.set(false);
  }
}
