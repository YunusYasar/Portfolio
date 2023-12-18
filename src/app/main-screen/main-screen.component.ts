import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
   selector: 'app-main-screen',
   templateUrl: './main-screen.component.html',
   styleUrls: ['./main-screen.component.scss'],
})
export class MainScreenComponent {
   showModal = false;

   toggleModal() {
      this.showModal = !this.showModal;
   }
}