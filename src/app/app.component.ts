import {Component, OnInit} from '@angular/core';
import {ProductService} from './_providers/product.service';
import {Broadcaster, Ng2Cable} from 'ng2-cable/js/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  name: string;
  quantity: number;
  products: any;

  constructor(private ng2Cable: Ng2Cable,
              private broadcaster: Broadcaster,
              private productService: ProductService) {
    this.ng2Cable.subscribe('http://localhost:3000/cable', 'ProductChannel');
  }

  ngOnInit() {
    this.getProducts();

    this.broadcaster.on('CreateProduct').subscribe(
      product => {
        this.products.push(product);
      }
    );

    this.broadcaster.on('UpdateProduct').subscribe(
      product => {
        this.getProducts();
      }
    );

    this.broadcaster.on('DestroyProduct').subscribe(
      product => {
        this.getProducts();
      }
    );
  }

  create() {
    this.productService.create({name: this.name, quantity: this.quantity}).subscribe(
      produto => console.log(produto)
    );
  }

  update(product) {
    product.found = product.found ? false : true;
    this.productService.update(product).subscribe(
      produto => {}
    );
  }

  destroy(product) {
    this.productService.destroy(product).subscribe(
      produto => {}
    );
  }

  getProducts() {
    this.productService.getAll().subscribe(
      products => this.products = products
    );
  }

}
