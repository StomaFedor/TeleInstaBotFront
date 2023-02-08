import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MediaType } from '../models/enums/media-type.enum';
import { PostModel } from '../models/post.model';
import { PostService } from '../service/http-services/post.service';
import { TelegramUserModel } from '../models/telegram-user.model'


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public menuFlag: boolean[] = [];
  
  public menuBtnClick(post: PostModel): void {
    this.menuFlag[post.id] = !this.menuFlag[post.id];
  }

  public httpError: HttpErrorResponse | undefined;
  public telegramUser: TelegramUserModel = {
    id: 0,
    isBot: false,
    name: "",
    surname: "",
    username: "",
    language: "",
  };
  public posts: PostModel[] = [];

  constructor(private postService: PostService, private snackBar: MatSnackBar) {

    // this.telegramUser.id = (<any>window).Telegram.WebApp.initDataUnsafe.user.id;  
    // this.telegramUser.isBot = (<any>window).Telegram.WebApp.initDataUnsafe.user.isBot;  
    // this.telegramUser.name = (<any>window).Telegram.WebApp.initDataUnsafe.user.first_name;
    // this.telegramUser.surname = (<any>window).Telegram.WebApp.initDataUnsafe.user.last_name;
    // this.telegramUser.username = (<any>window).Telegram.WebApp.initDataUnsafe.user.username;
    // this.telegramUser.language = (<any>window).Telegram.WebApp.initDataUnsafe.user.language_code;
    
    postService.getAllPosts().subscribe({
      next: data => {
          this.posts = data;
      },
      error: error => {
          this.httpError = error;
          console.log(error);
          if (this.httpError !== undefined)
            this.openAutoDurationSnackBar(this.httpError?.message);
          else  
            this.openAutoDurationSnackBar("Неизвестная ошибка!");
      } 
    });
  }

  openAutoDurationSnackBar(text: string) {
    this.snackBar.open(text, '', {
        duration: 5000,
    });
  }

  public updatePost(postService: PostService) {
    postService.getAllPosts().subscribe(data => this.posts = data);
  }

  public clickEvent(direction: string) {
      if (direction == "right") {
        this.postService.getNextPosts().subscribe(data => this.posts = data);
      }
      if (direction == "left") {
        this.postService.getPrevPosts().subscribe(data => this.posts = data);
      }
  }

  public downloadFile(post: PostModel): void {
    for(const medias of post.medias) {
      const link = document.createElement('a');
      link.setAttribute('target', '_blank');
      link.setAttribute('href', "data:image/jpeg;base64," + medias.media);
      link.setAttribute('download', post.intagramNickName);
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  }
  
  public checkMediaImage(type: MediaType): boolean {
    return type === MediaType.Image;
  }

  public checkMediaVideo(type: MediaType): boolean {
    return type === MediaType.Video;
  }

  ngOnInit(): void {

  }

}
