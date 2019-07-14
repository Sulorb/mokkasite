import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'upload', loadChildren: './upload/upload.module#UploadPageModule' },
  { path: 'connection', loadChildren: './connection/connection.module#ConnectionPageModule' },
  { path: 'inscription', loadChildren: './inscription/inscription.module#InscriptionPageModule' },
  { path: 'plus', loadChildren: './plus/plus.module#PlusPageModule' },
  { path: 'podium', loadChildren: './podium/podium.module#PodiumPageModule' },
  { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule' },
  { path: 'apropos', loadChildren: './apropos/apropos.module#AproposPageModule' },
  { path: 'partenaires', loadChildren: './partenaires/partenaires.module#PartenairesPageModule' },
  { path: 'cgu', loadChildren: './cgu/cgu.module#CguPageModule' },
  { path: 'mentions', loadChildren: './mentions/mentions.module#MentionsPageModule' },
  { path: 'missions', loadChildren: './missions/missions.module#MissionsPageModule' },
  { path: 'validation', loadChildren: './validation/validation.module#ValidationPageModule' },
  { path: 'paiement', loadChildren: './paiement/paiement.module#PaiementPageModule' },
  { path: 'tuto', loadChildren: './tuto/tuto.module#TutoPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
