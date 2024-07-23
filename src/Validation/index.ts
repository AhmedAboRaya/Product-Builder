// Function to Validate inputs of product
interface IProduct {
    title: string;
    description: string;
    imageURL: string;
    price: string;
}

/**
 * 
 * @param product 
 * @returns 
 */
export const productValidation = ( product :  IProduct ) => {
    const errors : IProduct = {
        title:"",
        description: "",
        imageURL: "",
        price: ""
    };

    const validURL = /\bhttps?:\/\/\S+\.(jpg|jpeg|png|gif|bmp|webp)\b/i.test(product.imageURL);

    // Validate on Title
    if(!product.title.trim() || product.title.length < 10 || product.title.length > 80){
        errors.title= "Product title must be between 10 and 80 characters!";
    }
    // Validate on Description
    if(!product.description.trim() || product.description.length < 10 || product.description.length > 800){
        errors.description= "Product description must be between 10 and 800 characters!";
    }
    // Validate on ImageURL
    if(!product.imageURL.trim() || !validURL){
        errors.imageURL= "Valid image URL is required";
    }
    // Validate on Price
    if(!product.price.trim() || isNaN(Number(product.price))){
        errors.price= "Product price must be a number";
    }

    return errors;
}