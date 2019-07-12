import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-site2',
  templateUrl: './site2.component.html',
  styleUrls: ['./site2.component.css']
})
export class Site2Component implements OnInit {

  test$: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.test$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.get('name'))
    );
  

    console.log('id is'+this.test$);

  }

}
