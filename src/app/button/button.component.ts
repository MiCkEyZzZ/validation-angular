import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input()
  title: string = ''

  @Input()
  className: string = ''

  @Input()
  type: string = ''

  @Input()
  disabled: boolean = true

  constructor() {}

  ngOnInit(): void {}
}
