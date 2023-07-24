import { Component } from '@angular/core';
//import { copyFile } from 'node:fs/promises';
//import { promises as fs } from 'fs'
//import * as fs from 'fs';
//import { copyFile  } from 'fs';

import { copyFile } from 'fs';


@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.scss']
})
export class AddproductsComponent {


   productInfo:any[]=[{
    id:1,
    name: 'Smart Bag',
    description: 'Smart Laptop Bag',
    Qty:200,
    avalilabelty: true,
    color:'Black',
    value:1500,
    
  },
  {
    id:2,
    name: 'Smart Bottle',
    description: 'Smart Water Bottle',
    Qty:500,
    avalilabelty: true,
    color:'White',
    value:500,
    
  },
]

addNewRow(){
  let dataa ={
    id:this.productInfo.length+1,
    name: 'Smart Cup',
    description: 'Smart Coffee Cup',
    Qty:500,
    avalilabelty: true,
    color:'White',
    value:500,
    
    

  }
console.log("Test")
  this.productInfo.push(dataa)

}
  async uploadImage(event:any){
  console.log("test12345")
 var selecetdFile : File;
  var imagePreview: any;
  //var require: any;
  selecetdFile=event.target.files[0]
 // console.log(selecetdFile.name);
 
 const fs= require('fs');
//   try {
//   fs.copyFile(selecetdFile.name, "../assets/img/products/"+selecetdFile.name);
//   console.log('source.txt was copied to destination.txt');
// } catch {
//   console.error('The file could not be copied');
// }
//  fs.copyFile(selecetdFile.name, selecetdFile.name, (err:any) => {
   
//  console.log("test");
//  console.log(err)


//   })

}
}
