import React, { useState } from 'react';

export const Modal = ({ addTodo, setBookingModal }) => {

    const [value, setValue] = useState('');


    const handleSubmit = (e) => {
        // prevent default action
        e.preventDefault();
        if (value) {
            // add todo
            addTodo(value);
            // clear form after submission
            setValue('');
            setBookingModal(null)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <input className="textarea textarea-bordered w-full mt-10" placeholder="Add new todo" type="text" value={value} onChange={(e) => setValue(e.target.value)}
                    />
                    <div className="modal-action">
                        <button type='submit' htmlFor="my-modal" className="todo-btn w-full">Add Todo</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

