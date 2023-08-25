import { Directive, ElementRef, HostListener } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Directive({
  selector: '[appClickDirective]'
})
export class ClickDirective {
  constructor(private el: ElementRef,private toastr: ToastrService) {}

  @HostListener('click') onClick() {
    // Code to execute when the element is clicked
    this.toastr.error('Please Select Technology and its corresponding Type', 'OOPS');
    // You can perform any other actions or call other methods here
  }
}
