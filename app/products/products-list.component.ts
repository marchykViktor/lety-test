import { Component, OnInit } from "@angular/core";
import { Jsonp, URLSearchParams } from "@angular/http";
import * as _ from 'underscore';
import { PaginationService } from "../products/pagination.service";
import { AuthService } from "../log/login.service";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "products-list",
    templateUrl: "products-list.component.html",
    styleUrls: ["products-list.component.css"]
})

export class ProductList implements OnInit  {
productsArray: any[];
pager: any = {};
pagedItems: any[];
constructor(private router: Router, private jsonp: Jsonp, private paginationService: PaginationService, private aService: AuthService) { }
ngOnInit() {
    this.getProducts();
}
logOut() {
    this.aService.logout();
    this.router.navigate(["login"]);
}
getProducts() {
    let productsUrl = "http://www.json-generator.com/api/json/get/bZTcBnsIgO";
    let params = new URLSearchParams();
        params.set("callback", "JSONP_CALLBACK");
        params.set("format", "json");
        this.jsonp.get(productsUrl, { search: params })
        this.jsonp.get(productsUrl, { search: params }).subscribe(
            result => {
                this.productsArray = <string[]>result.json(); 
                this.setPage(1);
            },
            error => console.log(error.statusText)
        );
    }
setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.paginationService.getPager(this.productsArray.length, page);
        this.pagedItems = this.productsArray.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}