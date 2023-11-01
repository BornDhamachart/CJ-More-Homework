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
  
  export interface Shelf {
    no: string;
    status: string;
    picture_name : string;
    picture_url: string;
    picture_upload_date: string;
    comment : string;
  }
  
  export interface ShelfData {
    branch_code: number;
    shelves: Shelf[];
  }