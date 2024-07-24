interface IProps {
    title: string;
}

const CardTitle = ({title}: IProps) => {
    return (
        <h2 className="text-black text-left text-md sm:text-md lg:text-lg font-bold ml-2 mt-2">{title}</h2>
    )
}

export default CardTitle