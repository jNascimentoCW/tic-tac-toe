import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing); //to update the state of the previous state value
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editabelPlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editabelPlayerName = (
            <input
                type="text"
                required
                value={playerName}
                onChange={handleChange}
            />
        );
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editabelPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    );
}
