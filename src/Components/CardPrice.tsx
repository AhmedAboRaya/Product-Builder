interface IProps {
    price: string;
}

const CardPrice = ({price}: IProps) => {
    return (
        <h5 className="text-gray-950 ml-3 text-md sm:text-md  font-semibold">{price} EGP</h5>
    )
}

export default CardPrice