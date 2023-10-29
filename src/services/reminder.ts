// We are going to use a fake back end service called 'JSON placeholder' - https://jsonplaceholder.typicode.com/
// To call the backend we are going to use 'AXios' library.
import axios from 'axios';
import Reminder from '../models/reminder';

class ReminderService {
  http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });

  // Now im defining a bunch of methods for getting todos, adding them and removing them.
  async getReminders() {
    // Since this get method is generic we specify the type of objects we expect to get.
    // In this method we specify the URL or the endpoint.
    const response = await this.http.get<Reminder[]>('/todos');
    return response.data;
  }

  async addReminder(title: string) {
    const response = await this.http.post<Reminder>('/todos', { title });
    return response.data;
  }

  async removeReminder(id: number) {
    // We dont need to supply a generic argument here, we just pass a URL
    const response = await this.http.delete('/todos/' + id);
    return response.data;
  }
}

//  Instead of exporting the ReminderService class we are gonna export an instance of the class
// with this the consumers of this module dont have to new up an instance of this service every time.
export default new ReminderService();
