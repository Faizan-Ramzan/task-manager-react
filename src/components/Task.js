import { FaTimes } from 'react-icons/fa'

const task = ({ task }) => {
    return (
        <div className="task">
            <h3>
                {task.text} <FaTimes style={{ color: "red", cursor: "Pointer" }} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default task