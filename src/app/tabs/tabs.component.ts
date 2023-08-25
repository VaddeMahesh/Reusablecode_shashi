import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }
  tabCount: number = 5;

  // Replace this with the actual DataSharingService implementation


  generateTabHeaders(): string[] {
    // Get the tab count from the DataSharingService


    // Generate an array of tab header strings
    return Array.from({ length: this.tabCount }, (_, index) => `Tab ${index + 1}`);
  }
}
