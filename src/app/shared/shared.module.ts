import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Meus Components
import { AboutMeComponent } from './about-me/about-me.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutMeComponent,
    HeaderComponent,
    InicioComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
  exports: [
    CommonModule,
    AboutMeComponent,
    HeaderComponent,
    InicioComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
})
export class SharedModule {}
