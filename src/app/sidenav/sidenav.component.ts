import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiserviceService } from '../apiservice.service';
import 'bootstrap';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  currentContent: any;
  isLoading: boolean = true;
  dummyData: any[] = [];
  employees: any = [];

  filteredEmployees: any[] = [];
  wriewrigewir: any;
  tooltipText = 'This is a tooltip!';

  constructor(private apiService: ApiserviceService, private spinner: NgxSpinnerService,) { }

  ngOnInit(): void {
    this.loadData();
    (function ($) {
      "use strict";
      var fullHeight = function () {

        $(window).resize(function () {

        });
      };
      fullHeight();
      $("#sidebarCollapse").on("click", function () {
        $("#sidebar").toggleClass("active");
      });
    })(jQuery);
    $(document).ready(function () {
      $("a[data-target]").click(function (event) {
        event.preventDefault();
        var target = $(this).data("target");
        $(".content-section").hide();
        $(target).show();
      });

      // Show the default content when the page loads
      $("#About").show();


    });

  }

  loadData() {
    this.isLoading = true;
    this.spinner.show();
    // Simulate an API call delay of 2 seconds
    this.apiService.getEmployees().subscribe((response: any) => {
      this.filteredEmployees = response;
      this.isLoading = false;
      this.spinner.hide(); // Hide the spinner when loading is complete

    }
    )
  }
}
