import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  login = '';
  hidePassword = true;
  constructor() { }

  public loginBtn(): void {
    
  }
  ngOnInit(): void {
  }

}
