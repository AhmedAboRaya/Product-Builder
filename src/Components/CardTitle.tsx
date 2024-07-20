interface IProps {
    title: string;
}

const CardTitle = ({title}: IProps) => {
    return (
        <h2 className="text-black text-left text-lg font-semibold ml-2">{title}</h2>
    )
}

export default CardTitle