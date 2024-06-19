import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from '../../components/loader/loader.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  isLoading: boolean = true;
  isBrowser: boolean = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.loadVideo();
      this.loadContentAfterDelay();
    }
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
    }, 4000);
  }
}
