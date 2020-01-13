import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  // { path: 'recipes', loadChildren: './components/recipes/recipes.module.ts#RecipesModule' }

  // Lazy loading(only load required component bundle not all the app) routes
  // lazy loading (we load code when ever it needed)
  // this is the syn tex  for that
  // lazy loading splits the code into multiple bundles
  // here is recipes, shopping-list and auth bundles
  // angular reads the bundle when it needed

  { 
    path: 'recipes',
    loadChildren: () => import('./components/recipes/recipes.module').then(m => m.RecipesModule)
  },
  {
    path: 'shopping-list',
    loadChildren: () => import('./components/shopping-list/shopping-list.module').then(m => m.ShoppingListModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  // {preloadingStrategy: PreloadAllModules} this is for lazy loading 
  // we have to say the angular preload the modules in the background 
  // when the initial page is loaded user surfing the page time
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
