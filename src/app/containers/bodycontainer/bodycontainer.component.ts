import { Component, OnInit } from '@angular/core';
import { iContentCard } from 'src/app/interfaces/cardContent';
import { iQuestions, iQuestionsContent } from 'src/app/interfaces/questions';
import { iUser } from 'src/app/interfaces/users';
import { iMenuItem } from '../../interfaces/menuItems';

@Component({
  selector: 'app-bodycontainer',
  templateUrl: './bodycontainer.component.html',
  styleUrls: ['./bodycontainer.component.scss'],
})
export class BodycontainerComponent implements OnInit {
  public activeBtn: boolean = false;
  public declineBtn: boolean = false;
  public tableDeclined: Array<iUser> = [];
  public tableAccepted: Array<iUser> = [];

  public menuItems: Array<iMenuItem> = [
    { name: 'Home', status: true },
    { name: 'Second page' },
    { name: 'Second page' },
  ];

  public questions: Array<iQuestions> = [
    {
      name: 'Question 1',
      title: 'Pellentesque egestas a nisl et imperdiet',
      content: [
        {
          element: 'Element 1',
          textContent:
            'Pellentesque egestas a nisl et imperdiet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed feugiat lorem. Duis ac pharetra lacus, quis mattis felis. Donec tellus sem, congue non tortor vel, viverra faucibus ligula. Nam bibendum mattis purus, at posuere nunc mattis ut. Proin commodo facilisis feugiat. Proin convallis massa sit amet pharetra tempus. Duis tincidunt tellus massa, nec tempor odio mattis et. Maecenas viverra orci et ipsum consequat pellentesque. Aenean ligula leo, suscipit nec pulvinar a, faucibus condimentum metus. Vestibulum ligula lectus, aliquet vel pulvinar id, sodales id quam. Mauris in justo ullamcorper, tristique nibh finibus, euismod neque. Vivamus fringilla orci vitae magna sagittis interdum. Nam pretium velit ac maximus imperdiet. Nam molestie accumsan aliquet. Quisque et quam vulputate, commodo elit ut, ultricies nunc. Vivamus est tortor, ultricies id sodales ac, eleifend vitae arcu.lentesque egestas a nisl et imperdiet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed feugiat lorem. Duis ac pharetra lacus, quis mattis felis. Donec tellus sem, congue non tortor vel, viverra faucibus ligula. Nam bibendum mattis purus, at posuere nunc mattis ut. Proin commodo facilisis feugiat. Proin convallis massa sit amet pharetra tempus. Duis tincidunt tellus massa, nec tempor odio mattis et. Maecenas viverra orci et ipsum consequat pellentesque. Aenean ligula leo, suscipit nec pulvinar a, faucibus condimentum metus. Vestibulum ligula lectus, aliquet vel pulvinar id, sodales id quam. Mauris in justo ullamcorper, tristique nibh finibus, euismod neque. Vivamus fringilla orci vitae magna sagittis interdum. Nam pretium velit ac maximus imperdiet. Nam molestie accumsan aliquet. Quisque et quam vulputate, commodo elit ut, ultricies nunc. Vivamus est tortor, ultricies id sodales ac, eleifend vitae arcu.',
        },
        {
          element: 'Element 2',
          textContent:
            'Pellentesque egestas a nisl et imperdiet Ls ligula. Nam bibendum mattis purus, at posuere nunc mattis ut. Proin commodo facilisis feugiat. Proin convallis massa sit amet pharetra tempus. Duis tincidunt tellus massa, nec tempor odio mattis et. Maecenas viverra orci et ipsum consequat pellentesque. Aenean ligula leo, suscipit nec pulvinar a, faucibus condimentum metus. Vestibulum ligula lectus, aliquet vel pulvinar id, sodales id quam. Mauris in justo ullamcorper, tristique nibh finibus, euismod neque. Vivamus fringilla orci vitae magna sagittis interdum. Nam pretium velit ac maximus imperdiet. Nam molestie accumsan aliquet. Quisque et quam vulputate, commodo elit ut, ultricies nunc. Vivamus est tortor, ultricies id sodales ac, eleifend vitae arcu.',
        },
      ],
    },
    {
      name: 'Question 2',
      title: 'Pellentesque egestas a nisl et imperdiet',
      content: [
        {
          element: 'Element 1',
          textContent:
            'Pellentesque egestas a nisl et imperdiet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed feugiat lorem. Duis ac pharetra lacus, quis mattis felis. Donec tellus sem, congue non tortor vel, viverra faucibus ligula. Nam bibendum mattis purus, at posuere nunc mattis ut. Proin commodo facilisis feugiat. Proin convallis massa sit amet pharetra tempus. Duis tincidunt tellus massa, nec tempor odio mattis et. Maecenas viverra orci et ipsum consequat pellentesque. Aenean ligula leo, suscipit nec pulvinar a, faucibus condimentum metus. Vestibulum ligula lectus, aliquet vel pulvinar id, sodales id quam. Mauris in justo ullamcorper, tristique nibh finibus, euismod neque. Vivamus fringilla orci vitae magna sagittis interdum. Nam pretium velit ac maximus imperdiet. Nam molestie accumsan aliquet. Quisque et quam vulputate, commodo elit ut, ultricies nunc. Vivamus est tortor, ultricies id sodales ac, eleifend vitae arcu.',
        },
        {
          element: 'Element 2',
          textContent:
            'Pellentesque egestas a nisl et imperdiet Ls ligula. Nam bibendum mattis purus, at posuere nunc mattis ut. Proin commodo facilisis feugiat. Proin convallis massa sit amet pharetra tempus. Duis tincidunt tellus massa, nec tempor odio mattis et. Maecenas viverra orci et ipsum consequat pellentesque. Aenean ligula leo, suscipit nec pulvinar a, faucibus condimentum metus. Vestibulum ligula lectus, aliquet vel pulvinar id, sodales id quam. Mauris in justo ullamcorper, tristique nibh finibus, euismod neque. Vivamus fringilla orci vitae magna sagittis interdum. Nam pretium velit ac maximus imperdiet. Nam molestie accumsan aliquet. Quisque et quam vulputate, commodo elit ut, ultricies nunc. Vivamus est tortor, ultricies id sodales ac, eleifend vitae arcu.',
        },
      ],
    },
    {
      name: 'Question 3',
      title: 'Pellentesque egestas a nisl et imperdiet',
      content: [
        {
          element: 'Element 1',
          textContent:
            'Pellentest, consectetur adipiscing elit. Morbi sed feugiat lorem. Duis ac pharetra lacus, quis mattis felis. Donec tellus sem, congue non tortor vel, viverra faucibus ligula. Nam bibendum mattis purus, at posuere nunc mattis ut. Proin commodo facilisis feugiat. Proin convallis massa sit amet pharetra tempus. Duis tincidunt tellus massa, nec tempor odio mattis et. Maecenas viverra orci et ipsum consequat pellentesque. Aenean ligula leo, suscipit nec pulvinar a, faucibus condimentum metus. Vestibulum ligula lectus, aliquet vel pulvinar id, sodales id quam. Mauris in justo ullamcorper, tristique nibh finibus, euismod neque. Vivamus fringilla orci vitae magna sagittis interdum. Nam pretium velit ac maximus imperdiet. Nam molestie accumsan aliquet. Quisque et quam vulputate, commodo elit ut, ultricies nunc. Vivamus est tortor, ultricies id sodales ac, eleifend vitae arcu.',
        },
        {
          element: 'Element 2',
          textContent:
            'Pellentesque egestas a nisl et imperdiet Ls ligula. Nam bibendum mattis purus, at posuere nunc mattis ut. Proin commodo facilisis feugiat. Proin convallis massa sit amet pharetra tempus. Duis tincidunt tellus massa, nec tempor odio mattis et. Maecenas viverra orci et ipsum consequat pellentesque. Aenean ligula leo, suscipit nec pulvinar a, faucibus condimentum metus. Vestibulum ligula lectus, aliquet vel pulvinar id, sodales id quam. Mauris in justo ullamcorper, tristique nibh finibus, euismod neque. Vivamus fringilla orci vitae magna sagittis interdum. Nam pretium velit ac maximus imperdiet. Nam molestie accumsan aliquet. Quisque et quam vulputate, commodo elit ut, ultricies nunc. Vivamus est tortor, ultricies id sodales ac, eleifend vitae arcu.',
        },
      ],
    },
  ];

