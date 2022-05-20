import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AnimalDetailsModule } from './animal-details/animal-details.module';
import { AnimalsListModule } from './animals-list/animals-list.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './core/footer/footer.module';
import { HeaderModule } from './core/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimalDetailsModule,
    AnimalsListModule,
    RouterModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
