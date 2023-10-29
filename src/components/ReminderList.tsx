// Thanks to React code snippets we can type 'rsf' (react stateless function) and we will get
// a basic function component.
import React from 'react';
// Importing interface for defining the shape of the remainders.
import Reminder from '../models/reminder';

// Creating an interface to define the shape of props.
interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <div>
      {/* 
      Im going to return an Unordered List and then im going to map each item in the list of reminders
      to a list item 
    */}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.title}
            <button
              onClick={() => onRemoveReminder(item.id)}
              className="btn btn-outline-danger mx-2 rounded-pill"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReminderList;
