import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Changes Made:
 * 1. Change js file to jsx since we're returning a component. Rename to tsx for typescript-enabled applications.
 * 2. Add export default SampleComponent to be used.
 * 3. Use async/await instead of .then/.catch to make it more readable 
 * 4. Error message should be informative.
 * 5. Add Loading status for User experience
 * 6. Display message for empty data.
 * 7. Remove unused variable and div element
 */

const API_URL = process.env.REACT_APP_API_URL;

function SampleComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState();

  useEffect(() => {
    const fetchData = async() => {
      try {
        setLoading(true);
        const result = axios.get(`${API_URL}/data`);
        setData(result);
      } catch(error) {
        const errorMsg = 'An Error occured while fetching data.'
        setError(error.response?.data?.message || error.message || errorMsg);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if(!loading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <p>{error}</p>
  } 

  return (
    <ul>
      {
        data.length ? (
          data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))
        ) : (
          <li>No available data.</li>
        )
      }
    </ul>
  );
}


export default SampleComponent;