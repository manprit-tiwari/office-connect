import { Injectable } from "@angular/core";

@Injectable()
export class ChatDummyChatService {

    chatData: Message[] = [
        {
            _id: "1",
            userId: "1",
            message: "Hey, how are you?",
            time: "10:00",
            status: "send",
        },
        {
            _id: "2",
            userId: "2",
            message: "Hi! I'm good. How about you?",
            time: "10:01",
            status: "received",
        },
        {
            _id: "3",
            userId: "1",
            message: "I'm doing great, thanks!",
            time: "10:03",
            status: "send",
        },
        {
            _id: "4",
            userId: "2",
            message: "That's good to hear!",
            time: "10:04",
            status: "received",
        },
        {
            _id: "5",
            userId: "1",
            message: "By the way, did you watch the new movie?",
            time: "10:07",
            status: "send",
        },
        {
            _id: "6",
            userId: "2",
            message: "Yes, I did! It was amazing!",
            time: "10:09",
            status: "received",
        },
        {
            _id: "7",
            userId: "1",
            message: "I thought so too! The acting was top-notch.",
            time: "10:11",
            status: "send",
        },
        {
            _id: "8",
            userId: "2",
            message: "Absolutely! The plot was also quite intriguing.",
            time: "10:13",
            status: "received",
        },
        {
            _id: "9",
            userId: "1",
            message: "We should definitely plan a movie night soon.",
            time: "10:16",
            status: "send",
        },
        {
            _id: "10",
            userId: "2",
            message: "That sounds like a plan! I'm up for it.",
            time: "10:18",
            status: "received",
        },
    ];

}