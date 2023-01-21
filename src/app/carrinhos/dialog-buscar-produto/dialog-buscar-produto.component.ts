import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { IProduct } from 'src/app/services/interfaces/IProduct';
import { ProductRepositoryService } from 'src/app/services/repositories/products/product-repository.service';

@Component({
  selector: 'app-dialog-buscar-produto',
  templateUrl: './dialog-buscar-produto.component.html',
  styleUrls: ['./dialog-buscar-produto.component.css']
})
export class DialogBuscarProdutoComponent implements OnInit {

  myControl = new FormControl('');
  filteredProdutos?: Observable<IProduct[]>;

  constructor(
    public dialogRef: MatDialogRef<DialogBuscarProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public produto: IProduct,
    public productRepositoryService: ProductRepositoryService
  ) { }

  produtos: IProduct[] = [];//[this.productRepositoryService.getAll()];

  ngOnInit(): void {
    this.filteredProdutos = this.myControl.valueChanges.pipe(
      startWith(''),
      map(nome => this._filter(nome || ''))
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private _filter(name: string): IProduct[] {
    const filterValue = name.toLowerCase();

    return this.produtos.filter(produto => produto.name.toLowerCase().includes(filterValue));
  }

  produtoSelecionado(produto: any, quantidade: any){
    console.log(quantidade);
    this.dialogRef.close({ produtoId: produto.option.id, produtoNome: produto.option.value, quantidade: quantidade})
  }

}
