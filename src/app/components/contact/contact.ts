import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  loading = false;

  async sendEmail(event: Event, contactForm: NgForm): Promise<void> {
    event.preventDefault();
    contactForm.form.markAllAsTouched();

    if (this.loading || contactForm.invalid) {
      return;
    }

    const formElement = event.target;
    if (!(formElement instanceof HTMLFormElement)) {
      console.error('No se encontró el formulario HTML para EmailJS.');
      return;
    }

    this.loading = true;

    try {
      const response: EmailJSResponseStatus = await emailjs.sendForm(
        'service_qwkx30r',
        'template_2irepfk',
        formElement,
        { publicKey: '9geAB5989XAnPxVtP' }
      );

      console.info('EmailJS: mensaje aceptado', response.status, response.text);
      contactForm.resetForm();

      void Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado',
        text: 'Gracias por contactarme. Te responderé pronto.',
        confirmButtonColor: '#75162D',
      });
    } catch (error: unknown) {
      const serviceError = error as Partial<EmailJSResponseStatus> | null;
      const status = serviceError?.status;
      const detail = serviceError?.text || 'No fue posible completar el envío.';

      console.error('Error de EmailJS:', { status, detail, error });

      void Swal.fire({
        icon: 'error',
        title: 'No se pudo enviar el mensaje',
        text: status ? `EmailJS respondió con el código ${status}: ${detail}` : detail,
        confirmButtonColor: '#75162D',
      });
    } finally {
      this.loading = false;
    }
  }
}
