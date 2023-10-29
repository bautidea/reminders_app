// Thanks to React code snippets we can type 'rsf' (react stateless function) and we will get
// a basic function component.
import React from 'react';
// Importing interface for defining the shape of the remainders.
import Reminder from '../models/reminder';

// Creating an interface to define the shape of props.
interface ReminderListProps {
  items: Reminder[];
}

function ReminderList({ items }: ReminderListProps) {
  return (
    <div>
      {/* 
      Im going to return an Unordered List and then im going to map each item in the list of reminders
      to a list item 
    */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReminderList;
