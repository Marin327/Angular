import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';
import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';
import { StoreFirstGuard } from './storeFirst.guard';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
	imports: [
		BrowserModule,
		StoreModule,
		RouterModule.forRoot([
			{ path: 'store', component: StoreComponent, canActivate: [StoreFirstGuard] },
			{ path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard] },
			{ path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard] },
			{ path: "admin",
				loadChildren: () => import("./admin/admin.module")
					.then(m => m.AdminModule),
				canActivate: [StoreFirstGuard]
			},
			{ path: "**", redirectTo: "/store" }
		]),
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
	],
	providers: [StoreFirstGuard],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }
