import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {title: "Yesterday's Chores", tasks: ['Empty Dishwasher', 'Start Launchcode prep work', 'buy groceries']},
      {title: "Today's Chores", tasks: ['Load dishwasher', 'Complete LaunchCode prep work', 'Clean the bathroom']},
      {title: "Tomorrow's Chores", tasks: ['Empty dishwasher AGAIN', 'Do laundry', 'Play with Launchcode code']},
   ]
   constructor() { }

   ngOnInit() {
   }

}
