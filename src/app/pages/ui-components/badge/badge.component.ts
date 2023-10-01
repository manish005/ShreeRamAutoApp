import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common'
@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styles: ['.example-full-width { width: 100%;} .grid2col{display:grid;grid-template-columns: repeat(2,2fr);}']
})
export class AppBadgeComponent implements OnInit {

  OldmodelForm = new FormControl('');
  NewmodelForm = new FormControl('');
  Oldmodelname: string[] = ['TZA', 'XP130','XLTZ4' ,'XLTZ5','KI88'];
  Newmodelname: string[] = ['XLTZ5','KI88','TZA', 'XP130','XLTZ4'];
  OldItemSrNum = new FormControl('');
  TicketNum = new FormControl('');
  OldfilteredOptions: Observable<string[]>;
  NewfilteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    this.OldfilteredOptions = this.OldmodelForm.valueChanges.pipe(
      startWith(''),
      map(value => this._Oldfilter(value || '')),
    );
    this.NewfilteredOptions = this.NewmodelForm.valueChanges.pipe(
      startWith(''),
      map(value => this._Newfilter(value || '')),
    );
  }
  disableSelect = new FormControl(false);
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  private _Oldfilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.Oldmodelname.filter(Oldmodelname => Oldmodelname.toLowerCase().includes(filterValue));
  }
  private _Newfilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.Newmodelname.filter(Newmodelname => Newmodelname.toLowerCase().includes(filterValue));
  }

}
