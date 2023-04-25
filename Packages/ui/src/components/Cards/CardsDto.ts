export declare interface CardComponentProps {
    image: string
    title: string
    description?: string
    options?: any
    type?: string
    cta?: (input?:any)=>any
    [key:string]:any
}