
import {ErrorHandler} from '@angular/core'

export class SystemErrorHandler implements ErrorHandler{

 handleError(error){
   
    console.log("***** SYSTEM ERROR ****");
     if (error instanceof Response) {
       console.log("HTTP ERROR");
      }
     else 
     console.log(error);
   }

 }