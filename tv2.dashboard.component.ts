import { Component } from '@angular/core';
import {MenubarModule,MenuItem} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';
import {AccountService} from './tv2.dashboard.service'
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {OverlayPanelModule} from 'primeng/primeng';
import {FieldsetModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';

@Component({
  selector: 'tv2-dashboard',
  templateUrl: 'tv2.dashboard.component.html',
  styleUrls: ['tv2.dashboard.component.css']
})
export class Tv2DashboardComponent {
  title = 'Store Vision Teller';
    items: MenuItem[];
   selectedValues: string[] = [];
accounts;
 constructor(private accountService: AccountService) {

 }
  
  display: boolean = false;
  pinSelect:boolean=false;

    showDialog() {
        this.display = true;
    }
msgs = [{severity:'info', summary:'', detail:'PIN updated'}];
pinMsgs = [{severity:'info', summary:'', detail:'Verify that customer knows current PIN and click OK to start PIN Pad'}];

  loadUser() {
   this.accounts= [
      {accountNumber:"8596254125",name:"Wells Fargo Preferred Checking",type:"Checking"},
        {accountNumber:"8596254125",name:"Wells Fargo Preferred Checking",type:"Checking"},
          {accountNumber:"8596254125",name:"Wells Fargo Preferred Checking",type:"Checking"}
       ]
   

  }
ngOnInit() {

this.loadUser();
console.log(this.accounts);
        this.items = [
         
            {
                label: '<u>S</u>elected',
                items: [
                       {label: '<u>S</u>elect PIN'},
                    {label: 'PINPAD View'},
                    {label: 'Reset PINPAD'},
                    {label: 'Express Send '}  
                ]
            },
            {
                label: 'Services',
                items: [
                    {label: 'Select PIN',command: (event) =>{
                    console.log(event.originalEvent);
                    console.log(event.item);
                    this.pinSelect=true;
                }},
                    {label: 'PINPAD View'},
                    {label: 'Reset PINPAD'},
                    {label: 'Express Send '}
                ]
            },
            {
                label: 'Administration',
                items: [
                      {label: 'Select PIN'},
                    {label: 'PINPAD View'},
                    {label: 'Reset PINPAD'},
                    {label: 'Express Send '}
                ]
            },
            {
                label: 'Customer Session',
                items: [
                        {label: 'Select PIN'},
                    {label: 'PINPAD View'},
                    {label: 'Reset PINPAD'},
                    {label: 'Express Send '}
                ]
            },
            {
                label: 'Customer Session',
                items: [
               {label: 'Select PIN'},
                    {label: 'PINPAD View'},
                    {label: 'Reset PINPAD'},
                    {label: 'Express Send '}
                ]
            }
        ];
    }

}
