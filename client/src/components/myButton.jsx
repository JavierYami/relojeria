
const MyButton  = ({text, type}) => {

    return (
        <>
            <button className="px-2 py-1 font-medium bg-brown-400 text-brown-900 hover:bg-brown-500 rounded-sm" type={type}>{text}</button>
        </>
    )
}

export default MyButton;
