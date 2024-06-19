import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from '../../components/loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  isLoading!: boolean;
  ngOnInit(): void {
    this.loadContentAfterDelay();
    this.loadVideo();
  }

  loadVideo() {
    const video = document.querySelector(
      '.background-video'
    ) as HTMLVideoElement;
    video.onloadeddata = () => {
      this.isLoading = false;
    };
  }

  loadContentAfterDelay() {
    setTimeout(() => {
      this.isLoading = false;
    }, 4000); // 4000 milliseconds = 4 seconds
  }
}
