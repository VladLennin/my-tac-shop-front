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

export enum Roles {
    "ADMIN",
    "USER"
}

export class IUser {
    name: string;
    surname: string;
    address: string;
    phoneNumber: string;
    mail: string;
    role: Roles;
    password:string;

    constructor(name: string, role: Roles, surname: string, defaultAddress: string, number: string, mail: string,password:string) {
        this.name = name;
        this.surname = surname;
        this.address = defaultAddress;
        this.phoneNumber = number;
        this.mail = mail;
        this.role = role;
        this.password = password;
    }



}

export class ICategory {
    name: string;
    subcategories: ISubcategory[];
    image: Picture;
    id: number;

    constructor(id: number, name: string, subcategories: ISubcategory[], img: Picture) {
        this.name = name;
        this.id = id;
        this.subcategories = subcategories;
        this.image = img;
    }
}

export class ISubcategory {
    categoryId:number;
    name: string;
    image: Picture;
    id: number;

    constructor(id: number,categoryId:number, name: string, img: Picture) {
        this.name = name;
        this.image = img;
        this.id = id;
        this.categoryId = categoryId;
    }

}

export class Picture {
    content: string;
    parentId?: number;

    constructor(content: string) {
        this.content = content;
    }

}

export class IProduct {
    name: string;
    cost: number;
    characteristics: ICharacteristic[];
    created?: string;
    discount: number;
    feedbacks: IFeedback[];
    images: Picture[];
    linkYoutube: string;
    description: string;
    currentCount: number;
    saleCount: number;
    id: number;
    categoryId: number;
    subcategoryId: number

    constructor(subcategoryId: number, categoryId: number, name: string, cost: number, characteristics: ICharacteristic[],
                discount: number, feedbacks: IFeedback[],
                images: Picture[], linkYoutube: string, description: string,
                currentCount: number, saleCount: number,id:number) {
        this.name = name;
        this.cost = cost;
        this.characteristics = characteristics;
        this.discount = discount;
        this.feedbacks = feedbacks;
        this.images = images;
        this.linkYoutube = linkYoutube;
        this.description = description;
        this.currentCount = currentCount;
        this.saleCount = saleCount;
        this.subcategoryId = subcategoryId;
        this.categoryId = categoryId;
        this.id = id;
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

export class IFlag {
    value: boolean;
    name: string;

    constructor(value: boolean, name: string) {
        this.value = value;
        this.name = name;
    }
}

export class IBase64file {
    file?: File;
    base64URL: string;

    constructor(file: File, base64URL: string) {
        this.file = file;
        this.base64URL = base64URL;
    }
}

export class IToast {
    index: string;
    content: string;
    icon: string

    constructor(index: string, content: string, icon: string) {
        this.index = index;
        this.content = content;
        this.icon = icon;
    }
}

