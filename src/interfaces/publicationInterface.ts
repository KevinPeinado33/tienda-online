export interface Publication {
    id?:         number;
    title:       string;
    description: string;
    image?:      string;
    price:       number;
    status:      boolean;
    categoryId?: number;
    createAt?:   string;
    updateAt?:   string;
}
