import AddInnerButton from "./addInnerButton"

const CustomButton = ({ addHandler }) => {
    return <div className="add-button">
        <AddInnerButton addHandler={addHandler} />
    </div>
}



export default CustomButton