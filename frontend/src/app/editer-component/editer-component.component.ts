import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-editer-component',
  templateUrl: './editer-component.component.html',
  styleUrls: ['./editer-component.component.css']
})
export class EditerComponentComponent implements OnInit {

  id:any;
  data : any;
  unClient = new Client('','','','');
  dataClient : Client[] = [];

  constructor(private route : ActivatedRoute,private clientService : ClientService,private router : Router) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getListClient();
    this.findOneClient();
  }

  listeClient(){
    // alert('liste du client');
    this.router.navigate(['/liste-client']);
  }

  findOneClient(){
    this.clientService.editerClient(this.id)
        .subscribe( (res) => {
            console.log(res);
            this.data = res;
            this.unClient = this.data;
        })
  }

  getListClient(){
      this.clientService.getListeClients().subscribe( res => this.dataClient = res )
      this.clientService.getListeClients().subscribe( (res) => console.log(res))
  }

  updateClient(){
    this.clientService.updateClient(this.id,this.unClient)
            .subscribe( 
                (data) => {
                  this.getListClient();
                  this.router.navigate(['/liste-client']);
                })
  }
}
