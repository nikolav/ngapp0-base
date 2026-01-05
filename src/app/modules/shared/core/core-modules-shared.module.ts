import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CdkModulesShared } from "../cdk/cdk-shared-modules/cdk-shared-modules.module";

const MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  NgOptimizedImage,
  // cdk
  CdkModulesShared,
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class CoreModulesShared {}
