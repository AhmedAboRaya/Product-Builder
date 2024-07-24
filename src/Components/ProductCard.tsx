import Image from "./Image";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CircleColor from "./ui/CircleColor";
import CardPrice from "./CardPrice";
import Button from "./ui/Buttons/Button";
import { HTMLAttributes } from "react";
import { IProduct } from "../Data";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  key?: number;
  imageURL: string;
  imageAlt: string;
  className: string;
  title: string;
  description: string;
  price: string;
  colors?: string[];
  setProductToEdit: (product: IProduct) => void;
  setIsOpenEditModel: () => void;
  setProductToEditIdx: (value: number) => void;
  setIsProductDelete: (value: boolean) => void;
  idx: number;
}

const ProductCard = ({
  imageURL,
  imageAlt,
  className,
  title,
  description,
  price,
  colors,
  idx,
  setProductToEdit,
  setIsOpenEditModel,
  setIsProductDelete,
  setProductToEditIdx}: IProps) => {
  const renderColors = colors?.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  const product = {
    imageURL,
    imageAlt,
    className,
    title,
    description,
    price,
    colors,
  };

  const onEdit = () => {
    setProductToEdit(product);
    setIsOpenEditModel();
    setProductToEditIdx(idx);
  };

  const onDelete= () => {
    setIsProductDelete(true);
  }

  return (
    <div className=" max-w-sm p-2 md:max-w-lg mx-auto text-white border-2 rounded-lg ">
      <Image imageURL={imageURL} alt={imageAlt} className={className} />
      <CardTitle title={title} />
      <CardDescription description={description} />

      <div className="flex space-x-2 flex-wrap">{renderColors}</div>

      <div></div>

      <div className="flex justify-between my-2">
        <CardPrice price={price} />
      </div>

      <div className="grid grid-cols-2 space-x-2">
        <Button
          value={"Edit"}
          bg="bg-blue-600"
          hover="hover:bg-blue-800"
          onClick={onEdit}
        />
        <Button value={"Delete"} bg="bg-red-600" hover="hover:bg-red-800" onClick={onDelete}/>
      </div>
    </div>
  );
};

export default ProductCard;
