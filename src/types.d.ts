declare namespace Definitions {
  export type Friend = {
    id: number;
    img: string;
    first_name: string;
    last_name: string;
    status: string;
    available: boolean;
    phone?: string;
    address_1?: string;
    city?: string;
    state?: string;
    zipcode?: string;
    bio?: string;
    photos?: string[];
    statuses?: string[];
  };
  export type FriendRequiredDetail = Required<Friend>;
}
