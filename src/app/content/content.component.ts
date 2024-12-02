import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@Component({
  selector: 'app-content',
  imports: [CommonModule,MatCardModule, MatButtonModule, SlickCarouselModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  cards = [
    {
      title: '2024 Employee Onboarding Bundle',
      description: 'Lorem ipsum dolor sit amet, matis consectetur adipiscing elit.',
      image: 'assets/images/employee-onboarding-bundle.png'
    },
    {
      title: 'New-Hire Checklist Template',
      description: 'Lorem ipsum dolor sit amet, matis consectetur adipiscing elit.',
      image: 'assets/images/new-hire-checklist.png'
    },
    {
      title: '2024 Employee Performance Bundle',
      description: 'Lorem ipsum dolor sit amet, matis consectetur adipiscing elit.',
      image: 'assets/images/employee-performance-bundle.png'
    },
    {
      title: '2024 Employee Onboarding Bundle',
      description: 'Lorem ipsum dolor sit amet, matis consectetur adipiscing elit.',
      image: 'assets/images/employee-onboarding-bundle.png'
    },
    {
      title: 'New-Hire Checklist Template',
      description: 'Lorem ipsum dolor sit amet, matis consectetur adipiscing elit.',
      image: 'assets/images/new-hire-checklist.png'
    },
    {
      title: '2024 Employee Performance Bundle',
      description: 'Lorem ipsum dolor sit amet, matis consectetur adipiscing elit.',
      image: 'assets/images/employee-performance-bundle.png'
    },
    {
      title: '2024 Employee Onboarding Bundle',
      description: 'Lorem ipsum dolor sit amet, matis consectetur adipiscing elit.',
      image: 'assets/images/employee-onboarding-bundle.png'
    },
    {
      title: 'New-Hire Checklist Template',
      description: 'Lorem ipsum dolor sit amet, matis consectetur adipiscing elit.',
      image: 'assets/images/new-hire-checklist.png'
    },
    {
      title: '2024 Employee Performance Bundle',
      description: 'Lorem ipsum dolor sit amet, matis consectetur adipiscing elit.',
      image: 'assets/images/employee-performance-bundle.png'
    },
    {
      title: '2024 Employee Onboarding Bundle',
      description: 'Lorem ipsum dolor sit amet, matis consectetur adipiscing elit.',
      image: 'assets/images/employee-onboarding-bundle.png'
    },
    {
      title: 'New-Hire Checklist Template',
      description: 'Lorem ipsum dolor sit amet, matis consectetur adipiscing elit.',
      image: 'assets/images/new-hire-checklist.png'
    },
    {
      title: '2024 Employee Performance Bundle',
      description: 'Lorem ipsum dolor sit amet, matis consectetur adipiscing elit.',
      image: 'assets/images/employee-performance-bundle.png'
    },
  ];

  slickConfig = {
    dots: true,            // Show navigation dots
    infinite: true,        // Infinite scroll
    speed: 500,            // Transition speed
    slidesToShow: 3,       // Show 3 slides at a time
    slidesToScroll: 1,     // Scroll 1 slide at a time
    centerMode: true,      // Center current slide
    focusOnSelect: true    // Allow selection by clicking a slide
  };

  // cards = [
  //   {
  //     image: 'assets/img/sidebar-5.jpg',
  //     description: 'This is card 1',
  //   },
  //   {
  //     image: 'assets/img/sidebar-5.jpg',
  //     description: 'This is card 2',
  //   },
  //   {
  //     image: 'assets/img/sidebar-5.jpg',
  //     description: 'This is card 3',
  //   },
  //   {
  //     image: 'assets/img/sidebar-5.jpg',
  //     description: 'This is card 4',
  //   },
  //   {
  //     image: 'assets/img/sidebar-5.jpg',
  //     description: 'This is card 5',
  //   },
  // ];

  currentIndex = 0;

  get dots(): number[] {
    return Array.from({ length: Math.ceil(this.cards.length / 3) }, (_, i) => i);
  }

  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  navigateTo(index: number): void {
    this.currentIndex = index;
  }
   handleAsk() {
    const input = (document.getElementById('askInput') as HTMLInputElement).value;
    if (input) {
        alert(`You asked: ${input}`);
        // Add logic here to process or send the input to your backend
    } else {
        alert('Please type your question!');
    }
}

}