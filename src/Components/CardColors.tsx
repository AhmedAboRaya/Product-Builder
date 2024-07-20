interface IProps {
    color: string;
}

const CardColors = ({color}: IProps) => {
    return (
        <div className={`cursor-pointer my-3 size-4 sm:size-5 md:size-6 lg:size-7 rounded-full ${color}`}></div>
    )
}

export default CardColors