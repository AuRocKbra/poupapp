import { Component, input } from '@angular/core';
import { TransacaoComponent } from "./transacao/transacao.component";
import { Transacao } from '../compartilhados/transacao.model';
import { BotaoComponent } from "../../compartilhados/botao/botao.component";
import { CardComponent } from '../compartilhados/card/card.component';

@Component({
  selector: 'app-transacoes',
  imports: [TransacaoComponent, BotaoComponent,CardComponent],
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.css'
})
export class TransacoesComponent {
  tituloTransacoes:string = "Movimentação financeira";
  transacoes = input.required<Transacao[]>();
}
