import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable()
export class ErrorHandlerService {

  constructor() {}

  handleError(error: any): void {
    const message = error.message ? error.message : error.toString();
    if (error.status === 0) {
      swal({title: 'Erro', text: 'Sem comunicação com o servidor. ' + message, type: 'error'});
    } else if (error.status === 422) {
      const errors = error.json();

      let _message = '';

      for (const err of Object.keys(errors)) {
        for (const msg of errors[err]) {
          _message = _message + msg + '<br>';
        }
      }

      swal({title: 'Erro', html: 'Não foi possível concluir a transação. <br>' + _message, type: 'error'});
    } else {
      swal({title: 'Erro', text: 'Não foi possível concluir a transação. ' + message, type: 'error'});
    }
  }


}
