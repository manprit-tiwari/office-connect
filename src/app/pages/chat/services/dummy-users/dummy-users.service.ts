import { Injectable } from "@angular/core";

@Injectable()
export class ChatDummyUserService {

    users: User[] = [
        {
            _id: "1",
            name: "John Doe",
            mobNo: "+91 98765 43210",
            profileImage: "../../../../../assets/avatars/avatar_1.jpg",
            time: "10:30",
            lastMessage: "Sure, I'll meet you there!",
            active: true,
            unreadCount: 3,
        },
        {
            _id: "2",
            name: "Jane Smith",
            mobNo: "+91 87654 32109",
            profileImage: "../../../../../assets/avatars/avatar_2.jpg",
            time: "09:15",
            lastMessage: "Looking forward to it!",
            active: false,
            unreadCount: 0,
        },
        {
            _id: "3",
            name: "David Johnson",
            mobNo: "+91 76543 21098",
            profileImage: "../../../../../assets/avatars/avatar_3.jpg",
            time: "16:45",
            lastMessage: "Thanks for the update!",
            active: true,
            unreadCount: 1,
        },
        {
            _id: "4",
            name: "Emily Davis",
            mobNo: "+91 65432 10987",
            profileImage: "../../../../../assets/avatars/avatar_4.jpg",
            time: "12:20",
            lastMessage: "I'll check it out. Thanks!",
            active: true,
            unreadCount: 0,
        },
        {
            _id: "5",
            name: "Michael Wilson",
            mobNo: "+91 54321 09876",
            profileImage: "../../../../../assets/avatars/avatar_5.jpg",
            time: "14:55",
            lastMessage: "Let's discuss it tomorrow.",
            active: false,
            unreadCount: 2,
        },
    ];



}