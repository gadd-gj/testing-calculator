import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { addition } from '../addition/addition';
import { GuiComponent } from './gui.component';

// describe('GuiComponent', () => {
//   let component: GuiComponent;
//   let fixture: ComponentFixture<GuiComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ GuiComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(GuiComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// describe('GUI - Addition implementation',()=>{
//   it('should call addition method',()=> {

//   });
//   it('should render addition in txtResult',()=>{

//   });
// });

// describe('GUI - Substraction implementation',()=>{
//   it('should call Substraction method',()=> {

//   });
//   it('should render Substraction in txtResult',()=>{

//   });
// });

// describe('GUI - Multiplication implementation',()=>{
//   it('should call Multiplication method',()=> {

//   });
//   it('should render Multiplication in txtResult',()=>{

//   });
// });
// describe('GUI - Division implementation',()=>{
//   it('should call Division method',()=> {

//   });
//   it('should render Division in txtResult',()=>{

//   });
// });
// describe('GUI - Exp implementation',()=>{
//   it('should call Exp method',()=> {

//   });
//   it('should render Exp in txtResult',()=>{

//   });
// });
// describe('GUI - Sqr implementation',()=>{
//   it('should call Sqr method',()=> {

//   });
//   it('should render Sqr in txtResult',()=>{

//   });
// });
// describe('GUI - Sqrt implementation',()=>{
//   it('should call Sqrt method',()=> {

//   });
//   it('should render Sqrt in txtResult',()=>{

//   });
// });

describe('GUI Addition - Component', () => {
    let component: GuiComponent;
    let fixture: ComponentFixture<GuiComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GuiComponent],
            imports: [FormsModule],
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(GuiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('Should call addition method', () => {

        // Arrange
        let result = 0;
        component.operator1 = 3;
        component.operator2 = 2;

        // Act
        component.addition();
        result = component.result;

        // Assert
        expect(result).toBe(5);
    });
    xit('should add operator1 and operator2 when i click the addition button ', () => {
        // Arrange 
        component.operator1 = 5.0;
        component.operator2 = 2.5;
        let additionButton = fixture.debugElement.query(By.css('.addition-button'));

        // Act
        component.addition();
        fixture.detectChanges();
        additionButton.triggerEventHandler('click', null);

        // Assert
        expect(component.result).toBe(7.5);

    });
    xit('Should render sum in result', () => {
        // Arrange
        component.operator1 = 5;
        component.operator2 = 5;

        // Act
        component.addition();
        fixture.detectChanges();
        let de = fixture.debugElement.query(By.css('.result'));
        let el: HTMLElement = de.nativeElement;

        // Assert
        expect(el.innerText).toContain('10');

    });

}); 