export class ILink {
    href: string;
    icon: string;
    name: string;

    constructor(href: string, icon: string, name: string) {
        this.href = href;
        this.icon = icon;
        this.name = name;
    }
}

export class IContact{
    name:string;
    number:string;

    constructor(name: string, number: string) {
        this.name = name;
        this.number = number;
    }
}

export class IUser {
    name: string;
    surname: string;
    defaultAddress: string;
    number: string;
    mail: string;

    constructor(name: string, surname: string, defaultAddress: string, number: string, mail: string) {
        this.name = name;
        this.surname = surname;
        this.defaultAddress = defaultAddress;
        this.number = number;
        this.mail = mail;
    }
}

export class IProduct {
    name: string;
    cost: number;
    characteristics: ICharacteristic[];
    dataAdd: string;
    discount: number;
    feedbacks: IFeedback[];
    images: string[];
    linkYoutube: string;
    description: string;
    currentCount: number;
    saleCount: number;

    constructor(name: string, cost: number, characteristics: ICharacteristic[],
                dataAdd: string, discount: number, feedbacks: IFeedback[],
                images: string[], linkYoutube: string, description: string,
                currentCount: number, saleCount: number) {
        this.name = name;
        this.cost = cost;
        this.characteristics = characteristics;
        this.dataAdd = dataAdd;
        this.discount = discount;
        this.feedbacks = feedbacks;
        this.images = images;
        this.linkYoutube = linkYoutube;
        this.description = description;
        this.currentCount = currentCount;
        this.saleCount = saleCount;
    }
}

export class ICharacteristic {
    name: string;
    value: string | number;

    constructor(name: string, value: string | number) {
        this.name = name;
        this.value = value;
    }
}

export class IFeedback {
    author: IUser;
    content: string;
    mark: number;
    data: string;
    likes: number[];

    constructor(author: IUser, content: string, mark: number, data: string, likes: number[], dislikes: number[]) {
        this.author = author;
        this.content = content;
        this.mark = mark;
        this.data = data;
        this.likes = likes;
        this.dislikes = dislikes;
    }

    dislikes: number[];
}

