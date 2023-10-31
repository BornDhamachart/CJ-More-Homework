export interface ShopDetail {
    address: string;
    branch: string;
    card: number;
    code: number;
    emoney: number;
    lat: number;
    lng: number;
    province: number;
    tel: string;
}

export interface FilterProps {
    name : string;
    province : string;
}