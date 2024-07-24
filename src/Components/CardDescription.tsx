interface IProps {
    description: string;
}

const CardDescription = ({description}: IProps) => {
    return (
        <p className="text-gray-900 mt-2 ml-2 text-sm sm:text-md md:text-md lg:tetx-lg">{description}</p>
    )
}

export default CardDescription  