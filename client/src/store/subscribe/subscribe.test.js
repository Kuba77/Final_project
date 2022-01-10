import { fetchData } from './fetchDataForTest';
import axios from 'axios';
import configData from "../../config/config.json"

jest.mock('axios')

describe('fetchData', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
      data: {
        email: "gonny@gmail.com",
        letterSubject: "Dear subcriber",
        letterHtml: "Thanks for subcribe"         
      }
    };

    axios.post.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchData('react')).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(
      `${configData.SUBSCRIBERS}`,
    );
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.post.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    await expect(fetchData('react')).rejects.toThrow(errorMessage);
  });
});