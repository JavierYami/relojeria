
const MyButton  = ({text, type}) => {

    return (
        <>
            <button className="px-2 py-1 w-full font-medium bg-brown-400 text-brown-950 hover:bg-brown-500 rounded-sm disabled:bg-brown-200 text-brown-100" type={type}>{text}</button>
        </>
    )
}

export default MyButton;
