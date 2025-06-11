import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  /*
  pastas = [
    {
      name: "SHRIMP SCAMPI",
      url: "https://www.unos.com/images/menus/pasta/Pasta_ShrimpScampi_8-20_300.jpg",
      description: "Shrimp sautéed with garlic, diced tomatoes and basil in a white wine sauce on vermicelli with parmesan",
      price: 42000,
      spicy: false
    },
    {
      name: "CHICKEN SPINOCCOLI",
      url: "https://www.unos.com/images/menus/pasta/Pasta_ChickenSpinoccoli_8-20_300.jpg",
      description: "Housemade chicken roulade filled with mozzarella, feta, broccoli, spinach, tomatoes, garlic and basil...",
      price: 35000,
      spicy: true
    },
    {
      name: "CHICKEN & BROCCOLI ALFREDO",
      url: "https://www.unos.com/images/menus/whatsnew/CHICKEN_BROCCOLI_ALFREDO.png",
      description: "Cavatappi, chicken and broccoli tossed in alfredo sauce topped with parmesan cheese.",
      price: 38000,
      spicy:true
    },
    {
      name: "DEEP DISH MAC & CHEESE",
      url: "https://www.unos.com/images/menus/pasta/Pasta_MacCheese_8-20_300.jpg",
      description: "Cheesy goodness penne with aged cheddar and parmesan baked in a deep dish pan.",
      price: 42000,
      spicy: true
    },
    {
      name: "RATTLESNAKE PASTA",
      url: "https://www.unos.com/images/menus/pasta/Pasta_Rattlesnake_8-20_300.jpg",
      description: "Sautéed chicken and spicy alfredo tossed with penne pasta and topped with cheddar and jalapeño.",
      price: 36000,
      spicy:false
    }
  ];
*/
  constructor(private http: HttpClient) {}

  pastaList(search?:string):Observable<any> {
    return this.http.get("https://ubaya.xyz/hybrid/160422151/pastas.php?search="+search);
   }

   pastaDetail(id:number):Observable<any> {
    return this.http.get("https://ubaya.xyz/hybrid/160422151/pastadetail.php?id="+id);
  }
  
  
  // getPastaByIndex(index: number) {
  //   return this.pastas[index];
  // }

  // getAllPastas() {
  //   return this.pastas;
  // }

  // addPasta(p_name:string,p_url:string,p_description:string,p_price:number, p_spicy:boolean)
  // {
  //   this.pastas.push({name:p_name, url:p_url,
  //   description:p_description,price:p_price, spicy:p_spicy})
  // }

  addPasta(p_name:string,p_url:string,p_description:string,p_price:number)
{
   //this.pastas.push({name:p_name,url:p_url,description:p_description,price:p_price})
   const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
   const body = new URLSearchParams();
   body.set('name', p_name);
   body.set('desc', p_description);
   body.set('url', p_url);
   body.set('price', p_price.toString());
   const urlEncodedData = body.toString();
   return this.http.post(
	"https://ubaya.xyz/hybrid/160422151/new_pasta.php", urlEncodedData, { headers });
}


updatePasta(p_id:number,p_name:string,p_url:string,p_description:string,p_price:number)
{
  const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const body = new URLSearchParams();
  body.set('id', p_id.toString());
  body.set('name', p_name);
  body.set('desc', p_description);
  body.set('url', p_url);
  body.set('price', p_price.toString());
  const urlEncodedData = body.toString();

  return this.http.post("https://ubaya.xyz/hybrid/160422151/update_pasta.php", urlEncodedData, { headers });
}
deletePasta(p_id:number)
{
  const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const body = new URLSearchParams();
  body.set('id', p_id.toString()); const urlEncodedData = body.toString();
  
  return this.http.post("https://ubaya.xyz/hybrid/160422151/delete_pasta.php", urlEncodedData, { headers });
}

addInstruction(i_id: number, i_step: number, i_instruction: string){
  const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
   const body = new URLSearchParams();
   body.set('pasta_id', i_id.toString());
   body.set('step', i_step.toString());
   body.set('instruction', i_instruction);
   const urlEncodedData = body.toString();
   return this.http.post(
	"https://ubaya.xyz/hybrid/160422151/new_instruction.php", urlEncodedData, { headers });
}
}