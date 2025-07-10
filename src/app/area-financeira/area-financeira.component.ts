import { Component, computed, signal } from '@angular/core';
import { SaldoComponent } from "./saldo/saldo.component";
import { TransacoesComponent } from "./transacoes/transacoes.component";
import { ContasComponent } from "./contas/contas.component";
import { Conta } from './compartilhados/conta.model';
import { Transacao, TipoTransacao } from './compartilhados/transacao.model';

@Component({
  selector: 'app-area-financeira',
  imports: [SaldoComponent, TransacoesComponent, ContasComponent],
  templateUrl: './area-financeira.component.html',
  styleUrl: './area-financeira.component.css'
})
export class AreaFinanceiraComponent {
  saldo = 0;

  transacoes = signal<Transacao[]>([]);

  contasComSaldoInicial = signal<Conta[]>([]);

  contas = computed(()=>{
    return this.contasComSaldoInicial().map((conta)=>{
      const saldoAtualizado = this.calculaSaldoAtualizado(conta);
      return {...conta,saldo:saldoAtualizado};
    });
  });

  calculaSaldoAtualizado(conta:Conta){
    return conta.saldo + 20;
  }

  processarTransacao(transacao:Transacao){
    this.transacoes.update((transacoes)=>[transacao,...transacoes]);
  }

  processarConta(conta:Conta){
    this.contasComSaldoInicial.update((contas)=>[...contas,conta]);
  }
}
