
const MyButton  = ({text, type}) => {

    return (
        <>
            <button className="px-2 py-1 w-full font-medium bg-danger-800 text-danger-50 hover:bg-danger-900 rounded-sm disabled:bg-gray-200" type={type}>{text}</button>
        </>
    )
}

export default MyButton;
