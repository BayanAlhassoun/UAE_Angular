import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

//   id: number = 1
//   name: string = "Bayan Alhassoun"
//   city: string = "Amman"
 
//   imageName = "https://cdn.shopify.com/s/files/1/1634/9541/files/Lavender_079d15dd-5740-4434-bf4f-51f467abf2c5_1024x1024.png?v=1646353494"

//   ChangeImage()
//   {
//     this.imageName = "https://res.cloudinary.com/dragonspell/images/w_1440,h_864,c_fill,dpr_auto,fl_progressive:steep,f_auto/w_1440,h_864/v1571420381/www.travelportland.com/13957657505_360e25cb5a_k/13957657505_360e25cb5a_k.jpg"
//   }
//  val: string = "Abdullah"
//   toUpper(event: any)
//   {
//     console.log(event);
//     this.val = `"${event.target.value}"`
//   }

//   ChangeVal(event: any){
// this.val = event.target.value
//   }

flag : boolean = false

s =     {
  firstName : "Abdullah",
  lastName: "Mohammad",
  courses: ["C#"],
  gender: "male",
  isPassed : true
}

Person = [
  {
    name: "Bayan Alhassoun",
    Address: ["Amman", "Irbid"],
    Meals: []
  }
]

Students = [
  {
    firstName : "Bayan",
    lastName: "Alhassoun",
    courses: ["C#", "API", "Angular"],
    gender: "female",
    isPassed : true
  },

  {
    firstName : "Abdullah",
    lastName: "Mohammad",
    courses: ["C#"],
    gender: "male",
    isPassed : true
  },

  {
    firstName : "Mohammad",
    lastName: "Alarabid",
    courses: ["C++", "API"],
    gender: "male",
    isPassed : false
  },

  {
    firstName : "Salem",
    lastName: "Omar",
    courses: ["C#", "API", "Angular", "HTML"],
    gender: "male",
    isPassed : false
  },

  {
    firstName : "Yousef",
    lastName: "Omar",
    courses: ["C#", "HTML"],
    gender: "male",
    isPassed : false
  },

  {
    firstName : "Yousef",
    lastName: "Omar",
    courses: ["C#", "HTML"],
    gender: "male",
    isPassed : false
  }

]

fontSize = 20
isStudent:string = "";

}

 