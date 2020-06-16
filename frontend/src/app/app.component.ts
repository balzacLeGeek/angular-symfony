import { Component, OnInit, Compiler } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  

  title = 'apiAngularLaravel';

  constructor(private _compiler: Compiler){}

  ngOnInit() {
    this._compiler.clearCache();
  }


}
