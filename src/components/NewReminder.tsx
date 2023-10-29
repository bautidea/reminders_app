import React, { useState } from 'react';

// Here we can annotate the return value of our function component with JSX.Element
// and with this if we dont return something, or if you return a different kind of object
// we get a compilation error.
// So by annotating teh return value of our function with JSX.Element the TS compiler will ensure
// that we return a JSX element.
function NewReminder(): JSX.Element {
  // We are going to use a state hook.
  const [title, setTitle] = useState('');

  return (
    <form>
      <label htmlFor="title"></label>
      <input
        id={title}
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
