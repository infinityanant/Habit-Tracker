import { useState } from 'react';

export default function HabitForm({ onAdd }) {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        onAdd(name);
        setName('');
    };

    return (
        <form className="habit-form" onSubmit={handleSubmit}>
            <input
                id="habit-input"
                type="text"
                className="habit-input"
                placeholder="Enter a new habit…"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={50}
                autoComplete="off"
            />
            <button id="add-habit-btn" type="submit" className="btn btn-primary">
                <span className="btn-icon">+</span>
                Add Habit
            </button>
        </form>
    );
}
