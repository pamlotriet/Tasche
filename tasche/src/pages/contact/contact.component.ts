import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  email:any;
  message:any;
  name:any;
  spinner:boolean = false;

  ngOnInit(): void {
  }

  sendEmail() {
    this.spinner = true;
    const templateParams = {
      email: this.email,
      name: this.name, 
      message: this.message
    };

    emailjs.send('service_ff3ffiu', 'template_kg1bua6', templateParams, 'user_kig9hwNSt8MhkuitTcb50')
      .then((response: EmailJSResponseStatus) => {
        this.spinner = false;
      }, (error) => {
        console.error('Error sending email', error);
        // Add any error handling code here
      });

    // Clear the form fields after sending the email
    this.email = '';
    this.message = '';
    this.name = '';
  }
}
