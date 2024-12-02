import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
// import Image1 from '../../../assets/images/img-1.webp';

@Component({
  selector: 'app-content',
  imports: [CommonModule,MatCardModule, MatButtonModule, ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  cards = [
    {
      description: 'Lorem ipsum dolor sit amet, matis consectetur adipiscing elit.',
      image: '../../assets/img/img-1.webp'
    },
    {
      description: 'Lorem ipsum dolor sit amet, matis consectetur adipiscing elit.',
      image: '../../assets/img/img-2.jpg'
    },
    {
      description: 'Lorem ipsum dolor sit amet, matis consectetur adipiscing elit.',
      image: '../../assets/img/img-3.jpg'
    },
    
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000
  };


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