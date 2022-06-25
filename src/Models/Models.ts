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

export class IContact {
    name: string;
    number: string;

    constructor(name: string, number: string) {
        this.name = name;
        this.number = number;
    }
}

export class IUser {
    name: string;
    surname: string;
    address: string;
    phoneNumber: string;
    mail: string;
    image:Picture;

    constructor(image:Picture, name: string, surname: string, defaultAddress: string, number: string, mail: string) {
        this.name = name;
        this.surname = surname;
        this.address = defaultAddress;
        this.phoneNumber = number;
        this.mail = mail;
        this.image = image;
    }
}

export class ICategory {
    name: string;
    subcategories: ISubcategory[];
    image: Picture;
    id:number;

    constructor(id:number,name: string, subcategories: ISubcategory[], img: Picture) {
        this.name = name;
        this.id = id;
        this.subcategories = subcategories;
        this.image = img;
    }
}

export class ISubcategory {
    name: string;
    image: Picture;
    id: number;

    constructor(id: number, name: string, img: Picture) {
        this.name = name;
        this.image = img;
        this.id = id;
    }

}

export class Picture {
    content: string;

    constructor(content: string) {
        this.content = content;
    }

}

export class IProduct {
    name: string;
    cost: number;
    characteristics: ICharacteristic[];
    created: string;
    discount: number;
    feedbacks: IFeedback[];
    images: Picture[];
    linkYoutube: string;
    description: string;
    currentCount: number;
    saleCount: number;
    id: number;
    subcategoryId:number

    constructor(id: number,subcategoryId:number, name: string, cost: number, characteristics: ICharacteristic[],
                dataAdd: string, discount: number, feedbacks: IFeedback[],
                images: Picture[], linkYoutube: string, description: string,
                currentCount: number, saleCount: number) {
        this.name = name;
        this.cost = cost;
        this.characteristics = characteristics;
        this.created = dataAdd;
        this.discount = discount;
        this.feedbacks = feedbacks;
        this.images = images;
        this.linkYoutube = linkYoutube;
        this.description = description;
        this.currentCount = currentCount;
        this.saleCount = saleCount;
        this.id = id;
        this.subcategoryId = subcategoryId;
    }


}

export class ICharacteristic {
    name: string;
    values: string[]

    constructor(name: string, value: string[]) {
        this.name = name;
        this.values = value;
    }
}

export class IFeedback {
    author: IUser;
    content: string;
    mark: number;
    created: string;
    likes: number;
    dislikes: number;

    constructor(author: IUser, content: string, mark: number, data: string, likes: number, dislikes: number) {
        this.author = author;
        this.content = content;
        this.mark = mark;
        this.created = data;
        this.likes = likes;
        this.dislikes = dislikes;
    }

}

