import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ocrImage = '';
  Tesseract!: any;
  result = 'Recognizing... ';

  constructor() {
    this.test();
  }


  test() {
    this.Tesseract.recognize(this.ocrImage).then(function(result: any) {
      alert(result.text);
    });
  }
}
