import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`(U) getPoupanca(): shoud have poupanca = 10`, () => {
    expect(component.getPoupanca).toEqual(10);
  });

  it (`(U) getCarteira(): shoud have carteira = 50`, () => {
    expect(component.getCarteira).toEqual(50);
  });

  it (`(U) setSacar(): shoud transfer poupanca from carteira`, () => {
    component.setSacar('10');
    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  });
  
  it (`(U) getSacar(): shoud transfer poupanca dont have string (isNaN) or poupanca < value`, () => {
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.setSacar('100')).not.toBeTruthy();
    expect(component.getCarteira).toEqual(10);
    expect(component.getPoupanca).toEqual(50);
  });

  it (`(U) setDepositar(): shoud transfer carteira from poupanca`, () => {
    component.setSacar('50');
    expect(component.getCarteira).toEqual(0);
    expect(component.getPoupanca).toEqual(60);
  });

  it (`(U) setDepositar(): shoud transfer carteira dont have string (isNaN) or carteira < value`, () => {
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.setDepositar('100')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });
  
});
