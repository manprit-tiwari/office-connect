interface Message {
    _id: string,
    userId: string,
    message: string,
    time: string,
    status: 'send' | "received" | "read",
}