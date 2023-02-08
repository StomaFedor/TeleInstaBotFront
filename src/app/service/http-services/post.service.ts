import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PostModel } from "src/app/models/post.model";
import { ResourceService } from "../resource.service";
import { of } from "rxjs"

import { MediaType } from "src/app/models/enums/media-type.enum";

@Injectable()
export class PostService
{
    private url: string = `${this.resourceService.url}/`;
    private posts: PostModel[] = [
        {   
            id: 0,
            avatar: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
            medias: [
                {
                    media: "https://postila.ru/data/e2/22/d7/ae/e222d7ae31c679fb2ad67325b9bd52522122018ea43309d4bbe7fb76fdb92410.jpg",
                    type: MediaType.Image
                },
                {
                    media: "https://postila.ru/data/e2/22/d7/ae/e222d7ae31c679fb2ad67325b9bd52522122018ea43309d4bbe7fb76fdb92410.jpg",
                    type: MediaType.Image
                },
                {
                    media: "https://postila.ru/data/e2/22/d7/ae/e222d7ae31c679fb2ad67325b9bd52522122018ea43309d4bbe7fb76fdb92410.jpg",
                    type: MediaType.Image
                },
                {
                    media: "https://postila.ru/data/e2/22/d7/ae/e222d7ae31c679fb2ad67325b9bd52522122018ea43309d4bbe7fb76fdb92410.jpg",
                    type: MediaType.Video
                },
            ],
            postUrl: "",
            intagramNickName: "_mansurow_",
            address: "Moscow, Russia",
            likes: 2555,
            description: "Мы знаем, как долго вы этого ждали 🤩. Основы программирования, а именно frontend-разработка на языке JS снова в стенах Академии. Идеальный вариант для тех, кто хочет сделать первые шаги в мире IT. Ссылка ждёт вас в описании профиля 😉",
            date: "4 day ago", 
        },
        {   
            id: 1,
            avatar: "https://avatars.mds.yandex.net/i?id=ed2177461c1d802ac2fc2aac77a0fe45-4055686-images-thumbs&n=13",
            medias: [
                {
                    media: "https://all-aforizmy.ru/wp-content/uploads/2021/11/original_planeti.jpg",
                    type: MediaType.Image
                },
                {
                    media: "https://img4.goodfon.ru/original/1680x1050/7/99/kosmos-space-svet-tma-vselennaia-zvezdy.jpg",
                    type: MediaType.Image
                },
                {
                    media: "https://kartinkin.net/uploads/posts/2021-04/1617600611_5-p-krasivii-fon-kosmos-5.jpg",
                    type: MediaType.Image
                }
            ],
            postUrl: "",
            intagramNickName: "_who_",
            address: "Me",
            likes: 2555,
            description: "Hello everything!",
            date: "4 day ago", 
        },
        {   
            id: 2,
            avatar: "https://i.pinimg.com/736x/74/a2/4c/74a24cd55a66082fad33310705c4f86e.jpg",
            medias: [
                {
                    media: "https://nascar.nbcsports.com/wp-content/uploads/sites/9/2016/03/516710964-e1458747166963.jpg",
                    type: MediaType.Image
                },
                {
                    media: "https://nascar.nbcsports.com/wp-content/uploads/sites/9/2016/03/516710964-e1458747166963.jpg",
                    type: MediaType.Image
                }
            ],
            postUrl: "",
            intagramNickName: "_iamman_",
            address: "iamman",
            likes: 2,
            description: "Hello everything!",
            date: "сегодня", 
        },
        {   
            id: 3,
            avatar: "https://i.pinimg.com/736x/74/a2/4c/74a24cd55a66082fad33310705c4f86e.jpg",
            medias: [
                {
                    media: "https://nascar.nbcsports.com/wp-content/uploads/sites/9/2016/03/516710964-e1458747166963.jpg",
                    type: MediaType.Video
                },
                {
                    media: "https://nascar.nbcsports.com/wp-content/uploads/sites/9/2016/03/516710964-e1458747166963.jpg",
                    type: MediaType.Video
                }
            ],
            postUrl: "",
            intagramNickName: "_iamman_",
            address: "iamman",
            likes: 2,
            description: "Hello everything!",
            date: "сегодня", 
        },
        {   
            id: 4,
            avatar: "https://i.pinimg.com/736x/74/a2/4c/74a24cd55a66082fad33310705c4f86e.jpg",
            medias: [
                {
                    media: "https://i.pinimg.com/736x/9d/81/13/9d81134206c36a00d11fa72bf13287fc.jpg",
                    type: MediaType.Image
                },
                {
                    media: "https://i.pinimg.com/736x/9d/81/13/9d81134206c36a00d11fa72bf13287fc.jpg",
                    type: MediaType.Image
                }
            ],
            postUrl: "",
            intagramNickName: "_iamman_",
            address: "iamman",
            likes: 2,
            description: "Hello everything!",
            date: "завтра", 
        },
    ];

    private nextPosts: PostModel[] = [
        {   
            id: 5,
            avatar: "https://i.pinimg.com/736x/74/a2/4c/74a24cd55a66082fad33310705c4f86e.jpg",
            medias: [
                {
                    media: "https://i.pinimg.com/736x/9d/81/13/9d81134206c36a00d11fa72bf13287fc.jpg",
                    type: MediaType.Image
                }
            ],
            postUrl: "",
            intagramNickName: "_iamman_",
            address: "iamman",
            likes: 2,
            description: "Hello everything!",
            date: "завтра", 
        },
    ];

    constructor(private http: HttpClient, private resourceService: ResourceService) {}
    
    public getAllPosts(): Observable<PostModel[]> {
        // return this.http.get<PostModel[]>(`${this.url}?727323232`);
        return of(this.posts);
    }

    public getNextPosts(): Observable<PostModel[]> {
        return of(this.nextPosts);
    }

    public getPrevPosts(): Observable<PostModel[]> {
        return of(this.posts);
    }
}

// users.service.ts