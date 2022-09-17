import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-buscar-cliente',
  templateUrl: './dialog-buscar-cliente.component.html',
  styleUrls: ['./dialog-buscar-cliente.component.css']
})
export class DialogBuscarClienteComponent implements OnInit {

  myControl = new FormControl('');

  constructor( public dialogRef: MatDialogRef<DialogBuscarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public options: string[] = ['One', 'Two', 'Three']) { }

  ngOnInit(): void {
  }

}
