import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  dataClient : Client[] = [];

  constructor(private router : Router,private formBuilder : FormBuilder,private clientService : ClientService) { }

  clientForm : FormGroup;

  ngOnInit() {
    this.validationForm();
  }

  validationForm(){
    this.clientForm = this.formBuilder.group({
      nom : ['',Validators.required],
      prenom : ['',Validators.required],
      contact : ['',Validators.required],
      addresse : ['',Validators.required],
    });
  }

  listeClient(){
    // alert('liste du client');
    this.router.navigate(['/liste-client']);
  }

  // methode reactive
  onSubmitAddForm(){
    // alert('submit');
    // this.clientService.createClient();
    
    // formValue : valeur du formulaire recupéré grâce à formControlName
    let formValue = this.clientForm.value;

    let newClient = new Client(
        formValue['nom'],
        formValue['prenom'],
        formValue['contact'],
        formValue['addresse']
    );

    // alert(newClient);
    // object²
    console.log(newClient);
    // affiche tous les saisis

     // -----------------------------------------------------------------------

     this.clientService.createClient(newClient)
         .subscribe( 
            (data) => { 
              this.router.navigate(['/liste-client']) 
          })

    // -----------------------------------------------------------------------

    // this.clientService.createClient(newClient).then( () => alert('connexion') ).catch(error => alert('erreur'))

  }

  // -----------------------------------------------------------

}
