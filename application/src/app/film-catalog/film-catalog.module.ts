import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmSingleComponent } from './films-list/film-single/film-single.component';
import { ActorsListComponent } from './actors-list/actors-list.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FilmItemComponent } from './films-list/film-item/film-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ActorItemComponent } from './actors-list/actor-item/actor-item.component';
import { SearchComponent } from './search/search.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { NgProgressModule } from 'ngx-progressbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { constantes, Constantes } from './config';
import { FilmService } from '../shared/services/film.service';
import { DEFAULT_SETTINGS, constantes } from '../shared/configs/config';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorComponent } from './paginator/paginator.component';
import { ActorSingleComponent } from './actors-list/actor-single/actor-single.component';





@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MatCardModule,
		MatButtonModule,
		MatGridListModule,
		MatSelectModule,
		MatToolbarModule,
		HttpClientModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule,
		NgProgressModule,
		HttpModule,
		MatProgressSpinnerModule,
		BrowserAnimationsModule,
		MatPaginatorModule


	],
	declarations: [
		MainComponent,
		FilmsListComponent,
		FilmSingleComponent,
		ActorsListComponent,
		ActorSingleComponent,
		FilmItemComponent,
		ActorItemComponent,
		SearchComponent,
		PaginatorComponent

	],
	providers: [
		FilmService,
		{ provide: DEFAULT_SETTINGS, useValue: constantes }
	]
})
export class FilmCatalogModule {
}
