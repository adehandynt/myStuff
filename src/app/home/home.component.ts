import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { PieSeries } from "nativescript-ui-chart";
import * as app from "tns-core-modules/application";
import { registerElement } from "nativescript-angular/element-registry";
registerElement("CardView", () => require("nativescript-cardview").CardView);
import { Country } from "../country";
import { Car } from "../car";
import { DataService } from "../data.service";
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
    providers: [DataService]
})
export class HomeComponent implements OnInit {
    // tslint:disable-next-line:array-type
    pieSource: { Brand: string, Amount: number }[] = [
        { Brand: "Audi", Amount: 10 },
        { Brand: "Mercedes", Amount: 76 },
        { Brand: "Fiat", Amount: 60 },
        { Brand: "BMW", Amount: 24 },
        { Brand: "Crysler", Amount: 40 }
    ];
    private _pieSource: ObservableArray<Car>;
    constructor(private _dataService: DataService) {
        // Use the component constructor to inject providers.
    }
    ngOnInit(): void {
        // Init your component properties here.
        // this._pieSource = new ObservableArray(this._dataService.getPieSource());
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
