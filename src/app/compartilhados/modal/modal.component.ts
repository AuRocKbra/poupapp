import { Component,viewChild,ElementRef, afterRender, model } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  aberta = model(false);
  modal = viewChild.required<ElementRef<HTMLDialogElement>>('modal');
  constructor(){
    afterRender(() => {
      this.aberta() ? this.modal().nativeElement.showModal() : this.modal().nativeElement.close();
    });
  }

  fecharModal(){
    this.aberta.set(false);
  }
}
