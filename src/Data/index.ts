import { v4 as uuidv4 } from 'uuid';

export interface IProduct {
    id?: number | undefined;
    title: string;
    description: string;
    imageURL: string;
    colors?: string[];
    price: string;
}

export interface IFormInput {
    id: string;
    name: "title" | "description" | "imageURL" | "price";
    label: string;
    type: string;
    
}


export const productList: IProduct[] = [
    {
        id: uuidv4(),
        title:"2022 Genesis GV70: Nomine",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ullam officia sint modi quaerat quisquam totam odio autem vero omnis magnam, veniam a quis voluptates",
        imageURL: "https://th.bing.com/th/id/R.5d1b5a852feb67534d9b91f0d99ff437?rik=nPltdhOoUlVOQg&pid=ImgRaw&r=0",
        price: "500.000",
        colors: ["#0000FF", "#000080", "#808080"]
    },
    {
        id: uuidv4(),
        title:"2022 Genesis GV70: Nomine",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ullam officia sint modi quaerat quisquam totam odio autem vero omnis magnam, veniam a quis voluptates",
        imageURL: "https://th.bing.com/th/id/OIP.K8VMbT6lukoQtXVGbFdoLgHaEK?rs=1&pid=ImgDetMain",
        price: "500.000",
        colors: ["#800080", "#000080", "#808080"]
    },
    {
        id: uuidv4(),
        title:"2022 Genesis GV70: Nomine",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ullam officia sint modi quaerat quisquam totam odio autem vero omnis magnam, veniam a quis voluptates",
        imageURL: "https://th.bing.com/th/id/R.77597ba94dbbae78287c534bd06643af?rik=n3qDEehIlmbEzA&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-lamborghini-huracan-front-view-carcarvehicletransportlamborghini-961524661745jdw6l.png&ehk=2jNvS3S2%2fIezV1hSSOCegkNDZhv9rcDdI3tikT3uATw%3d&risl=&pid=ImgRaw&r=0",
        price: "500.000",
        colors: ["#800080", "#FF00FF", "#808080"]
    },
    {
        id: uuidv4(),
        title:"2022 Genesis GV70: Nomine",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ullam officia sint modi quaerat quisquam totam odio autem vero omnis magnam, veniam a quis voluptates",
        imageURL: "https://th.bing.com/th/id/OIP.BuT1tpl52ttxBLIJClyGmQHaEo?w=1280&h=800&rs=1&pid=ImgDetMain",
        price: "500.000",
        colors: ["#FF00FF", "#000080", "#808080"]
    },
    {
        id: uuidv4(),
        title:"2022 Genesis GV70: Nomine",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ullam officia sint modi quaerat quisquam totam odio autem vero omnis magnam, veniam a quis voluptates",
        imageURL: "https://th.bing.com/th/id/R.b902096f54f203b8e5b617b6e3c41e16?rik=HBp%2b2iyOkTG%2b2w&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fBest-Cars-Full-HD-Photos-1920x1080.jpg&ehk=%2fjLuRL0avCLGt9lgNqfWbojNBcWD3KIb2S1OLUBUNa4%3d&risl=&pid=ImgRaw&r=0",
        price: "500.000",
        colors: ["#800080", "#FF00FF", "#0F000F"]
    },
    {
        id: uuidv4(),
        title:"2022 Genesis GV70: Nomine",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ullam officia sint modi quaerat quisquam totam odio autem vero omnis magnam, veniam a quis voluptates",
        imageURL: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?cs=srgb&dl=car-vehicle-luxury-116675.jpg&fm=jpg",
        price: "500.000",
        colors: ["#800080", "#000080", "#808080"]
    },
    {
        id: uuidv4(),
        title:"2022 Genesis GV70: Nomine",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ullam officia sint modi quaerat quisquam totam odio autem vero omnis magnam, veniam a quis voluptates",
        imageURL: "https://th.bing.com/th/id/OIP.f6iaToJ9LkA79rVbL9sjtQHaFS?w=640&h=457&rs=1&pid=ImgDetMain",
        price: "500.000",
        colors: ["#800080", "#FF33FF", "#FF00FF"]
    }
];





export const formInputList: IFormInput[]= [
    {
        id: "title",
        name: "title",
        label: "Product Title",
        type: "text"
    },
    {
        id: "description",
        name: "description",
        label: "Product Description",
        type: "text"
    },
    {
        id: "image",
        name: "imageURL",
        label: "Product Image URL",
        type: "text"
    },
    {
        id: "price",
        name: "price",
        label: "Product Price",
        type: "text"
    }
]


export const colors: string[] = [
    "#FF5733", // Approximation for bg-red-500
    "#0F000F", // Approximation for bg-green-400
    "#3357FF", // Approximation for bg-blue-500
    "#FF33FF", // Approximation for bg-purple-500
    "#FF6633", // Approximation for bg-orange-500
    "#FF0000", // Red
    "#510101", // Green
    "#0000FF", // Blue
    "#FF00FF", // Magenta
    "#800000", // Maroon
    "#808000", // Olive
    "#008000", // Dark Green
    "#800080", // Purple
    "#000080", // Navy
    "#808080"  // Gray
];

