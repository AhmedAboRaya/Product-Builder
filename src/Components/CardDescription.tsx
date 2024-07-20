interface IProps {
    description: string;
}

const CardDescription = ({description}: IProps) => {
    return (
        <p className="text-gray-900 mt-3 ml-2">{description}</p>
    )
}

export default CardDescription  