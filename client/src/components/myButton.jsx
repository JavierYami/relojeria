
const MyButton  = ({text, type}) => {

    return (
        <>
            <button className="bg-well-read-300 text-rust-50 rounded ease-in-out px-2 py-1 hover:bg-rust-500" type={type}>{text}</button>
        </>
    )
}

export default MyButton;
