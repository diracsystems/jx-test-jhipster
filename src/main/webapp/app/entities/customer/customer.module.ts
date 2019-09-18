import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestjhipsterSharedModule } from 'app/shared/shared.module';
import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerUpdateComponent } from './customer-update.component';
import { CustomerDeletePopupComponent, CustomerDeleteDialogComponent } from './customer-delete-dialog.component';
import { customerRoute, customerPopupRoute } from './customer.route';

const ENTITY_STATES = [...customerRoute, ...customerPopupRoute];

@NgModule({
  imports: [TestjhipsterSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CustomerComponent,
    CustomerDetailComponent,
    CustomerUpdateComponent,
    CustomerDeleteDialogComponent,
    CustomerDeletePopupComponent
  ],
  entryComponents: [CustomerComponent, CustomerUpdateComponent, CustomerDeleteDialogComponent, CustomerDeletePopupComponent]
})
export class TestjhipsterCustomerModule {}