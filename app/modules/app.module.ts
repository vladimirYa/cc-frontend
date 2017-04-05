
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from '../components/app.component';
import { SiteModule } from './site/site.module';
import { CabinetModule } from './cabinet/cabinet.module';


@NgModule({
    imports: [
        BrowserModule,
        SiteModule,
        CabinetModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
