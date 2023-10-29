import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import reminderService from './services/reminder';
import { log } from 'console';

function App() {
  // Im going to use state hooks to properly store our reminders in the app component.
  // In react with TS projects this function is generic, so in angle brackets we have to specify
  // the type of object we want to store here.
  // We are passing an empty array to 'useState' function, because if we dont supply any arguments
  // by default, undefined will be passed, and in that way, reminders, can only be 'Remainder[]'
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };
  // Defining a function for deleting reminders, and pass it as a callback to the reminders list.
  const removeReminder = (id: number) => {
    // In our reminders array im using the filter method to get all reminders, except the one with
    // the passed id, and then we pass the result to setReminders.
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  return (
    <div className="App">
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
