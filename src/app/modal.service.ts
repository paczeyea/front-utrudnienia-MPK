import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalSubject = new Subject<{ modalId: string, open: boolean }>();

  modalActions$ = this.modalSubject.asObservable();

  constructor() { }

  openModal(modalId: string): void {
    this.modalSubject.next({ modalId, open: true });
  }

  closeModal(modalId: string): void {
    this.modalSubject.next({ modalId, open: false });
  }
}
