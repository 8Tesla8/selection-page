import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public listVisability = false;
  public showList(): void {
      this.listVisability = true;
  }
  public hideList(): void {
      this.listVisability = false;
  }
}
