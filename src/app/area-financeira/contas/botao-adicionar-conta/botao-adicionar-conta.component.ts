import { Component, output, signal } from '@angular/core';
import { BotaoComponent } from '../../../compartilhados/botao/botao.component';
import { ModalComponent } from '../../../compartilhados/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { Conta } from '../../compartilhados/conta.model';

@Component({
  selector: 'app-botao-adicionar-conta',
  imports: [BotaoComponent,ModalComponent,FormsModule],
  templateUrl: './botao-adicionar-conta.component.html',
  styleUrl: './botao-adicionar-conta.component.css'
})
export class BotaoAdicionarContaComponent {
  modalAberta = signal(false);
  novaContaForm = {
    nome:'',
    saldoInicial:''
  }
  contaCriada = output<Conta>();
   abrirModal(){
      this.modalAberta.set(true);
  }

  aoSubmeter(){
    const novaConta = new Conta(
      this.novaContaForm.nome,
      Number(this.novaContaForm.saldoInicial)
    );
    this.contaCriada.emit(novaConta);
    this.modalAberta.set(false);
  }
}
