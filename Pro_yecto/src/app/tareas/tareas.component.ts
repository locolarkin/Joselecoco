import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import { CdkDragDrop,CdkDrag,CdkDropList,CdkDropListGroup, moveItemInArray,transferArrayItem,} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  standalone: true,
  imports: [CdkDropList, NgFor, CdkDropListGroup, CdkDrag],
  
})

export class TareasComponent {

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
