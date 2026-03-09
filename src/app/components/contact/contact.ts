import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact',
  imports: [FormsModule,],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  loading = false;
  sendEmail(event: Event) {
  event.preventDefault();

  if (this.loading) return; // evita doble envío

  this.loading = true;

  const form = event.target as HTMLFormElement;

  emailjs.sendForm(
    'service_qwkx30r',
    'template_2irepfk',
    form,
    '9geAB5989XAnPxVtP'
  ).then(
    (result: EmailJSResponseStatus) => {

      Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado',
        text: 'Gracias por contactarme. Te responderé pronto.',
        confirmButtonColor: '#7B1D26'
      });

      form.reset();
      this.loading = false;

    },
    (error) => {

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo enviar el mensaje.',
        confirmButtonColor: '#7B1D26'
      });

      this.loading = false;
    }
  );
}
}
