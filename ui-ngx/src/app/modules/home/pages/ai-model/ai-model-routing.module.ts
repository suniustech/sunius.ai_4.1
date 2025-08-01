///
/// Copyright © 2016-2025 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///


import { RouterModule, Routes } from '@angular/router';
import { EntitiesTableComponent } from '@home/components/entity/entities-table.component';
import { Authority } from '@shared/models/authority.enum';
import { MenuId } from '@core/services/menu.models';
import { AiModelsTableConfigResolver } from '@home/pages/ai-model/ai-model-table-config.resolve';
import { NgModule } from '@angular/core';

export const aiModelRoutes: Routes = [
  {
    path: 'ai-models',
    component: EntitiesTableComponent,
    data: {
      auth: [Authority.TENANT_ADMIN],
      title: 'ai-models.ai-models',
      breadcrumb: {
        menuId: MenuId.ai_models
      }
    },
    resolve: {
      entitiesTableConfig: AiModelsTableConfigResolver
    }
  }
];

@NgModule({
  providers: [
    AiModelsTableConfigResolver
  ],
  imports: [RouterModule.forChild(aiModelRoutes)],
  exports: [RouterModule],
})
export class AiModelRoutingModule { }
