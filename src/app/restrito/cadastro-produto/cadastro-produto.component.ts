import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Produto } from '../../models/Produto.model';
import { ProdutoService } from '../../produto.service';


@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css'
})
export class CadastroProdutoComponent implements OnInit {

  public produto: Produto = new Produto(0, "", "", "", 0);

  constructor(private _produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
  }
  cadastrar() {
    this._produtoService.cadastrarProduto(this.produto).subscribe(
      produto => {
        this.produto = new Produto(0, "", "", "", 0);
        alert("Cadastro Efetuado com Sucesso")
      },
      err => {
        alert("erro ao cadastrar")


      }

    );

    this.router.navigate(["/restrito/lista"]);
  }
}









