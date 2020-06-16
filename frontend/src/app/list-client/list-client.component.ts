import { Component, OnInit, Compiler } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  dataClient : Client[] = [];

  constructor(private clientService : ClientService,private routerAppli : Router) { }

  ngOnInit() {
      this.getListClient();
  }

  getListClient(){
      this.clientService.getListeClients().subscribe( res => this.dataClient = res )
      this.clientService.getListeClients().subscribe( (res) => console.log(res))
  }

  addClient(){
    // alert('page ajout');
    this.routerAppli.navigate(['/ajout-client']);
  }

  listeClient(){
    this.routerAppli.navigate(['/liste-client']);
  }

  deleteClient(id:number){
      // c : variable nforoporonina
      // dataClient tableau liste client
      // console.log(id);
      // alert('supprimer');

      this.clientService.deleteClient(id)
        .subscribe( (res) => {
          this.getListClient();
        })

      // this.clientService.deleteClient(id)
      //   .subscribe( (res) => {
      //     this.routerAppli.navigate(['/liste-client']);
      //   })
      
      // this.clientService.deleteClient(id);
      // const item = this.dataClient.find( elt => elt.id === id);
      // this.dataClient.splice(this.dataClient.indexOf(item));

      // this.clientService.deleteClient(id).subscribe(
      //   () => { this.dataClient.splice(index,1); }
      // )

  }

  

}
