import React, { useState } from 'react';

// Lets define an interface so its a valid prop for the 'New Reminder' component.
interface NewRemainderProps {
  onAddReminder: (title: string) => void;
}

// Here we can annotate the return value of our function component with JSX.Element
// and with this if we dont return something, or if you return a different kind of object
// we get a compilation error.
// So by annotating teh return value of our function with JSX.Element the TS compiler will ensure
// that we return a JSX element.
function NewReminder({ onAddReminder }: NewRemainderProps): JSX.Element {
  // We are going to use a state hook.
  const [title, setTitle] = useState('');

  // To handle the form submission
  const submitForm = (e: React.FormEvent) => {
    // Here we are preventing the default submission of the form, so we can do everything on the client.
    e.preventDefault();
    // If title is truthy we end the execution of the function.
    if (!title) return;
    // We call our callback function.
    onAddReminder(title);
    // Clearing the input field once a reminder is added.
    setTitle('');
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"></label>
      <input
        value={title}
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="form-control"
      />
      <button type="submit" className="btn btn-primary my-3 rounded-pill">
        Add Reminder
      </button>
    </form>
  );
}

export default NewReminder;
