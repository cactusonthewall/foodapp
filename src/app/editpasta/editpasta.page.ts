import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../foodservice.service';

@Component({
  selector: 'app-editpasta',
  templateUrl: './editpasta.page.html',
  styleUrls: ['./editpasta.page.scss'],
  standalone:false
})
export class EditpastaPage implements OnInit {

  constructor(private route: ActivatedRoute, private fs: FoodService, private router: Router) { }
  id:number=0
  e_name=""
  e_desc=""
  e_price=0
  e_url=""


  ngOnInit() {
  this.route.params.subscribe(params => {
     this.id = params['id']; 
     this.fs.pastaDetail(params['id']).subscribe(
       (data)=> {
          this.e_name=data.name;
          this.e_desc=data.description;
          this.e_price=data.price;
          this.e_url=data.url;
       }
      );
    });
  }

    updatepasta() {
    this.fs.updatePasta(
     this.id,this.e_name,this.e_url,this.e_desc,this.e_price).subscribe(
      (response: any) => {
         if(response.result==='success'){
         alert("success")
         this.router.navigate(['/pasta'])
      }
      else
      {
         alert(response.message)
      }
  });
}

}