  public tableData: iUser[] = [
    {
      name: 'John',
      lastName: 'Doe',
      email: 'john@doe.com',
      status: 'true',
      button: true,
    },
    {
      name: 'Jack',
      lastName: 'Makeer',
      email: 'jack@makeer.com',
      status: 'true',
      button: true,
    },
    {
      name: 'Lucas',
      lastName: 'Lopez',
      email: 'lucas@lopez.com',
      status: 'false',
      button: true,
    },
    {
      name: 'Mary',
      lastName: 'Johnson',
      email: 'mary@johnson.com',
      status: 'false',
      button: true,
    },
    {
      name: 'June',
      lastName: 'Mayer',
      email: 'june@mayer.com',
      status: 'false',
      button: true,
    },
    {
      name: 'Charles',
      lastName: 'Power',
      email: 'charles@power.com',
      status: 'true',
      button: true,
    },
  ];

  public InfoCard: iContentCard[] = [
    {
      title: 'Similar Card 1',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      title: 'Similar Card 2',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.tableData;
  }

  filterByTrue() {
    this.tableData;

    this.activeBtn = !this.activeBtn;
    if (!this.activeBtn) {
      this.tableAccepted = this.tableData;
    } else {
      const filterTable = this.tableData.filter(
        (item) => item.status === 'true'
      );
      this.tableAccepted = filterTable;
      this.declineBtn = false;
    }
  }

  filterByFalse() {
    this.tableData;
    this.declineBtn = !this.declineBtn;
    if (!this.declineBtn) {
      this.tableDeclined = this.tableData;
    } else {
      const filterTable2 = this.tableData.filter(
        (item) => item.status === 'false'
      );
      this.tableDeclined = filterTable2;
      this.activeBtn = false;
    }
  }
}
