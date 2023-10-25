import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'css_design';

    accordianItems = ['Purchasing Process?', 'How secure are your payment information?', 'How to apply for a prepaid Card?', 'How secure is my data in app?', 'How do i know of I have latest version?', 'Download offline documentation?']
  activeAccordianIndex = -1
  Getting: string[] = ['Getting Started'    ]
  Pricing:string[]=['Pricing & Plans']
  sales:string[]=['Sales Question']
  Usage:string[]=['Usage Guides']
  inform:string[]=['Inform']


  Purchasing:string[]=['Purchasing Process?']
  setActiveAccordian(index: number) {
    this.activeAccordianIndex = this.activeAccordianIndex === index ? -1 : index
  }

}

