import { Component, OnInit } from '@angular/core';
import { FoodService } from '../foodservice.service';
@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.page.html',
  styleUrls: ['./pasta.page.scss'],
  standalone: false,
})
export class PastaPage implements OnInit {
  jenistampilan="accordion"
  pastas:any[]=[]
  search=""
    
    chunkArray(arr: any[], chunkSize: number): any[][] {
      const result = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize));
      }
      return result;
    }
    
  constructor(private fs:FoodService) { }

  ngOnInit() {
    //this.pastas=this.foodservice.pastas
     this.getData();
   }
   getData(){
    this.fs.pastaList(this.search).subscribe(
      (data)=> {
          this.pastas=data;
        }
     );
   }

   ionViewWillEnter() {
    this.getData();
  }

}
