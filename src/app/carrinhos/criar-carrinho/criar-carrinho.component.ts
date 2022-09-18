import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IProductModel } from 'src/app/services/interfaces/IProduct';

@Component({
  selector: 'app-criar-carrinho',
  templateUrl: './criar-carrinho.component.html',
  styleUrls: ['./criar-carrinho.component.css']
})
export class CriarCarrinhoComponent implements OnInit {

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  displayedColumns: string[] = [ 'produtoId', 'quantidade', 'valor'];

  produtos: IProductModel[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  adicionarProduto(){
    
  }

}
