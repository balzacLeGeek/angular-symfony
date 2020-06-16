

raha mapiasa type na model otran => dataClient : Client[] = [];

d mila return asina an le type n @ url this.http.get<Client[]>('http://127.0.0.1:8000/client');

mila atao ao @ providers n app module.ts n service


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

atao @ app.php n dossier bootstrap ireo header ireo

{# <a name="" id="" class="btn btn-primary" [routerLink]="[ '/path', routeParam ]">New</a> #}

Mba afahana mapiasa formBuilder,d mila importena ao @ module.ts n ReactiveFormsModule

formValue' is declared but its value is never read.
tsy erreur fa miandry ho apesaina ftsn

 let newClient = new Client(
        formValue['nom'],
        formValue['prenom'],
        formValue['contact'],
        formValue['addresse']
    );

<!-- -------------------------------------------------------------- -->

=> Expected 0 arguments, but got 4.

n modele ts mety
export class Client {
    // id ?: number;
    nom : string;
    prenom : string;
    contact : string;
    addresse : string;

    constructor(){}
}

fa tokony atao ao @ constructeur

export class Client {
    // id ?: number;

    constructor(public nom : string,
                public prenom : string,
                public contact : string,
                public addresse : string){}
}

<!-- -------------------------------------------------------------- -->

raha misy erreur n port 80,d service de publication world we wide désactivena


<!-- -------------------------------------------------------------- -->

 <ng-container *ngIf="expression; then thenTemplate; else elseTemplate"></ng-container>
    <ng-template #thenTemplate>
      
    </ng-template>
    <ng-template #elseTemplate>
      
    </ng-template>


    antony tsy mapety n POST s PATCH
    app/http/middleware/verifyCsrfToken/

     protected $except = [
        '/*'
        raha ohatra /addClient

        f raha anatin Api/ l natao resource api
        Route::namespace('Api')->group(
            function(){
                Route::apiResource('client','ClientController');
            }
        );

        d 

        protected $except = [
            'api/*'

    ];





