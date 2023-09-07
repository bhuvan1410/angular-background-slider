import { Component, OnInit } from '@angular/core';
import { ImageDataService } from '../image-data.service';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  images: string[] = [];
  currentIndex = 0;

  constructor(private imageDataService: ImageDataService) {}

  ngOnInit(): void {
    this.images = this.imageDataService.getImages();
    this.startSlider();
  }

  startSlider() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); 
  }
}
