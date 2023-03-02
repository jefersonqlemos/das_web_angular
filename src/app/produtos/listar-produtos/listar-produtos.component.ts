import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProduct } from 'src/app/services/interfaces/IProduct';
import { ProductRepositoryService } from 'src/app/services/repositories/products/product-repository.service';
import { DialogCadastrarProdutoComponent } from '../dialog-cadastrar-produto/dialog-cadastrar-produto.component';
import { DialogEditarProdutoComponent } from '../dialog-editar-produto/dialog-editar-produto.component';
import { DialogExcluirProdutoComponent } from '../dialog-excluir-produto/dialog-excluir-produto.component';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css'],
})
export class ListarProdutosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'value', 'editar', 'excluir'];

  constructor(
    public dialog: MatDialog,
    public productRepositoryService: ProductRepositoryService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}

  products: IProduct[] = [];

  private DIALOG_WIDTH = "50%"

  openDialog(type: any, data?: IProduct): void {
    const dialogRef = this.dialog.open(type, {
      width: this.DIALOG_WIDTH,
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getAll();
      console.log('The dialog was closed');
    });
  }

  createProduct(): void {
    this.openDialog(DialogCadastrarProdutoComponent);
  }

  editProduct(product: IProduct): void {
    this.openDialog(DialogEditarProdutoComponent, product);
  }

  deleteProduct(product: IProduct): void {
    this.openDialog(DialogExcluirProdutoComponent, product);
  }

  getAll(){
    this.productRepositoryService.getAll().subscribe(data => 
      (this.products = JSON.parse(JSON.stringify(data))) 
      (this.changeDetectorRefs.detectChanges()));
  }

  ngOnInit(): void {
    this.getAll();
  }
}
