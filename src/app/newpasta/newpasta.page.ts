import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { FoodService } from '../foodservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-pasta',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './newpasta.page.html',
  styleUrls: ['./newpasta.page.scss'],
})

export class NewPastaPage {
  new_name = "";
  new_desc = "";
  new_price= 0;
  new_url = "";
  new_spicy = false;
  arr_price:number[] = [];
  public alertButtons = ['OK']

  constructor(private foodService: FoodService, private router: Router){
    
  }
  ngOnInit() {
    this.arr_price=this.generateNumberOptions(30000,50000,2000)
    }
    
    generateNumberOptions(start: number, end: number, step: number): number[] {
        const options: number[] = [];
        for (let i = start; i <= end; i += step) {
          options.push(i);
        }
        return options;
    }
    

    // submitpasta()
    // {
    //   //this.foodService.addPasta(this.new_name,this.new_url,this.new_desc,this.new_price, this.new_spicy);
    //   this.router.navigate(['/pasta']);
    // }

    submitpasta()
    {
      this.foodService.addPasta(this.new_name,            
          this.new_url,this.new_desc,this.new_price).subscribe((response: any) => {
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