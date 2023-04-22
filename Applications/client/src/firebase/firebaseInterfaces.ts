export interface UserDetails{
    email: string;
    password: string;

}

export interface Socials{
    name: string;
    icon: string;

}


export declare type SocialProviders = "google" | "facebook" | "microsoft"