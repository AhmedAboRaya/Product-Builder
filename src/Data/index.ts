import { v4 as uuidv4 } from 'uuid';

export interface IProduct {
    id: number | undefined ;
    title: string;
    description: string;
    imageURL: string;
    colors: string[];
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
        id: 1,
        title:"Ferrari 458 Italia",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ullam officia sint modi quaerat quisquam totam odio autem vero omnis magnam, veniam a quis voluptates",
        imageURL: "https://th.bing.com/th/id/R.c0985a932ea2e94a4f2ff9fef2eb2e63?rik=Ym6AtEMngJdMIQ&riu=http%3a%2f%2fwww.marinoperformancemotors.com%2fimagetag%2f12892%2f4%2fl%2fUsed-2014-Ferrari-458-Italia.jpg&ehk=E%2bvbugKP4VSPFwK88wXgTvGN62nvI%2b9qeUOhueCGzOU%3d&risl=&pid=ImgRaw&r=0",
        price: "2.600.000",
        colors: ["#FF0000"]
    },
    {
        id: 3,
        title:"Lamborghini Aventador",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ullam officia sint modi quaerat quisquam totam odio autem vero omnis magnam, veniam a quis voluptates",
        imageURL: "https://th.bing.com/th/id/R.77597ba94dbbae78287c534bd06643af?rik=n3qDEehIlmbEzA&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-lamborghini-huracan-front-view-carcarvehicletransportlamborghini-961524661745jdw6l.png&ehk=2jNvS3S2%2fIezV1hSSOCegkNDZhv9rcDdI3tikT3uATw%3d&risl=&pid=ImgRaw&r=0",
        price: "1.800.000",
        colors: ["#0000FF"]
    },
    {
        id: 4,
        title:"McLaren 675LT",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ullam officia sint modi quaerat quisquam totam odio autem vero omnis magnam, veniam a quis voluptates",
        imageURL: "https://th.bing.com/th/id/OIP.BuT1tpl52ttxBLIJClyGmQHaEo?w=1280&h=800&rs=1&pid=ImgDetMain",
        price: "2.000.000",
        colors: ["#510101"]
    },
    {
        id: 5,
        title:"MP4-12C ",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ullam officia sint modi quaerat quisquam totam odio autem vero omnis magnam, veniam a quis voluptates",
        imageURL: "https://th.bing.com/th/id/R.b902096f54f203b8e5b617b6e3c41e16?rik=HBp%2b2iyOkTG%2b2w&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fBest-Cars-Full-HD-Photos-1920x1080.jpg&ehk=%2fjLuRL0avCLGt9lgNqfWbojNBcWD3KIb2S1OLUBUNa4%3d&risl=&pid=ImgRaw&r=0",
        price: "1.300.000",
        colors: ["#808080"]
    },
    {
        id: 6,
        title:"Land Rover",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ullam officia sint modi quaerat quisquam totam odio autem vero omnis magnam, veniam a quis voluptates",
        imageURL: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?cs=srgb&dl=car-vehicle-luxury-116675.jpg&fm=jpg",
        price: "1.000.000",
        colors: ["#FFFFFF"]
    },
       {
        id: 2,
        title:"Ferrari 296 GTB",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ullam officia sint modi quaerat quisquam totam odio autem vero omnis magnam, veniam a quis voluptates",
        imageURL: "https://th.bing.com/th/id/R.c1bb65deb741871071a0d0de120be982?rik=n%2f3Pn4QlvhVIXA&pid=ImgRaw&r=0",
        price: "1.500.000",
        colors: ["#FF0000"]
    },

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
    "#FFFFFF", // Approximation for bg-red-500
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

