
const MyButton  = ({text, type}) => {

    return (
        <>
            <button className="px-2 py-1 bg-brown-700 text-brown-100 hover:bg-brown-800 hover:text-white rounded-sm" type={type}>{text}</button>
        </>
    )
}

export default MyButton;
