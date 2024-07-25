import Modal from "./Components/ui/Modal/Modal";
import Button from "./Components/ui/Buttons/Button";
import Input from "./Components/ui/Input";
import ErrorMessage from "./Components/ErrorMessage";
import CircleColor from "./Components/ui/CircleColor";
import { productValidation } from "./Validation";
import { useState, ChangeEvent } from "react";
import { formInputList, IProduct, colors, productList } from "./Data";
import ProductCard from "./Components/ProductCard";
import { txtSlice } from "./Utility/functions";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast"
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
  /*_________ CONSTANT _______*/
  const defaultProductObj: IProduct = {
    id:0,
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [""],
  };

  /*_________ STATES _______*/
  const [isOpen, setIsOpen] = useState(false);

  const [error, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });

  const [product, setProduct] = useState<IProduct>(defaultProductObj);

  const [tempColor, setTempColors] = useState<string[]>([]);

  const [products, setProducts] = useState<IProduct[]>(productList);

  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObj);

  const [isOpenEditModel, setIsOpenEditModel] = useState<boolean>(false);

  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);

  /*_________ HANDLER _______*/
  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const closeEditModal = () => setIsOpenEditModel(false);

  const openEditModal = () => setIsOpenEditModel(true);

  const openDeleteModal = () => setIsOpenDeleteModal(true);

  const closeDeleteModal = () => {event?.preventDefault();setIsOpenDeleteModal(false);}

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });

    setErrors({
      ...error,
      [name]: "",
    });
  };

  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });

    setErrors({
      ...error,
      [name]: "",
    });
  };
  //  ----------------------------------------

  const onSubmitHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event?.preventDefault();

    const errors = productValidation({
      description: product.description,
      title: product.title,
      price: product.price,
      imageURL: product.imageURL,
    });
    console.log(errors);

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    setProducts((prev) => [
      { ...product, id: uuidv4(), colors: tempColor },
      ...prev,
    ]);
    setTempColors([""]);
    setProduct(defaultProductObj);
    closeModal();
    toast.success('Added Successfully',{
      duration:2000
    })
    console.log("Send Data to server");
  };
  //  ----------------------------------------

  const onCancelHandler = () => {
    setProduct(defaultProductObj);
    closeModal();
  };
  //  ----------------------------------------

  const onCancelEditHandler = () => {
    setProductToEdit(defaultProductObj);
    closeEditModal();
  };
  //  ----------------------------------------

  const productDeleteHandler = () => {
    console.log(productToEdit.title);
    const filtered = products.filter(product => product.title !== productToEdit.title)
    setProducts(filtered)
    closeDeleteModal();
    toast.error('Deleted Successfully',{
      duration:2000
    })    
  };
  //  ----------------------------------------
  const onSubmitEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event?.preventDefault();

    const errors = productValidation({
      description: productToEdit.description,
      title: productToEdit.title,
      price: productToEdit.price,
      imageURL: productToEdit.imageURL,
    });
    console.log(errors);

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    const updatedProduct = [...products];
    updatedProduct[productToEditIdx] = {
      ...productToEdit,
      colors: tempColor.concat(productToEdit.colors),
    };
    setProducts(updatedProduct);

    setProductToEdit(defaultProductObj);
    setTempColors([]);
    closeEditModal();
    toast.success('Edit Successfully',{
      duration:2000
    })
    console.log("Send Data to server");
  };

  /*_________ RENDER INPUT FORM _______*/
  const renderInputList = formInputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.id} className="ml-1 mb-1 font-semibold text-black">
        {" "}
        {input.label}{" "}
      </label>
      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage msg={error[input.name]} />
    </div>
  ));

  /*_________ RENDER INPUT FORM OF EDIT _______*/
  const renderProductEditWithErrorMsg = (
    id: string,
    label: string,
    name: keyof IProduct
  ) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={"title"} className="ml-1 mb-1 font-semibold text-black">
          {label}
        </label>
        <Input
          type={"text"}
          id={id}
          name={name}
          value={productToEdit[name]}
          onChange={onChangeEditHandler}
        />
        <ErrorMessage msg={""} />
      </div>
    );
  };

  /*_________ RENDER COLORS IN INPUT FORM _______*/
  const renderColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          setTempColors((prev) => prev.filter((element) => element !== color));
          return;
        }

        setTempColors((prev) => [...prev, color]);
      }}
    />
  ));

  /*_________ RENDER COLORS IN EDIT FORM _______*/
  const renderEditColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          setTempColors((prev) => prev.filter((element) => element !== color));
          return;
        }

        if (productToEdit.colors.includes(color)) {
          setTempColors((prev) => prev.filter((element) => element !== color));
          return;
        }

        setTempColors((prev) => [...prev, color]);
      }}
    />
  ));

  /*_________ RENDER _______*/

  return (
    <>
    <Home />
      <div className="container mx-auto pt-4">
        <Button
          bg="bg-blue-700"
          hover="hover:bg-blue-800"
          value="Add Product"
          width="w-full"
          onClick={openModal}
        />

        <div className="grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2 md:grid-cols-2 md:gap-4 lg:gap-4 xl:gap-4 lg:grid-cols-3 xl:grid-cols-4 rounded-xl p-3 m-3">
          {products.map((product: IProduct, idx) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={txtSlice(product.description, 70)}
              imageURL={product.imageURL}
              imageAlt={"Error in image"}
              className={"rounded-md border-2"}
              price={product.price}
              colors={product.colors}
              setProductToEdit={setProductToEdit}
              setIsOpenEditModel={openEditModal}
              setProductToEditIdx={setProductToEditIdx}
              idx={idx}
              setIsProductDelete={openDeleteModal}
            />
          ))}
        </div>
      </div>

      <Footer />

      {/** ADD MODEL **/}
      <Modal closeModal={closeModal} isOpen={isOpen} title="Add New Product">
        <form className="flex-col flex  space-x-2" onSubmit={onSubmitHandler}>
          <div className="w-full pb-4">{renderInputList}</div>

          {/* <div className='mb-2'>
            <SelectMenu />
          </div> */}

          <div className="flex flex-row justify-start space-x-1 flex-wrap">
            {renderColors}
          </div>

          <div className="flex flex-row justify-start space-x-1 flex-wrap">
            {tempColor.map((color) => (
              <span
                key={color}
                className="p-[2px] text-white text-sm mb-1 rounded-md"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>

          <div className="flex space-x-1 w-full">
            <Button
              bg="bg-blue-600"
              hover="hover:bg-blue-800"
              value="Submit"
              width="w-full"
            />
            <Button
              bg="bg-gray-400"
              hover="hover:bg-gray-500"
              value="Cancel"
              width="w-full"
              onClick={onCancelHandler}
            />
          </div>
        </form>
      </Modal>

      {/** EDIT MODEL **/}
      <Modal
        closeModal={closeEditModal}
        isOpen={isOpenEditModel}
        title="Edit Product"
      >
        <form
          className="flex-col flex  space-x-2"
          onSubmit={onSubmitEditHandler}
        >
          {renderProductEditWithErrorMsg("title", "Product Title", "title")}
          {renderProductEditWithErrorMsg(
            "description",
            "Product Description",
            "description"
          )}
          {renderProductEditWithErrorMsg(
            "imageURL",
            "Product Image URL",
            "imageURL"
          )}
          {renderProductEditWithErrorMsg("price", "Product Price", "price")}

          <div className="flex flex-row justify-start space-x-1 flex-wrap">
            {renderEditColors}
          </div>

          <div className="flex flex-row justify-start space-x-1 flex-wrap">
            {tempColor.concat(productToEdit.colors).map((color) => (
              <span
                key={color}
                className="p-[2px] text-white text-sm mb-1 rounded-md"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>

          <div className="flex space-x-1 w-full">
            <Button
              bg="bg-blue-600"
              hover="hover:bg-blue-800"
              value="Submit"
              width="w-full"
            />
            <Button
              bg="bg-gray-400"
              hover="hover:bg-gray-500"
              value="Cancel"
              width="w-full"
              onClick={onCancelEditHandler}
            />
          </div>
        </form>
      </Modal>

      {/** Delete MODEL **/}
      <Modal
        closeModal={closeDeleteModal}
        isOpen={isOpenDeleteModal}
        title="Delete Product"
      >
        <p className="mb-3 text-gray-600 text-md">
          Are you sure you want to delete this product? This action cannot be
          undone, and you will not be able to recover the product.
        </p>
        <form
          className="flex-col flex  space-x-2"
          onSubmit={productDeleteHandler}
        >
          <div className="flex space-x-1 w-full">
            <Button
              bg="bg-red-600"
              hover="hover:bg-red-800"
              value="Yes, Delete"
              width="w-full"
            />
            <Button
              bg="bg-blue-600"
              hover="hover:bg-blue-800"
              value="Cancel"
              width="w-full"
              onClick={closeDeleteModal}
            />
          </div>
        </form>
      </Modal>

      <div><Toaster/></div>

      
    </>
  );
}

export default App;
