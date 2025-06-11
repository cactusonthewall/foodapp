import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../foodservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pastadetail',
  templateUrl: './pastadetail.page.html',
  styleUrls: ['./pastadetail.page.scss'],
  standalone:false
})
export class PastadetailPage implements OnInit {
  index=0

  //pastas:any[] = [];
  pastas:any ={}
  pastas_id=0;
  new_step=0;
  new_instruction="";
  public alertButtons = ['OK']

  constructor(private route: ActivatedRoute, 
              private fs:FoodService, private router: Router,

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       //this.index = params['index'];
       this.fs.pastaDetail(params['id']).subscribe(
        (data)=> {
         this.pastas=data;
         this.pastas_id = this.pastas.id;
        }
       );
     });
  }  
  deletepasta(id:any) {
   this.fs.deletePasta(id).subscribe((response: any) => {
      if(response.result==='success'){
        alert("success")
        this.router.navigate(['/pasta']) 
      }
      else {
        alert(response.message)
      }
  });
}
addInstruction(){
  this.fs.addInstruction(this.pastas_id, this.new_step,            
          this.new_instruction).subscribe((response: any) => {
            if(response.result==='success'){
              alert("success")
              this.pastas.instructions.push({
              step: this.new_step,
              instruction: this.new_instruction
              });
            }

            else
            {
              alert(response.message)
            }
      });
    }
}