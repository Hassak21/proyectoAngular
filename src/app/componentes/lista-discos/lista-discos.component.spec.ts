import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDiscosComponent } from './lista-discos.component';

describe('ListaDiscosComponent', () => {
  let component: ListaDiscosComponent;
  let fixture: ComponentFixture<ListaDiscosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDiscosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
