
const MyButton  = ({text, type}) => {

    return (
        <>
            <button className="bg-rust-50 rounded px-2 w- py-1" type={type}>{text}</button>
        </>
    )
}

export default MyButton;
